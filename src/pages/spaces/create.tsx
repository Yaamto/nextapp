import { whoamiSsr } from '@/service/auth';
import { createSpace } from '@/service/space';
import { ErrorMessage } from '@hookform/error-message';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const create = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()
    const toast = useRef<Toast>(null);

    const onSubmit = async (data: any) => {
        try {         
         const response:any = await createSpace(data)
          if(response.message){
            toast.current?.show({severity:'error', summary: 'Error', detail: response.message, life: 5000});
          } else {  
            console.log(response)     
           router.push({
                pathname: '/spaces',
                query: { newSpace: JSON.stringify(response)},
           })
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
           <Toast ref={toast} />
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="Name">Name</label>
                <InputText type='text' placeholder='Enter a name' id="name" {...register("name", { required: "Name is required." })} className='w-[300px] md:w-[450px]' />
            </div>
            <div className='text-red-500'>
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p>{message}</p>}
                  />
            </div>
             <div className="flex flex-col gap-2">
                <label htmlFor="description">description</label>
                <InputText type='text' placeholder='Enter a description' id="description" {...register("description", { required: "description is required." })} className='w-[300px] md:w-[450px]' />
            </div>
            <div className='text-red-500'>
                  <ErrorMessage
                    errors={errors}
                    name="description"
                    render={({ message }) => <p>{message}</p>}
                  />
            </div>
            <Button label='submit' type="submit"/>
            </form>
        </div>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    const me: any = await whoamiSsr(context.req.headers.cookie)

    if(me.statusCode === 403){
     return {
       redirect: {
         destination: '/',
         permanent: false,
       },
     }
    }
     return {
       props: {},
     };
  
 };

export default create;
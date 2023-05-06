import { useUser } from '@/context/UserContext';
import { oswald, roboto } from '@/fonts/font';
import { signup } from '@/service/auth';
import { ErrorMessage } from '@hookform/error-message';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FileUpload } from 'primereact/fileupload';
import { IUser } from '@/interfaces';

const register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const toast = useRef<Toast>(null);
    const router = useRouter()
    const {user, update} = useUser()
    const [file, setFile] = useState<File | null>(null);
  console.log(file)

    const onSubmit = async (data: any) => {
        const {username, email, password} = data
      
        try {
          if(file==null){
           return toast.current?.show({severity:'error', summary: 'Error', detail: "Please upload an image", life: 5000});
          }
            const response: any  = await signup(username, email, password , file)
          if(response.message){
            toast.current?.show({severity:'error', summary: 'Error', detail: response.message, life: 5000});
          } else {
            update(response)
           router.push('/')
          }
        } catch (error) {
          console.log(error);
        }
      };
      const onFileUpload = (event: { files: File[] } ) => {
        setFile(event.files[0]);
      };


    return (
        <div>
            <Toast ref={toast} />
             <form action="" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className={`flex flex-col justify-center items-center gap-3 w-sreen mt-[100px] ${oswald.className}`} >
             <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <InputText type='text' id="email" {...register("email", { required: "Email is required." })} className='w-[300px] md:w-[450px]'  placeholder='Enter an email'/>
                </div>
                <div className='text-red-500'>
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="username">username</label>
                <InputText type='text' id="username" {...register("username", { required: "username is required." })} className='w-[300px] md:w-[450px]' placeholder='Enter an username'/>
                </div>
                <div className='text-red-500'>
                  <ErrorMessage
                    errors={errors}
                    name="username"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
                <div className="card flex gap-1">
                <FileUpload mode="basic" name="image" accept="image/*" maxFileSize={1000000} customUpload={true} cancelLabel="cancel" uploadHandler={onFileUpload} auto chooseLabel={file?.name} />
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <InputText type='password' placeholder='Enter a password' id="password" {...register("password", { required: "Password is required." })} className='w-[300px] md:w-[450px]'/>
                  <p className={`text-[15px] ${roboto.className}`}>Already signup ? Click <Link href="/login" className='text-blue-400'>here</Link> to signin</p>
                </div>
                <div className='text-red-500'>
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => <p>{message}</p>}
                    />
                  </div>
                 <Button type='submit' label="Submit" className='w-[300px] md:w-[450px]' />
            </form>
        </div>
    );
};

export default register;
import { IUser } from '@/interfaces';
import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { signin } from '@/service/auth';
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
import { InputText } from 'primereact/inputtext';
import { useUser } from "@/context/UserContext";
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import Router, { useRouter } from 'next/router'
const login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user, update} = useUser()
    const toast = useRef<Toast>(null);
    const router = useRouter()

    const onSubmit = async (data: any) => {
        try {
          
         const response:any = await signin(data)
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

    return (
        <div>
           <Toast ref={toast} />
            <form action="" onSubmit={handleSubmit(onSubmit)} className='h-screen flex flex-col justify-center items-center gap-3 w-sreen'>
              <h1>Hello, welcome to your App !</h1>
               <span className="p-float-label">
                <InputText type='text' id="email" {...register("email", { required: "Email is required." })} className='w-[300px] md:w-[450px]' />
                <label htmlFor="email">Email</label>
                </span>
                <div className='text-red-500'>
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
                <span className="p-float-label">
                <InputText type='password' placeholder='Enter your password' id="password" {...register("password", { required: "Password is required." })} className='w-[300px] md:w-[450px]'/>
                <label htmlFor="password">Password</label>
                </span>
                <div className='text-red-500'>
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => <p>{message}</p>}
                    />
                  </div>
                 <Button type='submit' label="Submit" className='w-[300px] md:w-[450px]' />
                 <button type="button" className='w-[300px] md:w-[450px] flex gap-3 justify-center items-center bg-white text-gray-500 py-3 rounded align-middle '><i className="pi pi-google"></i>Sign with Google</button>
            </form>
            <Link href="/test">Test</Link>
        </div> 
    );
};

export default login;
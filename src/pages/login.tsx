import { IUser } from '@/interfaces';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { signin } from '@/service/auth';
import { ErrorMessage } from '@hookform/error-message';
const login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const onSubmit = async (data: any) => {
        try {
         const response = await signin(data)
          // Faire quelque chose avec la réponse du backend (par exemple, rediriger l'utilisateur)
          if(response.message){
              setErrorMessage(response.message);
          }
        } catch (error) {
          // Gérer les erreurs
          console.log(errors);
        }
      };
      console.log(errors)
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <span>{errorMessage}</span>
                <label htmlFor="email">Email:</label>
                <input type='text' placeholder='Enter your email' id="email" {...register("email", { required: "Email is required." })} />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => <p>{message}</p>}
                />
                <label htmlFor="password">Password:</label>
                <input type='password' placeholder='Enter your password' id="password" {...register("password", { required: "Password is required." })}/>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => <p>{message}</p>}
                />
                <input type="submit" />
            </form>
        </div> 
    );
};

export default login;
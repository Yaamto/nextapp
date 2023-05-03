import { UserContext, useUser } from "@/context/UserContext";
import { whoami, whoamiSsr } from "@/service/auth";
import { GetServerSideProps } from "next";
import { useContext } from "react";
export default function Test() {
  const {user, update} = useUser()


    return<>
    <h1>USER: {user && user.admin ? user.admin.toString() : 'pas de user'}</h1>
    </> 
  }

  export const getServerSideProps: GetServerSideProps = async (context) => {
     const me: any = await whoamiSsr(context.req.headers.cookie)

     if(me.statusCode === 403){
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
     }
      return {
        props: {},
      };
   
  };
import { useUser } from "@/context/UserContext";
export default function Test() {
  const {user, update} = useUser()


    return <h1>USER: {user.admin ? user.admin.toString() : 'pas de user'}</h1>
  }
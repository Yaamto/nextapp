import { ISpace } from "@/interfaces/space";

export const getUserSpaces = async(cookie: any) => {

    try {
        const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/space/user/spaces`, {
            method: "GET",
            headers: {
                "Cookie": cookie || "",
            },
            credentials: "include",
        });
        const res = await response.json();
        return res as ISpace[];
    }catch(err){
        return err
    }
}
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

export const createSpace = async (space: ISpace) => {
    try {
        const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/space`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(space),
        });
        const res = await response.json();
        return res as ISpace;
    }catch(err){
        return err
    }
}

export const addUserToSpace = async (spaceId: string, userId: string) => {
    const users = [userId]
    try {
        const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/space/user/${spaceId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({addUsers: users}),
        });
        const res = await response.json();
        return res as ISpace;
    }catch(err){
        return err
    }
}
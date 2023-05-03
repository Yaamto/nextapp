import { IUser } from "@/interfaces";

export const whoami = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/whoami`, {
            headers: { "Content-Type": "application/json" },
            method: "GET",
            credentials: "include",
        });
        const res = await response.json();
        return res as IUser;
    } catch (err) {
        return err;
    }
};
export const whoamiSsr = async(cookie: any) => {
    try {

        const me: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/whoami`, {
            method: "GET",
            headers: {
                "Cookie": cookie || "",
            }
        }).then((res) => res.json())
        return me
    }catch(err){
        return err
    }
}

export const signin = async (data: Partial<IUser>) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signin`, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data),
        });
        const res = await response.json();
        return res as any;
    } catch (err) {
        return err;
    }
};

export const logout = async() => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
            headers: { "Content-Type": "application/json" },
            method: "post",
            credentials: "include",
        });
        const res = await response.json();
        return res as any;
    } catch (err) {
        return err

    }
}
import urlcat from "urlcat";

export const getUtilityByMap = async (spaceId: string, mapId: string, cookie: string) => {
    console.log(spaceId, mapId)
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/utility/${spaceId}/${mapId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cookie": cookie || "",
            },
            credentials: "include",

        })
        const data = await res.json()
        return data
    }catch(error){
        return error
    }
}

export const getUtilitiesByMap = async (query: any) => {

    try {
        const api = process.env.NEXT_PUBLIC_API_URL
        const api_url = api && urlcat(api, "/utility/spaces", query)
        if(!api_url) return console.log("api_url is null")
        const res = await fetch(api_url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",

        })
        const data = await res.json()
        return data
    }catch(error){
        return error
    }
}

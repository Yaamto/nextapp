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


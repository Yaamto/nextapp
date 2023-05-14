export const getMaps = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/map`)
        const data = await res.json()
        return data
    }
    catch (error) {
        return error
    }

   
}
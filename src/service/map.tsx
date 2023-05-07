export const getMaps = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/map`)
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (error) {
        return error
    }

   
}
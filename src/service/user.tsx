export const searchUser = async (username: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/username/${username}`)
        const data = await res.json()
        return data
    }
    catch (error) {
        return error
    }

}


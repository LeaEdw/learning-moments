export const getAllPosts = async () => {
    const response = await fetch("http://localhost:8088/posts?_expand=topic")
    return await response.json()
}
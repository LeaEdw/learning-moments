export const getAllTopics = async () => {
    const response = await fetch("http://localhost:8088/topics")
    return await response.json()
}
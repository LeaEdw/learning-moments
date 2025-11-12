import "./Posts.css"
import { getAllPosts } from "../../services/postsFetcher";
import { useEffect, useState} from "react"

export const Post = ({post}) => {

    const [topic, setTopic] = useState([]);
    const [assignedTopic, setAssignedTopic] = useState([])

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const topicsArray = await getAllPosts();
                setTopic(topicsArray)
            } catch (error) {
                console.error("Failed to fetch topics.", error)
            }
        }
        fetchTopics();
    }, []);

    useEffect(() => {
        const foundTopic = topic.find(
            (topic) => topic.id === post.topicId
        )
        setAssignedTopic(foundTopic)
    }, [topic, post]);

    return (
        <div className="post">
            <div>
                <div className="post-info">
                    <div>{post.title}</div>
                    <div className="topic"></div>
                    <div>{post.likes}<span><i className="fa-regular fa-thumbs-up"></i></span></div>
                </div>
            </div>

        </div>
    )
}

// Find out why post is undefined in the next session ...

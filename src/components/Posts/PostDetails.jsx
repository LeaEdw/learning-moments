import { useEffect, useState } from "react"
import "./Posts.css"
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../services/postsFetcher";

export const PostDetails = () => {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        // getAllPosts calls the function from the service module 

        getAllPosts(postId).then((data) => {
            // .then((data) => {...}) handles the promise returned by the function
            const postObject = data[0];
            // postObject is set to the only object in the array which is at index '0'
            // since we only match the object from the post that is click on
            setPost(postObject)
        })
    }, [])

    return (
        <div className="posts">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
            <footer>
                <div className="post-author">{post.author}</div> 
                <div className="post-topic">{post.topic?.category}</div>
                <div className="post-like-count">{post.likes}<span><i className="fa-regular fa-thumbs-up"></i></span></div>
            </footer>
        </div>
    )
}

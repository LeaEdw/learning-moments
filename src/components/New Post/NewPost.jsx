import "./NewPost.css";
import "../Topics/TopicsDropdown.css";
import { TopicsDropdown } from "../Topics/TopicsDropdown";
import { createPost } from "../../services/postsFetcher";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/userService";

export const NewPost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "Current User",
    topicId: 0,
    date: "",
    body: "",
    like: 0,
    userId: 1,
  });

  const navigate = useNavigate();

useEffect(() => {
    const learningUser = localStorage.getItem("learning_user");

    if (learningUser) {
        const userObject = JSON.parse(learningUser);
        const authorId = userObject.id;
        
        const fetchAuthorDetails = async () => {
            try {
                const user = await getUserById(authorId);

                if (user) {
                    setPost((prevPost) => ({
                        ...prevPost,
                        userId: user.id,
                        author: user.username
                    }));
                }
            } catch (error){
                console.error("Failed to fetch author details", error)
            }
        };
        fetchAuthorDetails();
    }
}, [])

  const handleNewPostInput = (e) => {
    const { name, value } = e.target;

    setPost((prevPost) => ({
      ...prevPost,
      [name]: name === "topicId" ? parseInt(value) : value,
    }));
  };

  const createNewPost = (e) => {
    e.preventDefault();

    if (post.title === "" || post.body === "" || post.topicId === 0) {
      window.alert(
        "Please fill out the title, body, and select a topic to continue."
      );
      return;
    }
    const newPost = {
      ...post,
      date: new Date().toISOString(),
      
    };
    createPost(newPost).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="new-post-container">
      <h1>Create a new Post</h1>

      <div className="post-form-container">
        <fieldset>
          <input
            type="text"
            className="new-post title"
            name="title"
            placeholder="What's the title of your post?"
            onChange={handleNewPostInput}
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            name="body"
            className="new-post body"
            placeholder="Tell us more about your post!"
            onChange={handleNewPostInput}
            required
          />
        </fieldset>

        <div>Select the topic:</div>
        <TopicsDropdown name="topicId" onChange={handleNewPostInput} />
        <div className="edit-btn">
          <button className="btn-info" onClick={createNewPost}>
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
};

// Create a function to handle saving the information from the form to the database.

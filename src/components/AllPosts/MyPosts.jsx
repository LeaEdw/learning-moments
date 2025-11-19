import "./AllPosts.css";
import { getAllPosts, postDeleter } from "../../services/postsFetcher";
import { Post } from "./Posts";
import { useState, useEffect } from "react";
import { getAllTopics } from "../../services/topicsFetcher";
import { Link } from "react-router-dom";

export const MyPosts = ({ currentUser }) => {
  const [myPosts, setMyPosts] = useState([]);
  const [topics, setTopics] = useState([]);

  const getMyPosts = (all) => {
    let authorId = null;
    const learningUser = localStorage.getItem("learning_user");

    if (learningUser) {
      const userObject = JSON.parse(learningUser);
      authorId = userObject.id;
    }

    if (authorId) {
      const filteredPosts = all.filter((post) => post.userId === authorId);
      setMyPosts(filteredPosts);
    } else {
      setMyPosts([]);
    }
  };

  const fetchAndSetPosts = async () => {
    try {
      const postArray = await getAllPosts();
      getMyPosts(postArray);

      const topicsArray = await getAllTopics();
      setTopics(topicsArray);
    } catch (error) {
      console.error("Failed to fetch data.", error);
    }
  };
  useEffect(() => {
    fetchAndSetPosts();
  }, []);

  const postToDelete = async (postId) => {
    try {
      await postDeleter(postId);

      await fetchAndSetPosts();

    } catch (error) {
      console.error("Failed to delete post.", error);
    }
  };

  return (
    <div>
      <div className="myPosts-container">
        <h1>My Posts ({myPosts.length})</h1>
        {myPosts.map((post) => {
          return (
            <div className="each_post" key={post.id}>
              <Link to={`/posts/${post.id}`} key={post.id}>
                <Post post={post} topics={topics} className="my-posts" />
              </Link>

              <div className="btn-container">
                <button className="edit-my-post-btn">
                  {" "}
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="btn-warning"
                  onClick={() => postToDelete(post.id)}
                >
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

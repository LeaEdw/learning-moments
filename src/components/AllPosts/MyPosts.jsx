import "./AllPosts.css";
import { getAllPosts } from "../../services/postsFetcher";
import { Post } from "./Posts";
import { useState, useEffect } from "react";
import { getAllTopics } from "../../services/topicsFetcher";

export const MyPosts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const postArray = await getAllPosts();
        setAllPosts(postArray);

        const topicsArray = await getAllTopics();
        setTopics(topicsArray);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    if (allPosts.length > 0) {
      let authorId = null;

      const learningUser = localStorage.getItem("learning_user");

      if (learningUser) {
        const userObject = JSON.parse(learningUser);
        authorId = userObject.id;
      }
      if (authorId) {
        const filteredPosts = allPosts.filter(
          (post) => post.userId === authorId
        );
        setMyPosts(filteredPosts);
      } else {
        setMyPosts([]);
      }
    }
  }, [allPosts]);

  return (
    <div>
      <div className="myPosts-container">
        <h1>My Posts ({myPosts.length})</h1>
        {myPosts.map((post) => {
          return (
            <div className="each_post" key={post.id}>
              <Post
               
                post={post}
                topics={topics}
                className="my-posts"
              />
              <div className="btn-container">
                <button className="edit-btn">
                  {" "}
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn-warning">
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

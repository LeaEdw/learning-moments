import "./AllPosts";

import { useEffect, useState } from "react";
import { getAllTopics } from "../../services/topicsFetcher";

export const Post = ({ post }) => {
  const [topic, setTopic] = useState([]);
  const [assignedTopic, setAssignedTopic] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsArray = await getAllTopics();
        setTopic(topicsArray);
      } catch (error) {
        console.error("Failed to fetch topics.", error);
      }
    };
    fetchTopics();
  }, []);

  useEffect(() => {
    if (topic.length > 0 && post.topicId) {
        const foundTopic = topic.find(t => t.id === post.topicId);
        setAssignedTopic(foundTopic)
    }
  }, [topic, post.topicId]);

  return (
    <div className="post">
      <div>
        <div className="post-info">
          <div>{post.title}</div>
          <div className="topic">{assignedTopic ? assignedTopic.name : "Loading Topic"}</div>
          <footer className="post-footer">
            <div className="post-author">{post.author}</div>
            <div className="post-like-count">
              {post.likes}
              <span>
                <i className="fa-regular fa-thumbs-up"></i>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

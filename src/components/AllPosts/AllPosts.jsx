// Imports
import { Post } from "./Posts";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postsFetcher";
import { getAllTopics } from "../../services/topicsFetcher";
import { FilterBar } from "./FilterBar";
import { Link } from "react-router-dom";
import "./AllPosts.css";

export const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //Await the promise return by getAllPosts
        const postArray = await getAllPosts();

        //Set the current state with the awaited data
        setAllPosts(postArray);
        setFilteredPosts(postArray)
      } catch (error) {
        console.error("Failed to fetch all posts.", error);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicArray = await getAllTopics();

        setAllTopics(topicArray);
      } catch (error) {
        console.error("Failed to fetch topics.", error);
      }
    };
    fetchTopics();
  }, []);

  useEffect(() => {
    let postsToDisplay = allPosts;
    // Filter by Topic
    if (selectedTopicId > 0) {
      postsToDisplay = postsToDisplay.filter(
        (post) => post.topicId === selectedTopicId
      );
    }
    if (searchTerm) {
      postsToDisplay = postsToDisplay.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(postsToDisplay);
  }, [allPosts, selectedTopicId, searchTerm]);

  return (
    <div>
      <div>
        <FilterBar
          setSelectedTopicId={setSelectedTopicId}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="allPosts">
        {filteredPosts.map((postObject) => {
          return (
            <Link to={`/posts/${postObject.id}`} key={postObject.id}>
              <Post post={postObject} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};


import { getAllTopics } from "../../services/topicsFetcher";
import { useEffect, useState } from "react";

export const TopicsDropdown = ({setSelectedTopicId}) => {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const allTopicsArray = await getAllTopics();
        setTopic(allTopicsArray);
      } catch (error) {
        console.error("Failed to fetch topics.", error);
      }
    };
    fetchTopics();
  }, []);

  const handleTopicChange = (event) => {
    // The event.target.value holds the ID from the selected <option>
    const topicId = parseInt(event.target.value);
    // Set the state in the parent AllPosts component
    setSelectedTopicId(topicId);
  };

  return (
    <div>
      <select
        id="topics-dropdown"
        onClick={handleTopicChange}
        defaultValue={0}
      >
        {topic.map((topicObject) => {
          return (
            <option key={topicObject.id} value={topicObject.id}>
              {topicObject.category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

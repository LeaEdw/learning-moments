import { getAllTopics } from "../../services/topicsFetcher";
import { useEffect, useState } from "react";
import "./TopicsDropdown.css"

export const TopicsDropdown = ({setSelectedTopicId, onChange, name}) => {
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
    const topicId = parseInt(event.target.value);

    if(setSelectedTopicId) {
      setSelectedTopicId(topicId);
    } else if (onChange) {
      onChange(event);
    }
  }


  return (
    <div>
      <select
        className="topics-dropdown"
        onChange={handleTopicChange}
        name={name}
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

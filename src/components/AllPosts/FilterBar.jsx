import { TopicsDropdown } from "../Topics/TopicsDropdown";
import "./AllPosts.css";

export const FilterBar = ({ setSelectedTopicId, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="filter-bar">
      <div className="search-bar">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search"
          className="post-search"
        ></input>
      </div>
      <div className="selections-container">
        <div className="topics-menu">
          <TopicsDropdown setSelectedTopicId={setSelectedTopicId} />
        </div>
      </div>
    </div>
  );
};

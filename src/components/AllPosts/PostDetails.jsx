import { useEffect, useState } from "react";
import "./Posts.css";
import { useParams, useNavigate } from "react-router-dom";
import { getAllPosts } from "../../services/postsFetcher";
import { getUserByEmail } from "../../services/userService";
import { Authorized } from "../../views/Authorized";

export const PostDetails = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // getAllPosts calls the function from the service module

    getAllPosts(postId).then((data) => {
      setPost(data);
    });
  }, [postId]);

const userIdString = localStorage.getItem("learning_user");
let loggedInUser = 0; 

if (userIdString) {
    try {
        const userObject = JSON.parse(userIdString)

        if (userObject && userObject.id) {
            loggedInUser = parseInt(userObject.id)
        }
    } catch (e) {
        console.error("Error parsing user data from localStorage:", e);
    }
}

const isAuthor = post.userId === loggedInUser;

  const handleEditClick = () => {
    navigate(`/posts/edit/${post.id}`);
  };
console.log(loggedInUser)
  return (
    <div className="post">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>

      <footer className="post-footer">
        <div className="post-author">{post.author}</div>
        <div className="post-topic">{post.topic?.category}</div>

        {isAuthor ? (
          <div className="edit-btn">
            <button className="btn-edit-post" onClick={handleEditClick}>
              Edit Post
            </button>
          </div>
        ) : (
          <div className="post-like-count">
            {post.likes}
            <span>
              <i className="fa-regular fa-thumbs-up"></i>
            </span>
          </div>
        )}
      </footer>
    </div>


  );


};

//   if (!isAuthor) {
//     return (
//       <div className="post">
//         <h1 className="post-title">{post.title}</h1>
//         <p className="post-body">{post.body}</p>
//         <footer className="post-footer">
//           <div className="post-author">{post.author}</div>
//           <div className="post-topic">{post.topic?.category}</div>
//           <div className="post-like-count">
//             {post.likes}
//             <span>
//               <i className="fa-regular fa-thumbs-up"></i>
//             </span>
//           </div>
//         </footer>
//       </div>
//     );
//   } else if (isAuthor) {
//     return (
//       <div className="post">
//         <h1 className="post-title">{post.title}</h1>
//         <p className="post-body">{post.body}</p>
//         <footer className="post-footer">
//           <div className="post-author">{post.author}</div>
//           <div className="post-topic">{post.topic?.category}</div>
//           <div className="edit-btn">
//             <button className="btn-edit-post" onClick={handleEditClick}>
//               Edit Post
//             </button>
//           </div>
//         </footer>
//       </div>
//     );
//   }



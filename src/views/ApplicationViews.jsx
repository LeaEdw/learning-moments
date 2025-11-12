import { useState, useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavBar/NavigationBar";
import { AllPosts } from "../components/AllPosts/AllPosts";
import { MyPosts } from "../components/AllPosts/MyPosts";
import { NewPost } from "../components/New Post/NewPost";
import { Favorites } from "../components/Faves/Faves";
import { Settings } from "../components/Profile/Settings";
import { MyProfile } from "../components/Profile/Profiles";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);

    setCurrentUser(learningUserObject);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<AllPosts />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </>
  );
};

import { useState, useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavBar/NavigationBar";
import { Navbar } from "react-bootstrap";
import { Post } from "../components/Posts/Posts";

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect (() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObject = JSON.parse(localLearningUser)

        setCurrentUser(learningUserObject)
        
    }, [])

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                        <Navbar/>
                        <Outlet />
                        </>
                    }
                >
                    <Route index element={<Post />}/>
                    {/* <Route path="/myPosts" />
                    <Route path="/newPost" />
                    <Route path="/favorites" />
                    <Route path="/settings">
                        <Route index element={<Profile />} />
                        <Route path="/statistics" /> */}
                    {/* </Route> */}
                </Route>
            </Routes>
        </>
    )
}
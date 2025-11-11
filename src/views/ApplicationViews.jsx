import { Route, Routes, Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavBar/NavigationBar";
import { Navbar } from "react-bootstrap";

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
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                </Route>
            </Routes>
        </>
    )
}
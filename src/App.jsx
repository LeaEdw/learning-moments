import { AllPosts } from "./components/AllPosts/AllPosts"
import { NavigationBar } from "./components/NavBar/NavigationBar"
import "./App.css"

export const App = () => {
  return (
    <>
      <NavigationBar/>
      <AllPosts />
    </>
  )
}

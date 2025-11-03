import "./NavigationBar.css"

export const NavigationBar = () => {
    return (
        <ul className="navbar">
            <li className="nav-item"><a>Home</a></li>
            <li><a>My Posts</a></li>
            <li><a>New Post</a></li>
            <li><a>Favorites</a></li>
            <li><a>Settings</a></li>

        </ul>
    )
}
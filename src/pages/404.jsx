import { NavLink } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <span>not found</span>
            <NavLink to="/">back to home</NavLink>
        </div>
    )
}

export default NotFound
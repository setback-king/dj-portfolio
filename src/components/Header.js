import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <h1 className="name">Daniel Barez</h1>
            <nav>
               <li>Home</li>
               <div className="line"></div>
               <li>About</li>
               <div className="line"></div>
               <li>Resume</li>
            </nav>
        </div>
    )
}

export default Header
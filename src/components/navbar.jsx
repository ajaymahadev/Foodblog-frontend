import { Link } from "react-router-dom";
import "../styles/navbar.css"
const Navbar = () => {
    return (

        <div className="navbar">


            <h3 className="ms-5">Stories</h3>

            <div className="links">
                <Link to={'/homePage'} href="">Home</Link>

                <Link to={'/aboutPage'} href="">About</Link>
                <Link to={'/foods'} href="">Foods</Link>
                {/* <a href="">Lifestyle</a> */}
                <Link to={'/posts'} href=""> Post</Link>
                <Link to={'/addpost'} href="">Add Post</Link>
                <a href="">Contact</a>
                <Link to={'/'} href="">Logout</Link>

            </div>

        </div>
    );
}

export default Navbar;
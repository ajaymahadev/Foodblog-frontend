import { Link } from "react-router-dom";
import "../styles/home.css"
import { Navbar } from "react-bootstrap";
import Footer from "./footer";

const Home = () => {
    return (

        <div>
            <div className="home">

                {/* <Navbar/> */}
                <div className="navbar">

                    <h3 className="ms-5">Stories</h3>

                    <div className="links">
                        <a href="">Home</a>
                        <Link to={'/aboutPage'} href="">About</Link>
                        <Link to={'/foods'} href="">Foods</Link>
                        <Link to={'/addpost'} href="">Add Post</Link>
                        <a href="">Contact</a>
                        <Link to={'/'} href="">Logout</Link>

                    </div>

                </div>


                <div className="part2  d-flex ">
                    {/* //align-content-center justify-content-around  */}

                    <div className="images ms-3  ">
                        <img height={"600px"} className=" ms-3" src="https://preview.colorlib.com/theme/stories/images/bg_2.jpg.webp" alt="" />

                    </div>

                    <div className="holdings">

                        <div className="content ms-5 mt-5">
                            <h5 style={{ fontWeight: "normal" }} >FEATURED POSTS</h5>
                            <h1 style={{ fontSize: "40px", fontWeight: "bolder" }} className="">I am A <br />Blogger & I <br /> Love Foods</h1>
                            <h3></h3>

                            <h6 style={{ fontSize: "25px", fontWeight: "lighter", paddingBottom: "25px" }}>A small river named Duden flows <br /> by their place and supplies it with <br /> the necessary regelialia</h6>
                            <button id="readbtn" className="rounded-3 px-4 py-3 bg-black text-light" >Read More   &#8594;</button>

                        </div>

                        <div className="twobutton">
                            <button id="fbtn">&larr; Forward</button>
                            <button id="sbtn">Next &rarr;</button>
                        </div>


                    </div>




                </div>

                <h1 className="ms-5">Recent Stories</h1>


                <div className="stories ms-5 d-flex">



                    <div className="main">


                        <div className="s1 d-flex">



                            <div className="i1 p-4 ">

                                <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_1.jpg.webp" alt="" />
                                <h5>Tasty & Delicious Foods</h5>
                                <a style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                            </div>

                            <div className="i1 p-4">
                                <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_3.jpg.webp" alt="" />
                                <h5>Tasty & Delicious Foods from Scotland</h5>
                                <a style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                            </div>

                        </div>



                        <div className="s2 d-flex">


                            <div className="i1 p-4">
                                <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_4.jpg.webp" alt="" />
                                <h5>Tasty & Delicious Foods</h5>
                                <a style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                            </div>

                            <div className="i1 p-4">
                                <img height="180px" width="250px" src="https://preview.colorlib.com/theme/stories/images/image_5.jpg.webp" alt="" />
                                <h5>Tasty & Delicious Foods</h5>
                                <a style={{ textDecoration: "none", color: "orange" }} href="">Read More &#8594;</a>

                            </div>


                        </div>






                    </div>





                    <div className="s3 p-0">

                        <img className="me-4" height="600px" width="570px" src="https://preview.colorlib.com/theme/stories/images/image_2.jpg.webp" alt="" />

                    </div>























                </div>

            </div>

<Footer/>

        </div>


    );
}

export default Home;
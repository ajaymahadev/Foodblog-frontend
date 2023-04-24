import { useState, useEffect } from "react";
import Banner from "./banner";
import axios from "axios";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Posts = () => {

    let title = "All Posts"

    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get("http://localhost:4000/posts")
            let postData = response.data
          
            setPosts(postData)
        }
        fetchData()
    }, [])

    

    return (
        <div className="main">

            <Navbar />
            <Banner data={title} />
            <h1>All Posts</h1>

            <div className="postss d-flex flex wrap my-5">
                {posts.map((data) => (
                    <div className="post  mx-3">
                        <img src={data.image} width="350" height="350" alt="" />
                        <div className="d1">
                            <h2>{data.titlle}</h2>
                            <h4>-written by {data.author}</h4>

                            <Link to={`/posts/${data._id}`} className="btn btn-warning" id="bsk">Read More</Link>

                        </div>
                    </div>

                ))}
            </div>


            <Footer/>

        </div>
    );
}

export default Posts;
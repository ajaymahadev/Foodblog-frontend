import { useEffect, useState } from "react"
import Navbar from "./navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Footer from "./footer"

const Singlepost = () => {

    let [hi, sethi] = useState([])
    let [loader, setloader] = useState(true)
    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/posts/${params.id}`)
            let postData = response.data
            sethi(postData)
            setloader(false)
        }
        fetchData()
    }, [])

    return (

        <div className="Readmore">

            <Navbar />
            <div className="loader">
                {loader && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEX3U4XHWNbamvoFbia9FvqpYGd4cAFEZgA&usqp=CAU" alt="" />}
            </div>
            <div className="d1 bg-dark bg-opacity-25 mx-5 mt-4 d-flex justify-content-center">
                <div className="my-4 mx-4">
                    <img height={"400px"} w src={hi.image} alt="" />
                </div>
                <div>

                    <h1>{hi.titlle}</h1>
                    <h4>-written by {hi.author}</h4>

                    <h5>{hi.summary}</h5>
                    <iframe className="my-3" title="not" height={"400px"} width={'250px'} src={hi.location} frameborder="0"></iframe>


                </div>
            </div>
            <Link to='/posts' className='btn btn-light btg-lg rounded-2 my-3' >&lt; Posts </Link>
            <Footer />
        </div>

    );
}

export default Singlepost;
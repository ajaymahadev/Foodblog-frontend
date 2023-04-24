import Banner from "./banner";
import Navbar from "./navbar";

const Foods = () => {
    let title = "Foods"
    return (
        <div className="foods">
            <Navbar/>
            <Banner data={title} />
        </div>
    );
}

export default Foods;
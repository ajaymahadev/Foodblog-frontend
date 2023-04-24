import '../styles/banner.css'
const Banner = (props) => {
    let title1 = props.data
    return (
        <div className="banner d-flex align-items-center justify-content-center">
            <div className="Title">
                <h1 className='text-light fw-bolder text-align-center'>{title1}</h1>
            </div>
        </div>
    );
}

export default Banner;
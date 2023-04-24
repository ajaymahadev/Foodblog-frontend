import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.css"
import axios from "axios";
import { useRef } from "react";

const SignIn = () => {


    let navigate = useNavigate()

    let email = useRef(null)
    let password = useRef(null)



    let signIn = (e) => {
        e.preventDefault()

        let data = {
            email: email.current.value,
            password: password.current.value,
        }

        axios.post('http://localhost:4000/signin', data)
            .then((res) => {
                alert(res.data.message) //message from backend 
                if (res.data.message == 'Login Successfull') {
                    navigate('/homePage') //navigate to home page

                }

            })



    }


    return (

        <div className="SignIN">


            <div className="SignUp">


                <div id="shade1" className="signupform d-flex  align-items-center justify-content-center ">




                    <div className="">
                        <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="" />


                        <div className="links">
                            <Link className="text-decoration-none  " to={"/signup"} href="">Create an Account</Link>
                        </div>

                    </div>









                    <div id="form1" className="form  m-5">

                        <h1 className="mb-5">Sign In</h1>


                        <form action="">

                            <div id="test1" className="name mb-4  d-flex align-items-center justify-items-center">

                                <img height={"15px"} width={"15px"} src="https://cdn.icon-icons.com/icons2/3450/PNG/512/people_personal_account_profile_identity_avatar_user_icon_219338.png" alt="" />
                                <input type="email" name="email" ref={email} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Your Email " />

                                {/* <input type="text" class=" " placeholder="Your Name" /> */}

                                {/* form-control my-3 w-100 bg-transparent border-none */}

                                {/* <input type="email" class="form-control  my-3 w-100 " id="exampleFormControlInput1" placeholder="Your Name" /> */}

                            </div>


                            <div id="test1" className="password mb-4 d-flex align-items-center justify-items-center">
                                <img height={"15px"} width={"15px"} src="https://cdn.icon-icons.com/icons2/1812/PNG/96/4213432-closed-lock-password-protect-secure-security-trust_115365.png" alt="" />
                                <input type="password" name="password" ref={password} class="ps-3 my-1 w-100 " placeholder="Password" />


                            </div>


                            {/* <div className="d-flex align-content-center justify-content-center">

                                <input type="checkbox"></input>
                                <label for="t&c" >Remember Me</label>

                            </div> */}


                            <div className="button">
                                <button onClick={signIn} type="submit" className="btn btn-primary px-4 m-1">Login</button>
                            </div>

                        </form>


                    </div>






                </div>
            </div>



        </div>
    );
}

export default SignIn;
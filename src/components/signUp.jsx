import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css"
import { useRef} from "react";

import axios from "axios";
//axios is ALTERNATE FOR FETCH  :--> npm i axios

const SignUp = () => {


    let navigate = useNavigate()

    let name = useRef(null)
    let email = useRef(null)
    let password = useRef(null)
    let confirmpassword = useRef(null)

    let handleSubmit = (e) => {
        e.preventDefault()

        let data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmpassword: confirmpassword.current.value
        }
        // console.log(data);

        if (data.name && data.email && data.password && (data.password == data.confirmpassword)) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message) //message from backend 
                    navigate('/') //navigate to signin page
                })
        }
        else {
            alert("invalid credentials")
        }
    }

    return (



        <div className="SignUp">


            <div id="shade" className="signupform d-flex  align-items-center justify-content-center ">

                <div id="form" className="form w-25 m-5">

                    <h1 className="mb-5">Sign Up</h1>

                    <form action="" >

                        <div id="test1" className="name mb-4  d-flex align-items-center justify-items-center">

                            <img height={"15px"} width={"15px"} src="https://cdn.icon-icons.com/icons2/3450/PNG/512/people_personal_account_profile_identity_avatar_user_icon_219338.png" alt="" />
                            <input type="text" name="name" ref={name} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Your Name " />


                            {/* <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Your Name " /> */}

                            {/* <input type="text" class=" " placeholder="Your Name" /> */}

                            {/* form-control my-3 w-100 bg-transparent border-none */}

                            {/* <input type="email" class="form-control  my-3 w-100 " id="exampleFormControlInput1" placeholder="Your Name" /> */}

                        </div>

                        <div id="test1" className="email mb-4 d-flex align-items-center justify-items-center">

                            <img height={"15px"} width={"15px"} src="https://cdn.icon-icons.com/icons2/656/PNG/96/mail_email_message_electronic_online_web_icon-icons.com_59986.png" alt="" />
                            <input type="email" name="email" ref={email} class=" ps-3 my-1 w-100" id="exampleFormControlInput12" placeholder="Your Email" />

                        </div>

                        <div id="test1" className="password mb-4 d-flex align-items-center justify-items-center">

                            <img height={"15px"} width={"15px"} src="https://cdn.icon-icons.com/icons2/1812/PNG/96/4213432-closed-lock-password-protect-secure-security-trust_115365.png" alt="" />
                            <input type="password" name="password" ref={password} class="ps-3 my-1 w-100 " placeholder="Password" />

                        </div>

                        <div id="test1" className="confirmpassword mb-4 d-flex align-items-center justify-items-center">

                            <img height={"15px"} width={"15px"} src="https://cdn.icon-icons.com/icons2/1456/PNG/96/mbrilock_99595.png" alt="" />
                            <input type="password" name="confirmpassword" ref={confirmpassword} class="ps-3 my-1 w-100 " placeholder="Re-Enter Your Password" />

                        </div>


                        {/* <div className="d-flex align-item-center justify-content-center">

                       <input type="checkbox"></input>
                        <label style={{textAlign:"center",textsize:"1px"}}  for="t&c" >I agree all statements in Terms of service</label>
                       </div> */}


                        <div className="button">
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary m-1">Sign-up</button>
                        </div>

                    </form>


                </div>
                <div className="img mx-5 ps-5 text-center ">
                    <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />


                    <div className="links">
                        <Link className=" " to={"/"} href="">I am already a member</Link>
                    </div>

                </div>




            </div>
        </div>
    );
}

export default SignUp;
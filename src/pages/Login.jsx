import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Notiflix from "notiflix";
import { GoogleIcon, TextInput } from "../components";
import authbg from "../assets/auth_bg.png";

const Login = () => {
     const [loginData, setLoginData] = useState({});

     const handleChange = (e) => {
          const { name, value } = e.target;
          e.target.setCustomValidity("");
          setLoginData(prevValue => ({ ...prevValue, [name]: value }));
     }

     const handleLogin = (e) => {
          e.preventDefault();
          Notiflix.Loading.standard("Logging in...");

          axios.post("https://will-be-there-auth-server.onrender.com/api/login/", {
               username: loginData.username,
               password: loginData.password
          }).then(() => {
               Notiflix.Loading.remove();
               Notiflix.Notify.success("You have successfully logged in!");
               window.location.href = "/home";

          }).catch((error) => {
               Notiflix.Loading.remove();
               console.error("Login failed:", error);
               Notiflix.Notify.failure("Failed to log in. Please check your username & password and try again.");
          });
     }

     return (
          <>
               <div className="h-screen flex flex-row">
                    <div className="h-full w-full md:w-md1 flex justify-center items-center">
                         <div className="h-fit w-full md:w-md2 flex flex-col justify-center gap-5 md:gap-10">
                              <h1 className="font-normal text-md md:text-lg text-white font-Bayon text-center lowercase">Welcome to <span className="text-primary-default">Will Be There</span></h1>
                              <form noValidate onSubmit={handleLogin} className="flex flex-col gap-5 md:gap-10">
                                   <div className="px-5 flex flex-col gap-5 md:gap-10">
                                        <div className="flex flex-col font-Bayon">
                                             <h2 className="text-base md:text-md text-start uppercase text-primary-default">login</h2>
                                             <p className="text-slate uppercase font-Bayon font-normal text-sm md:text-base">doesn’t have an account? <Link to="/auth/signup" className="text-primary-default cursor-pointer">sign up</Link></p>
                                        </div>
                                        <div className="w-full flex flex-col font-Bayon gap-5 md:gap-8">
                                             <TextInput type="text" name="username" placeholder="enter user name" required={true} onInput={handleChange} value={loginData.username || ""} />
                                             <div className="flex flex-col gap-3 md:gap-5">
                                                  <TextInput type="password" name="password" placeholder="enter password" required={true} onInput={handleChange} value={loginData.password || ""} />
                                                  <Link to="/auth/forgot-password" className="text-primary-default uppercase text-sm text-end underline cursor-pointer">forgot your password</Link>
                                             </div>
                                        </div>
                                   </div>
                                   <hr className="border border-white" />
                                   {/* icons */}
                                   <div className="flex flex-col w-full items-center gap-5 md:gap-10 px-5">
                                        <button className="w-full flex items-center justify-center bg-white rounded-10">
                                             <GoogleIcon />
                                        </button>
                                        <button type="submit" className="w-full bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4">Continue</button>
                                   </div>
                              </form>
                         </div>
                    </div>
                    <img src={authbg} alt="sidebar bg" className="w-1/2 h-full hidden md:block" />
               </div>
          </>
     )
}

export default Login;

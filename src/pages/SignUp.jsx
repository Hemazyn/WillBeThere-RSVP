import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Notiflix from "notiflix";
import { GoogleLogin } from "@react-oauth/google";
import { gapi } from 'gapi-script';
import { TextInput, GoogleIcon } from "../components";
import authbg from "../assets/auth_bg.png";

const clientId = import.meta.env.VITE_PUBLIC_GOOGLE_CLIENT_ID;

const SignUp = () => {
     const [signupData, setSignupData] = useState({});

     useEffect(() => {
          function start() {
               gapi.client.init({
                    clientId: clientId,
                    scope: "email profile",
               }).then(() => {
                    console.log("Google API initialized successfully");
               }).catch((error) => {
                    console.error("Error initializing Google API:", error);
               });
          }
          gapi.load('client:auth2', start);
     }, []);

     const handleChange = (e) => {
          const { name, value } = e.target;
          e.target.setCustomValidity("");
          setSignupData((prevValue) => ({ ...prevValue, [name]: value }));
     };

     const handleSignUp = (userData) => {
          Notiflix.Loading.standard("Signing up...");
          axios
               .post("https://will-be-there-auth-server.onrender.com/api/register/", userData)
               .then(() => {
                    Notiflix.Notify.success("You have successfully signed up!");
                    window.location.href = "/auth/login";
               })
               .catch((error) => {
                    if (error.response.status === 400) {
                         const errorMessage = error.response.data;
                         if (errorMessage.username) {
                              Notiflix.Notify.failure("A user with that username already exists.");
                         } else if (errorMessage.email) {
                              Notiflix.Notify.failure("A user with that email already exists.");
                         } else {
                              Notiflix.Notify.failure("Failed to sign up. Please try again later.");
                         }
                    } else {
                         Notiflix.Notify.failure("Failed to sign up. Please try again later.");
                    }
               })
               .finally(() => {
                    Notiflix.Loading.remove();
               });
     };

     const handleGoogleLogin = async () => {
          try {
               const auth2 = window.gapi.auth2.getAuthInstance();
               const googleUser = await auth2.signIn();
               const profile = googleUser.getBasicProfile();
               const username = profile.getName();
               const email = profile.getEmail();
               setSignupData({
                    username,
                    email
               });
               await handleSignUp({
                    username,
                    email,
                    password: ''
               });
          } catch (error) {
               console.error("Google sign-in error:", error);
          }
     };

     return (
          <div className="h-screen flex flex-row">
               <div className="h-full w-full md:w-md1 flex justify-center items-center">
                    <div className="h-fit w-full md:w-md2 flex flex-col justify-center gap-5 md:gap-10">
                         <h1 className="font-normal text-md md:text-lg text-white font-Bayon text-center">Welcome to <span className="text-primary-default">Will Be There</span></h1>
                         <form noValidate onSubmit={(e) => { e.preventDefault(); handleSignUp(signupData); }} className="flex flex-col gap-5 md:gap-10">
                              <div className="px-5 flex flex-col gap-5 md:gap-10">
                                   <div className="flex flex-col font-Bayon">
                                        <h2 className="text-base md:text-md text-start uppercase text-primary-default">sign up</h2>
                                        <p className="text-slate uppercase font-Bayon font-normal text-sm md:text-base">have an account? <Link to="/auth/login" className="text-primary-default cursor-pointer">login</Link></p>
                                   </div>
                                   <div className="w-full flex flex-col font-Bayon gap-5 md:gap-8">
                                        <TextInput type="text" name="username" placeholder="user name" required={true} onInvalid={(e) => e.target.setCustomValidity("enter user name")} onInput={handleChange} value={signupData.username || ""} />
                                        <TextInput type="email" name="email_address" placeholder="enter email" required={true} onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email address.")} onInput={handleChange} value={signupData.email || ""} />
                                        <div className="flex flex-col gap-3 md:gap-5">
                                             <TextInput type="password" name="password" placeholder="enter password" required={true} onInvalid={(e) => e.target.setCustomValidity("Password must be at least 6 characters long.")} onInput={handleChange} value={signupData.password || ""} />
                                        </div>
                                   </div>
                              </div>
                              <hr className="border border-white" />
                              <div className="flex flex-col w-full items-center gap-5 md:gap-10 px-5">
                                   <GoogleLogin clientId={clientId} buttonText="Continue with Google" cookiePolicy={'single_host_origin'}>
                                        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center bg-white rounded-10">
                                             <GoogleIcon />
                                        </button>
                                   </GoogleLogin>
                                   <button type="submit" className="w-full bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4">Continue</button>
                              </div>
                         </form>
                    </div>
               </div>
               <img src={authbg} alt="sidebar bg" className="w-1/2 h-full hidden md:block" />
          </div>
     );
};

export default SignUp;
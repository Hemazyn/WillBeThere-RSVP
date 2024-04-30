/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Notiflix from "notiflix";
import authbg from "../assets/auth_bg.png";
import MailCheck from "./MailCheck";
import TextInput from "./TextInput";
import { FiArrowLeft } from "react-icons/fi";

const ForgotPassword = () => {
     const [email, setEmail] = useState("");
     const [showMailCheck, setShowMailCheck] = useState(false);
     const [isValidEmail, setIsValidEmail] = useState(false);
     const [emailExists, setEmailExists] = useState(false);

     const handleContinue = async (e) => {
          e.preventDefault();
          Notiflix.Notify.sucess("Handle continue function called");
          const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
          setIsValidEmail(isValid);
          if (isValid) {
               try {
                    const emailExists = await checkIfEmailExists(email);
                    setEmailExists(emailExists);
                    if (emailExists) {
                         Notiflix.Notify.sucess("Email exists.");
                    } else {
                         Notiflix.Notify.failure("Email does not exist.");
                    }
                    setShowMailCheck(true);
                    Notiflix.Notify.sucess("Mail check will be shown.");
               } catch (error) {
                    Notiflix.Notify.failure("Error checking email existence:", error);
               }
          } else {
               setShowMailCheck(false);
               Notiflix.Notify.failure("Email is invalid. Mail check will not be shown.");
          }
     };


     const checkIfEmailExists = async (email) => {
          try {
               const response = await axios.get(`https://will-be-there-auth-server.onrender.com/api/check-email?email=${email}`);
               Notiflix.Notify.sucess("Response data:", response.data);
               return response.data.exists;
          } catch (error) {
               Notiflix.Notify.failure("Error checking email existence:", error);
               throw error;
          }
     };

     return (
          <>
               <div className="h-screen flex flex-row">
                    <div className="h-full w-full md:w-md1 flex justify-center items-center">
                         <Link to="/auth/login" className="absolute top-5 left-5">
                              <FiArrowLeft size={20} className="text-white" />
                         </Link>
                         <div className="h-4/5 w-full lg:w-md2 flex flex-col">
                              {isValidEmail && showMailCheck && (
                                   <MailCheck />
                              )}
                              {!isValidEmail && (
                                   <form noValidate className="h-full flex flex-col justify-between px-5" onSubmit={handleContinue}>
                                        <div className="flex flex-col gap-5 md:gap-10">
                                             <h1 className="font-normal text-md md:text-lg text-primary-default font-Bayon text-center uppercase">reset your password </h1>
                                             <div className="flex flex-col font-Bayon">
                                                  <h2 className="text-base md:text-md text-start font-normal text-white uppercase">enter your registered email below</h2>
                                                  <p className="text-slate uppercase font-Bayon font-normal text-sm md:textbase">remember the password? <a href="/auth/login" className="text-primary-default">login</a></p>
                                             </div>
                                             <div className="w-full flex flex-col font-Bayon gap-5 md:gap-37">
                                                  <TextInput type="email" name="email_address" placeholder="enter email" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                                             </div>
                                        </div>
                                        <button type="submit" className={`w-full bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4 mb-10`}>
                                             Continue
                                        </button>
                                   </form>
                              )}
                         </div>
                    </div>
                    <img src={authbg} alt="sidebar bg" className="w-1/2 h-full hidden md:block" />
               </div>
          </>
     )
}

export default ForgotPassword;
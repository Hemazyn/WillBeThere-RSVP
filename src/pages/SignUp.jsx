import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Notiflix from "notiflix";
import authbg from "../assets/auth_bg.png";
import { TextInput } from "../components";

const SignUp = () => {
     const [signupData, setSignupData] = useState({});
     const [showModal, setShowModal] = useState(false);
     const [modalTitle, setModalTitle] = useState("");
     const [modalMessage, setModalMessage] = useState("");

     const handleChange = (e) => {
          const { name, value } = e.target;
          e.target.setCustomValidity("");
          setSignupData(prevValue => ({ ...prevValue, [name]: value }));
     }

     const handleSignUp = (e) => {
          e.preventDefault();
          console.log("User input:", signupData);

          Notiflix.Loading.standard("Signing up...");

          axios
               .post("https://will-be-there-auth-server.onrender.com/api/register/", {
                    username: signupData.username,
                    email: signupData.email_address,
                    password: signupData.password
               })
               .then((response) => {
                    const data = response.data;
                    console.log("Sign-up successful:", data);
                    setModalTitle("Sign-up Successful");
                    setModalMessage("You have successfully signed up!");
                    setShowModal(true);
                    window.location.href = "/auth/login";
               })
               .catch((error) => {
                    console.error("Sign-up failed:", error);
                    console.error("Error details:", error.response);
                    if (error.response.status === 400) {
                         const errorMessage = error.response.data;
                         if (errorMessage.username) {
                              setModalTitle("Sign-up Failed");
                              setModalMessage("A user with that username already exists.");
                         } else if (errorMessage.email) {
                              setModalTitle("Sign-up Failed");
                              setModalMessage("A user with that email already exists.");
                         } else {
                              setModalTitle("Sign-up Failed");
                              setModalMessage("Failed to sign up. Please try again later.");
                         }
                    } else {
                         setModalTitle("Sign-up Failed");
                         setModalMessage("Failed to sign up. Please try again later.");
                    }
                    setShowModal(true);
               })
               .finally(() => {
                    Notiflix.Loading.remove();
               });
     };

     const closeModal = () => {
          setShowModal(false);
     }

     return (
          <>
               <div className="h-screen flex flex-row">
                    <div className="h-full w-full md:w-md1 flex justify-center items-center">
                         <div className="h-fit w-full md:w-md2 flex flex-col justify-center gap-5 md:gap-10">
                              <h1 className="font-normal text-md md:text-lg text-white font-Bayon text-center">Welcome to <span className="text-primary-default">Will Be There</span></h1>
                              <form noValidate onSubmit={handleSignUp} className="flex flex-col gap-5 md:gap-10">
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
                                   {/* icons */}
                                   <div className="flex flex-col w-full items-center gap-5 md:gap-10 px-5">
                                        <div className="flex flex-row font-Bayon gap-[60px]">
                                             <Link to="" className="cursor-pointer">
                                                  <svg className="w-10 h-10 md:w-15 md:h-15" viewBox="0 0 60 60" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                       <g>
                                                            <rect width="60" height="60" rx="10" />
                                                            <path d="M41.7666 27.6498H40.8V27.6H30V32.4H36.7818C35.7924 35.1942 33.1338 37.2 30 37.2C26.0238 37.2 22.8 33.9762 22.8 30C22.8 26.0238 26.0238 22.8 30 22.8C31.8354 22.8 33.5052 23.4924 34.7766 24.6234L38.1708 21.2292C36.0276 19.2318 33.1608 18 30 18C23.373 18 18 23.373 18 30C18 36.627 23.373 42 30 42C36.627 42 42 36.627 42 30C42 29.1954 41.9172 28.41 41.7666 27.6498Z" fill="#FFC107" />
                                                            <path d="M19.3835 24.4146L23.3261 27.306C24.3929 24.6648 26.9765 22.8 29.9999 22.8C31.8353 22.8 33.5051 23.4924 34.7765 24.6234L38.1707 21.2292C36.0275 19.2318 33.1607 18 29.9999 18C25.3907 18 21.3935 20.6022 19.3835 24.4146Z" fill="#FF3D00" />
                                                            <path d="M30 41.9999C33.0996 41.9999 35.916 40.8136 38.0454 38.8846L34.3314 35.7419C33.1266 36.6544 31.629 37.1999 30 37.1999C26.8788 37.1999 24.2286 35.2097 23.2302 32.4323L19.317 35.4472C21.303 39.3334 25.3362 41.9999 30 41.9999Z" fill="#4CAF50" />
                                                            <path d="M41.7666 27.6499H40.8V27.6001H30V32.4001H36.7818C36.3066 33.7423 35.4432 34.8997 34.3296 35.7427C34.3302 35.7421 34.3308 35.7421 34.3314 35.7415L38.0454 38.8843C37.7826 39.1231 42 36.0001 42 30.0001C42 29.1955 41.9172 28.4101 41.7666 27.6499Z" fill="#1976D2" />
                                                       </g>
                                                       <defs>
                                                            <clipPath id="clip0_42_1105">
                                                                 <rect width="60" height="60" fill="white" />
                                                            </clipPath>
                                                       </defs>
                                                  </svg>
                                             </Link>
                                             <Link to="" className="cursor-pointer">
                                                  <svg className="w-10 h-10 md:w-15 md:h-15" viewBox="0 0 60 60" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                       <rect width="60" height="60" rx="10" />
                                                       <path d="M18 30.067C18 36.0335 22.3333 40.9944 28 42V33.3333H25V30H28V27.3333C28 24.3333 29.9333 22.6667 32.6667 22.6667C33.5333 22.6667 34.4667 22.8 35.3333 22.9333V26H33.8C32.3333 26 32 26.7333 32 27.6667V30H35.2L34.6667 33.3333H32V42C37.6667 40.9944 42 36.0335 42 30.067C42 23.4302 36.6 18 30 18C23.4 18 18 23.4302 18 30.067Z" fill="#1877F2" />
                                                  </svg>
                                             </Link>
                                        </div>
                                        <button type="submit" className="w-full bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4">Continue</button>
                                   </div>
                              </form>
                         </div>
                    </div>
                    <img src={authbg} alt="sidebar bg" className="w-1/2 h-full hidden md:block" />
               </div>

               {/* Modal */}
               {showModal && (
                    <div className="fixed z-50 inset-0 overflow-y-auto flex items-start justify-center mt-3 bg-opacity-50">
                         <div className="relative bg-gradient-background rounded-lg p-8 w-96">
                              <div className="flex flex-col justify-between items-start text-white mb-4">
                                   <h3 className="text-lg font-semibold">{modalTitle}</h3>
                                   <span className="text-sm">{modalMessage}</span>
                              </div>
                              <button className="absolute top-5 right-5 text-white hover:text-gray-800 focus:outline-none" onClick={closeModal}>
                                   <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                   </svg>
                              </button>
                         </div>
                    </div>
               )}
          </>
     )
}

export default SignUp;

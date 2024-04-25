import { Link } from "react-router-dom";
import authbg from "../assets/auth_bg.png";
import TextInput from "../components/TextInput";

const SignUp = () => {
     return (
          <>
               <div className="h-screen flex flex-row">
                    <div className="h-full w-full md:w-md1 flex justify-center items-center">
                         <div className="h-fit w-full md:w-md2 flex flex-col justify-center gap-5 md:gap-10">
                              <h1 className="font-normal text-md md:text-lg text-white font-Bayon text-center">Welcome to <span className="text-primary-default">Will Be There</span></h1>
                              <form noValidate className="flex flex-col gap-5 md:gap-10">
                                   <div className="px-5 flex flex-col gap-5 md:gap-10">
                                        <div className="flex flex-col font-Bayon">
                                             <h2 className="text-base md:text-md text-start uppercase text-primary-default">sign up</h2>
                                             <p className="text-slate uppercase font-Bayon font-normal text-sm md:text-base">have an account? <Link to="/login" className="text-primary-default">login</Link></p>
                                        </div>
                                        {/* inputs */}
                                        <div className="w-full flex flex-col font-Bayon gap-5 md:gap-37">
                                             <TextInput type="text" name="first_name" placeholder="enter user name" required={true}
                                                  onInvalid={(e) => e.target.setCustomValidity("Please input first name here")}
                                                  onInput={(e) => e.target.setCustomValidity("")} />
                                             <TextInput type="email" name="email_address" placeholder="enter email" required={true} />
                                             <TextInput type="password" name="password" placeholder="enter at least 6 symbols" required={true} />
                                        </div>
                                   </div>
                                   <hr className="border border-white" />
                                   {/* icons */}
                                   <div className="flex flex-col w-full items-center gap-5 md:gap-10 px-5">
                                        <div className="flex flex-row font-Bayon gap-60">
                                             <Link to="">
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
                                             <Link to="">
                                                  <svg className="w-10 h-10 md:w-15 md:h-15" viewBox="0 0 60 60" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                       <rect width="60" height="60" rx="10" />
                                                       <path d="M18 30.067C18 36.0335 22.3333 40.9944 28 42V33.3333H25V30H28V27.3333C28 24.3333 29.9333 22.6667 32.6667 22.6667C33.5333 22.6667 34.4667 22.8 35.3333 22.9333V26H33.8C32.3333 26 32 26.7333 32 27.6667V30H35.2L34.6667 33.3333H32V42C37.6667 40.9944 42 36.0335 42 30.067C42 23.4302 36.6 18 30 18C23.4 18 18 23.4302 18 30.067Z" fill="#1877F2" />
                                                  </svg>
                                             </Link>
                                        </div>
                                        <button type="submit" className="w-full  bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4">Continue</button>
                                   </div>
                              </form>
                         </div>

                    </div>
                    <img src={authbg} alt="sidebar bg" className="w-1/2 h-full hidden md:block" />
               </div >
          </>
     )
}

export default SignUp
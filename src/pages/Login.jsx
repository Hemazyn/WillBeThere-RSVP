import { Link } from "react-router-dom";

const SignUp = () => {
     return (
          <>
               <div className="h-screen flex flex-col justify-center items-center">
                    <div className="h-4/5 w-[284px] flex flex-col items-center text-2xl">
                         <h1 className="font-normal text-2xl text-primary-default">Login</h1>
                         <form noValidate className="w-full h-full flex flex-col items-center justify-evenly font-Bayon">

                              <div className="w-full flex flex-col gap-8">
                                   <input type="email" name="email_address" autoComplete="none" placeholder="email"
                                        className="flex bg-transparent rounded-[10px] border border-white outline-none text-base placeholder:text-base p-[10px]"
                                        required />

                                   <input type="password" name="password" placeholder="password"
                                        className="flex bg-transparent rounded-[10px] border border-white outline-none text-base placeholder:text-base p-[10px]"
                                        required />
                                   <Link to="/forgot-password"><p className="text-white text-base text-center underline">forgot your password?</p></Link>
                              </div>

                              <div className="flex flex-col w-full gap-6">
                                   <div className="flex flex-col font-Bayon gap-5">
                                        <Link to="" className="flex flex-row items-center gap-3 w[122px] bg-primary-light rounded-lg">
                                             <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                             <span className="text-base">sign up with google</span>
                                        </Link>
                                        <Link to="" className="flex flex-row items-center gap-3 w[122px] bg-primary-light rounded-lg">
                                             <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect width="60" height="60" rx="10" />
                                                  <path d="M18 30.067C18 36.0335 22.3333 40.9944 28 42V33.3333H25V30H28V27.3333C28 24.3333 29.9333 22.6667 32.6667 22.6667C33.5333 22.6667 34.4667 22.8 35.3333 22.9333V26H33.8C32.3333 26 32 26.7333 32 27.6667V30H35.2L34.6667 33.3333H32V42C37.6667 40.9944 42 36.0335 42 30.067C42 23.4302 36.6 18 30 18C23.4 18 18 23.4302 18 30.067Z" fill="#1877F2" />
                                             </svg>
                                             <span className="text-base">Sign up with Facebook</span>
                                        </Link>
                                   </div>
                                   <p className="text-white text-base font-normal text-center mt-3">don’t have an account?<Link to="/signup" className="text-primary-default"> sign up</Link></p>
                              </div>
                         </form>
                    </div >
               </div >
          </>
     )
}

export default SignUp
import { Link } from "react-router-dom";

const Success = () => {
     return (
          <>
               <div className="h-screen flex flex-row">
                    <div className="h-full w-full lg:w-[450px] flex flex-col justifyevenly">
                         <form noValidate className="h-full flex flex-col px-5 justify-between items-center">
                              <div className="flex flex-col items-center">
                                   <h1 className="font-normal text-md md:text-lg text-primary-default font-Bayon uppercase">reset your password </h1>
                                   <h2 className="text-base md:text-md font-normal text-white uppercase font-Bayon mt-2">password updated</h2>
                              </div>
                              <div className="flex flex-col gap-5 md:gap-10 items-center">
                                   <div className="grid place-items-center bg-primary-dark w-25 h-25 rounded-full">
                                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M0.506348 10.2608L3.12487 7.64227L7.92116 12.4367L20.123 0.234863L22.7415 2.85338L7.91931 17.6737L0.506348 10.2608Z" fill="white" />
                                        </svg>
                                   </div>
                                   <span className="font-Bayon font-normal text-base uppercase text-primary-default">congratulations! your password has been updated</span>
                              </div>
                              <Link to="/login" className="w-full">
                                   <button type="submit" className="w-full  bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4">Continue</button>
                              </Link>
                         </form>
                    </div>
               </div>
          </>
     )
}

export default Success;
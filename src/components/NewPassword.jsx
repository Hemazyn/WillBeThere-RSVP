import { useState } from "react";
import Success from "./Success";

const NewPassword = () => {
     const [showSuccess, setShowSuccess] = useState(true);

     const handleContinue = () => {
          setShowSuccess(false);
     };
     return (
          <>
               <div className="h-screen flex flex-row">
                    <div className="h-4/5 w-full lg:w-[450px] flex flex-col justifyevenly">
                         {showSuccess ? (
                              <form noValidate className="h-full flex flex-col px-5 justify-between items-start">
                                   <div className="w-full flex flex-col">
                                        <h1 className="font-normal text-md md:text-lg text-primary-default font-Bayon text-center uppercase">reset your password </h1>
                                        <div className="w-full flex flex-col gap-5 md:gap-10">
                                             <h2 className="text-base md:text-md text-start font-normal text-white uppercase font-Bayon mt-2">enter your new password</h2>
                                             <input type="password" name="password" placeholder="enter at lease 6 symbols"
                                                  className="w-full flex text-primary-default text-sm md:text-base  uppercase rounded-[10px] border border-white outline-none  placeholder:text- p-[10px] placeholder:text-primary-default"
                                                  required />
                                             <input type="password" name="password" placeholder="confirm your password"
                                                  className="w-full flex text-primary-default text-sm md:text-base  uppercase rounded-[10px] border border-white outline-none  placeholder:text- p-[10px] placeholder:text-primary-default"
                                                  required />
                                        </div>
                                   </div>
                                   <button type="submit" onClick={handleContinue} className="w-full  bg-primary-light uppercase font-Bayon font-normal text-[16px] leading-[28.91px] rounded-[10px] py-2 md:py-4">Continue</button>
                              </form>
                         ) : (
                              <Success />
                         )}
                    </div>
               </div>


          </>
     )
}

export default NewPassword;
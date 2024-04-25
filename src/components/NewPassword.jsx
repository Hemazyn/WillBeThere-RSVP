import { useState } from "react";
import Success from "./Success";
import TextInput from "./TextInput";

const NewPassword = () => {
     const [showSuccess, setShowSuccess] = useState(true);

     const handleContinue = () => {
          setShowSuccess(false);
     };
     return (
          <>
               <div className="h-screen flex flex-row">
                    <div className="h-4/5 w-full lg:w-md2 flex flex-col justifyevenly">
                         {showSuccess ? (
                              <form noValidate className="h-full flex flex-col px-5 justify-between items-start">
                                   <div className="w-full flex flex-col">
                                        <h1 className="font-normal text-md md:text-lg text-primary-default font-Bayon text-center uppercase">reset your password </h1>
                                        <div className="w-full flex flex-col gap-5 md:gap-10">
                                             <h2 className="text-base md:text-md text-start font-normal text-white uppercase font-Bayon mt-2">enter your new password</h2>
                                             <TextInput type="password" name="password" placeholder="enter at least 6 symbols" required={true} />
                                             <TextInput type="password" name="password" placeholder="confirm your password" required={true} />
                                        </div>
                                   </div>
                                   <button type="submit" onClick={handleContinue} className="w-full  bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4 mb-10">Continue</button>
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
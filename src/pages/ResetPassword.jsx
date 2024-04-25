import { useState } from 'react';
import ResetPasswordSuccess from './ResetPasswordSuccess';

const ResetPassword = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContinue = () => {
    setShowSuccess(true);
  };

  return (
    <div className="h-fit w-full md:w-md2 flex flex-col justify-center gap-5 md:gap-10">
      {showSuccess ? (
        <ResetPasswordSuccess />
      ) : (
        <form
          noValidate
          className="h-full flex flex-col px-5 justify-between items-start"
        >
          <div className="w-full flex flex-col">
            <h1 className="font-normal text-md md:text-lg text-primary-default font-Bayon text-center uppercase">
              reset your password{' '}
            </h1>
            <div className="w-full flex flex-col gap-5 md:gap-10">
              <h2 className="text-base md:text-md text-start font-normal text-white uppercase font-Bayon mt-2">
                enter your new password
              </h2>

              <form className="flex flex-col gap-3">
                <input
                  type="password"
                  name="password"
                  placeholder="enter at lease 6 symbols"
                  className="w-full flex text-primary-default text-sm md:text-base  uppercase rounded-[10px] border border-white outline-none  placeholder:text- p-[10px] placeholder:text-primary-default"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="confirm your password"
                  className="w-full flex text-primary-default text-sm md:text-base  uppercase rounded-[10px] border border-white outline-none  placeholder:text- p-[10px] placeholder:text-primary-default"
                  required
                />
                <button
                  type="submit"
                  onClick={handleContinue}
                  className="w-full mt-10 bg-primary-light uppercase font-Bayon font-normal text-[16px] leading-[28.91px] rounded-[10px] py-2 md:py-4"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;

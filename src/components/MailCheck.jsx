import { useState } from 'react';
import ResetPassword from '../pages/ResetPassword';

const MailCheck = () => {
  const [showNewPassword, setShowNewPassword] = useState(true);

  const handleContinue = () => {
    setShowNewPassword(false);
  };
  return (
    <>
      <div className="h-screen flex flex-row">
        <div className="h-full w-full lg:w-[450px] flex flex-col justify-evenly">
          {showNewPassword ? (
            <form
              noValidate
              className="h-full flex flex-col px-5 justify-between items-center"
            >
              <div className="flex flex-col">
                <h1 className="font-normal text-md md:text-lg text-primary-default font-Bayon text-center uppercase">
                  reset your password{' '}
                </h1>
                <h2 className="text-base md:text-md text-start font-normal text-white uppercase font-Bayon mt-2">
                  check your email to create a new password
                </h2>
              </div>
              <div className="flex flex-col gap-5 md:gap-10 items-center">
                <div className="grid place-items-center bg-primary-dark w-[100px] h-[100px] rounded-full">
                  <svg
                    width="46"
                    height="37"
                    viewBox="0 0 46 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.4138 26.6589L35.4521 36.6206L28.4789 29.6474L31.4674 26.6589L35.4521 30.6436L42.4253 23.6704L45.4138 26.6589ZM24.4942 28.6513H4.57086V8.72789L20.5096 18.6896L36.4482 8.72789V18.6896H40.4329V4.74322C40.4329 2.55165 38.6398 0.758545 36.4482 0.758545H4.57086C2.37929 0.758545 0.586182 2.55165 0.586182 4.74322V28.6513C0.586182 30.8428 2.37929 32.6359 4.57086 32.6359H24.4942V28.6513ZM36.4482 4.74322L20.5096 14.7049L4.57086 4.74322H36.4482Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="font-Bayon font-normal text-base uppercase text-primary-default">
                  {' '}
                  email not received
                </span>
              </div>
              <button
                type="submit"
                onClick={handleContinue}
                className="w-full  bg-primary-light uppercase font-Bayon font-normal text-[16px] leading-[28.91px] rounded-[10px] py-2 md:py-4"
              >
                Continue
              </button>
            </form>
          ) : (
            <ResetPassword />
          )}
        </div>
      </div>
    </>
  );
};

export default MailCheck;

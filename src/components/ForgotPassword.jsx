import { useState } from 'react';
import { Link } from 'react-router-dom';
import authbg from '../assets/auth_bg.png';
import MailCheck from './MailCheck';
import TextInput from './TextInput';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showMailCheck, setShowMailCheck] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (isValidEmail) {
      setShowMailCheck(true);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-row">
        <div className="h-full w-full md:w-md1 flex justify-center items-center">
          <Link to="/login" className="absolute top-5 left-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className="h-4/5 w-full lg:w-md2 flex flex-col">
            {showMailCheck ? (
              <MailCheck />
            ) : (
              <form
                noValidate
                className="h-full flex flex-col justify-between px-5"
                onSubmit={handleContinue}
              >
                <div className="flex flex-col gap-5 md:gap-10">
                  <h1 className="font-normal text-md md:text-lg text-primary-default font-Bayon text-center uppercase">
                    reset your password{' '}
                  </h1>
                  <div className="flex flex-col font-Bayon">
                    <h2 className="text-base md:text-md text-start font-normal text-white uppercase">
                      enter your registered email below
                    </h2>
                    <p className="text-slate uppercase font-Bayon font-normal text-sm md:textbase">
                      remember the password?{' '}
                      <Link to="/login" className="text-primary-default">
                        login
                      </Link>
                    </p>
                  </div>
                  <div className="w-full flex flex-col font-Bayon gap-5 md:gap-37">
                    <TextInput
                      type="email"
                      name="email_address"
                      placeholder="enter email"
                      required={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-primary-light uppercase font-Bayon font-normal text-base rounded-10 py-2 md:py-4 mb-10`}
                >
                  Continue
                </button>
              </form>
            )}
          </div>
        </div>
        <img
          src={authbg}
          alt="sidebar bg"
          className="w-1/2 h-full hidden md:block"
        />
      </div>
    </>
  );
};

export default ForgotPassword;

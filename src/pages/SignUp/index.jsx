import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Loading, Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '../../components';
import { useSignup } from '../../services/auth';
import { signupValidationSchema } from './signup.validation';

const SignUp = () => {
  const { create: signup, isPending, isError, isSuccess, error } = useSignup();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  });
  const [formError, setFormError] = useState();

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setFormError({ ...formError, [e.target.id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValidation = signupValidationSchema.safeParse(form);
    if (!formValidation.success) {
      setFormError(formValidation.error.flatten().fieldErrors);
      return;
    }

    signup(form);
  };

  const handleGoogleOneTapSignup = async (codeResponse) => {
    const userDetails = jwtDecode(codeResponse.credential);

    signup({
      username: userDetails.name.replace(' ', ''),
      password: userDetails.sub,
      first_name: userDetails.given_name,
      last_name: userDetails.family_name,
      email: userDetails.email,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Signup successful');
      navigate('/auth/login');
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      if (error?.response?.data?.non_field_errors) {
        Notify.failure(error.response.data.non_field_errors[0]);
      } else Notify.failure(error.message || 'Something went wrong');
    }
  }, [isError, error]);

  useEffect(() => {
    if (isPending) Loading.hourglass();
    else Loading.remove();
  }, [isPending]);

  return (
    <div className="h-fit w-full md:w-md2 flex flex-col justify-center gap-5 md:gap-10">
      <h1 className="font-normal text-md md:text-lg text-white font-Bayon text-center">
        Welcome to <span className="text-primary-default">Will Be There</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-5 md:gap-10"
      >
        <div className="px-5 flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col font-Bayon">
            <h2 className="text-base md:text-md text-start uppercase text-primary-default">
              sign up
            </h2>
            <p className="text-slate uppercase font-Bayon font-normal text-sm md:text-base">
              have an account?{' '}
              <Link to="/auth/login" className="text-primary-default">
                login
              </Link>
            </p>
          </div>
          <div className="w-full flex flex-col font-Bayon gap-5">
            <TextField
              label="First name"
              id="first_name"
              type="text"
              placeholder="enter first name"
              value={form.first_name}
              onChange={onChange}
              error={formError?.first_name?.[0]}
              required
            />
            <TextField
              label="Last name"
              id="last_name"
              type="text"
              placeholder="enter last name"
              value={form.last_name}
              onChange={onChange}
              error={formError?.last_name?.[0]}
              required
            />
            <TextField
              label="Username"
              id="username"
              type="text"
              placeholder="enter user name"
              value={form.username}
              onChange={onChange}
              error={formError?.username?.[0]}
              required
            />
            <TextField
              label="Email"
              id="email"
              type="email"
              placeholder="enter email address"
              value={form.email}
              onChange={onChange}
              error={formError?.email?.[0]}
              required
            />
            <TextField
              label="Password"
              type="password"
              id="password"
              placeholder="enter password"
              value={form.password}
              onChange={onChange}
              error={formError?.password?.[0]}
              required
            />
          </div>
        </div>
        <hr className="border border-white" />
        {/* icons */}
        <div className="flex flex-col w-full items-center gap-5 md:gap-10 px-5">
          <div className="flex flex-row font-Bayon gap-[60px]">
            <GoogleLogin onSuccess={handleGoogleOneTapSignup} useOneTap />
            <button type="button" onClick={() => Notify.info('Coming Soon')}>
              <svg
                className="w-10 h-10 md:w-15 md:h-15"
                viewBox="0 0 60 60"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" rx="10" />
                <path
                  d="M18 30.067C18 36.0335 22.3333 40.9944 28 42V33.3333H25V30H28V27.3333C28 24.3333 29.9333 22.6667 32.6667 22.6667C33.5333 22.6667 34.4667 22.8 35.3333 22.9333V26H33.8C32.3333 26 32 26.7333 32 27.6667V30H35.2L34.6667 33.3333H32V42C37.6667 40.9944 42 36.0335 42 30.067C42 23.4302 36.6 18 30 18C23.4 18 18 23.4302 18 30.067Z"
                  fill="#1877F2"
                />
              </svg>
            </button>
          </div>
          <Button
            type="submit"
            className="w-full bg-primary-light uppercase rounded-10 py-2 md:py-4"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

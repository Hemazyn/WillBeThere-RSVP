import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center font-Bayon">
        <div className="h-4/5 md:h-3/5 flex flex-col justify-between">
          <h1 className="text-white font-normal text-2xl">Welcome to <span className="text-primary-default"> will be there</span></h1>
          <div className="flex flex-col items-center gap-10">
            <Link to="/signup"><button type="button" className="h-[49px] w-[105px] bg-white rounded-[10px]">Sign Up</button></Link>
            <p className="text-white">Already Have an account?<Link to="/login" className="text-primary-default"> login</Link></p>
          </div>
        </div>
      </div >
    </>
  );
};

export default Home;

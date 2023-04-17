import React from "react";
import CourseNav from "../components/courses/CourseNav/CourseNav";
import FormLabel from "../ui/Form/FormLabel";
import Ellipse from "../components/illustration/Ellipse";
import SignupRocket from "../components/illustration/SignupRocket";
import Footer from "../components/landingpage/Footer";

const Signup = () => {
  return (
    <div>
      <CourseNav />

      <div className="flex justify-center h-[150vh] items-center relative">
        <div className="absolute top-[20px] -z-[100]">
          <Ellipse w="1000" h="900" fill="#CBF6D9"/>
        </div>
        <div className=" border w-2/3 h-[700px] flex">
          <div className="w-1/2 py-10 px-5 bg-[#EDF5FD]">
            <div className="text-4xl font-semibold mb-4">Welcome back!</div>
            <div>
              Let’s continue the journey to a world-class developer journey
            </div>
            <div className="mt-10">
              <SignupRocket w="350" />
            </div>
          </div>
          <div className="w-1/2 bg-white py-10 px-5">
            <div className="">
              <div className="text-3xl font-semibold mb-5">
                Create an Account
              </div>
            </div>
            <div className="text-sm mb-5">
              Don’t have an account yet?{" "}
              <span className="font-semibold underline">Log in</span>
            </div>
            <div>
              <form>
                <FormLabel label="Email" type="text" placeholder="Email" />
                <FormLabel
                  label="Your Password"
                  type="text"
                  placeholder="password"
                />
              </form>
              <button className="bg-[#0D3B66] text-white text-xs w-full rounded-md py-3">
                Login
              </button>
            </div>
            <div className="text-xs mt-5">
              Forgot your password?
              <span className="text-[#20BF55]">Reset your password here</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

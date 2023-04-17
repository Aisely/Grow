import React from "react";
import CourseNav from "../components/courses/CourseNav/CourseNav";
import LoginIllustration from "../components/illustration/LoginIllustration";
import FormLabel from "../ui/Form/FormLabel";
import Ellipse from "../components/illustration/Ellipse";
import Footer from "../components/landingpage/Footer";

const Login = () => {
  return (
    <div>
      <CourseNav />

      <div className="flex justify-center h-[150vh] items-center relative">
        <div className="absolute top-[20px] -z-[100]">
          <Ellipse w="1000" h="900" fill="#FFEBEB"/>
        </div>
        <div className=" border w-2/3 h-[700px] flex">
          <div className="w-1/2 py-10 px-5 bg-[#EDF5FD]">
            <div className="text-4xl font-semibold mb-4">Welcome</div>
            <div>
              Take your first step to becoming a world-class developer with us,
              now
            </div>
            <div className="mt-10">
              <LoginIllustration w="350" />
            </div>
          </div>
          <div className="w-1/2 bg-white py-10 px-5">
            <div className="">
              <div className="text-3xl font-semibold mb-5">
                Create an Account
              </div>
            </div>
            <div className="text-sm mb-5">
              Already have an account?{" "}
              <span className="font-semibold underline">Log in</span>
            </div>
            <div>
              <form>
                <FormLabel
                  label="First name"
                  type="text"
                  placeholder="first name"
                />
                <FormLabel label="Email" type="text" placeholder="Email" />
                <FormLabel
                  label="Phone Number"
                  type="text"
                  placeholder="Phone number"
                />
                <FormLabel
                  label="What are you interested in?"
                  type="text"
                  placeholder=""
                />
                <FormLabel
                  label="Choose a strong password"
                  type="text"
                  placeholder=""
                />
              </form>
              <button className="bg-[#0D3B66] text-white text-xs w-full rounded-md py-3">
                Create account
              </button>
            </div>
            <div className="text-xs mt-5">
              We take your privacy seriously and will never share your personal
              information with third parties without your explicit consent. Your
              information is safe with us.
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Login;

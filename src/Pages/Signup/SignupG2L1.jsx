import React, { useState } from "react";
import LanguageSelectorG1l4 from "../../components/common/Language/LanguageSelectorG1l4";
import LogoHeader from "../../components/common/Logo/LogoHeaderG1";
import WelcomeMessageG1L3 from "../../components/common/Logo/WelcomeMessageG1L3";
import ButtonG1L2 from "../../components/common/Button/ButtonG1L2";
import googleLogo from "../../assets/photo/google_img.png";
import Email_Signup from "../../components/layout/Email_Signup/Email_Signup";
import Forms from "../Form/Forms";
import Right_img from "../../components/layout/Rightside/Right_side";
import "./SignupG2L1.css";


const SignupG2L1 = () => {
  const [showGoogleSignup, setShowGoogleSignup] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // const toggleGoogleSignup = () => {
  //   setShowGoogleSignup(!showGoogleSignup);
  // };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex w-full h-screen ">
      <div className="w-1/2 h-full p-8 bg-gray-100 left_side">
        <LanguageSelectorG1l4 />
        <LogoHeader />
        <WelcomeMessageG1L3 />
        {showGoogleSignup && (
          <ButtonG1L2
            className="button_google text-decoration-none mar"
            logo={googleLogo}
            backgroundColor="white"
            textColor="black"
            border="1px solid black"
            disabled
            cursor="pointer"
            text="Sigup with google"
          ></ButtonG1L2>
        )}

        <Email_Signup />
        <Forms />
      </div>
      <div className="object-cover w-1/2 h-full">
        {" "}
        <Right_img />
      </div>
    </div>
  );
};

export default SignupG2L1;

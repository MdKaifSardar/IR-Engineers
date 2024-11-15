import React from "react";
import {
  contactUs1,
  contactUs2,
  gmailLogo,
  logoBlue,
  phoneLogo,
} from "../../data/Images/images";
import {
  address,
  companyName,
  ContactSideText,
  email,
  gstNo,
  phoneNo,
  socialMedia,
} from "../../data/Text/ContactUsText";
import { Link } from "react-router-dom";

const ContactUsComponent: React.FC = () => {
  return (
    <div className="px-5 sm:px-0 py-5 relative h-full lg:h-screen flex flex-row items-center justify-center overflow-hidden w-full">
      <div className="lg:pl-10 gap-4 px-0 flex flex-col lg:justify-start justify-center lg:items-start items-center lg:text-left text-center lg:w-[60%] w-[100%]">
        <div className="w-fit h-fit">
          <img
            src={logoBlue}
            alt="logo blue"
            className="ml-auto mr-auto w-[10vh] md:w-[20vh]"
          />
          <div className="text-2xl md:text-5xl font-bold text-[#003F63] font-sans">
            {companyName}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span>GST No: {gstNo}</span>
          <span>{address}</span>
          <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center">
            <div className="flex flex-wrap justify-start items-center gap-3">
              <span>Follow Us on:</span>

              <div className="flex flex-wrap gap-1 justify-center items-center">
                {socialMedia.map((social, index) => (
                  <Link key={index} to={social.url}>
                    <img className="" src={social.image} alt={social.name} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 md:gap-4 justify-center items-center">
              <div className="flex flex-row justify-center items-center gap-2">
                <img src={phoneLogo} className="w-6 h-auto" alt="phone" />
                <span className="text-wrap">{phoneNo}</span>
              </div>

              <div className="flex flex-row justify-center items-center gap-2">
                <img src={gmailLogo} className="w-6 h-auto" alt="gmail" />
                <span className="text-wrap">{email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* side image area */}

      <div className="lg:flex hidden h-screen w-[40%] flex-col items-center mt-[30%]">
        <img
          src={contactUs2}
          alt="side image"
          className="z-[-1] h-full w-auto absolute bottom-0 right-0 object-fill"
        />
        <img
          src={contactUs1}
          alt="side image"
          className="z-[-2] h-[80%] w-auto absolute bottom-0 right-40"
        />
        <div className="pr-[20%] text-xl font-sans text-white z-[1] gap-4 w-full flex-col justify-center items-end ">
          <div className="flex flex-col justify-center items-end gap-3">
            <div className="text-white sm:text-4xl text-xl font-bold">
              {ContactSideText.title}
            </div>
            <div className="text-right">{ContactSideText.mainText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;

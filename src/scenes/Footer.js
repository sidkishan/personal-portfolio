import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="flex flex-col justify-end text-center">
          {/* <div className="md:flex justify-center md:justify-between text-center"> */}
          {/* <p className="font-playfair font-semibold text-2xl text-white">
              Siddharth Kishan
            </p> */}
          <p className="font-playfair text-sm text-white">
            ©2024 Siddharth. All Rights Reserved.
          </p>
          {/* </div> */}
          <p className="font-playfair text-sm text-white">
            About this website: built with 💙 using React, Tailwind CSS, Framer
            Motion, React Hook Form, Netlify hosting.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

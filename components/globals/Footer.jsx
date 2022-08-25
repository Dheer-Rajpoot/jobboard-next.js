import { FaYoutube, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import GPTWLogo from "../../public/images/GPTW-Corporate-logo.png";
import Image from "next/image";

const navigation = {
  social: [
    {
      name: "Youtube",
      href: "https://www.youtube.com/user/GPTWIndia/featured?app=desktop",
      icon: (props) => <FaYoutube />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/gptw_india?lang=en",
      icon: (props) => <FaTwitter />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/GREATPLACETOWORKINSTITUTEINDIA/",
      icon: (props) => <FaFacebook />,
    },

    {
      name: "LinkedIn",
      href: "https://in.linkedin.com/school/great-place-to-work-institute-india/",
      icon: (props) => <FaLinkedin />,
    },
  ],
};

const footerData = {
  message: "We are available between 10 AM to 6 PM, Monday to Friday.",

  followMessage: "Follow us on Social Media",
  callToActionURL: "https://www.greatplacetowork.in/contact-us/",
  callToActionMessage: "Click here to contact us.",
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-400">
          {footerData.followMessage}
        </p>
        <div className="mt-2 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center  text-lg text-gray-600">
          {footerData.message} <br />
          <a
            href={footerData.callToActionURL}
            className="text-liftedgreen-700 hover:text-liftedgreen-800"
          >
            {footerData.callToActionMessage} <br />
            <Image
              src={GPTWLogo}
              height={60}
              width={60}
              alt={"Great Place to Work"}
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

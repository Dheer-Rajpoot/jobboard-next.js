import { BriefcaseIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import GPTWBanner from "../../public/images/programming-banner.webp";
import GPTWAvatar from "../../public/images/GPTW-Avatar.png";

const company = {
  name: "Great Place to Work®",
  careerMessage: "Work With Great Place To Work®",
  companyURL: "https://www.greatplacetowork.in/about-us/career/",
  companyWebsite: "GPTW",
  message: "The Global Authority on Workplace Culture!",
  callToActionURL: "https://www.greatplacetowork.in/contact-us/",
  callToActionMessage: "Contact Us",
  profileImage: GPTWAvatar,
  coverImage: GPTWBanner,
};

export default function Header() {
  return (
    <div>
      <div className="mb-8">
        <div className="relative h-60 w-full lg:h-64">
          <Image
            className="object-cover scale-105"
            src={company.coverImage}
            layout="fill"
            alt={`The Global Authority on Workplace Culture. ${company.companyWebsite}`}
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <div className="relative h-28 w-28 rounded-full ring-4 ring-slate-200 sm:h-28 sm:w-28">
                <Image
                  src={company.profileImage}
                  layout="fill"
                  alt={`profile picture ${company.name}`}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-12 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {company.name}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  {company.careerMessage} at{" "}
                  <a
                    href={company.companyURL}
                    className="text-gray-900 hover:text-paletterpurple-700"
                  >
                    {company.companyWebsite}
                  </a>{" "}
                </p>
                <p className="text-sm  font-normal text-paletterpurple-600">
                  {company.message}
                </p>
              </div>
              <div className="mt-4 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href={company.callToActionURL}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-paletterpurple-800 hover:bg-paletterpurple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paletterpurple-500"
                >
                  <BriefcaseIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  {company.callToActionMessage}
                </a>
              </div>
            </div>
          </div>

          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {company.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

function Testimonials() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-500">
          What clients say about us ?
        </h2>
      </div>
      {/* Testimonial container */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Testimonial card */}
        <div className="shadow-lg rounded-xl mx-auto p-4 ">
          <p className="text-gray-600">
            <span className="text-green-500 text-lg font-bold">" </span>To get
            social media testimonials like these, keep your customers engaged
            with your social media accounts by posting regularly yourself{" "}
            <span className="text-green-500 text-lg font-bold"> "</span>
          </p>
          <div className="flex bg-green-100 rounded-full items-center">
            <a href="#" className="block relative">
              <Image
                src="/images/avatar.png"
                width={40}
                height={40}
                alt="avatar"
                className="h-10 w-10 rounded-full mx-auto"
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="text-sm text-green-500 font-semibold ">
                Ashutosh
              </span>
              <span className="text-xs">Director</span>
            </div>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="shadow-lg rounded-xl mx-auto p-4 ">
          <p className="text-gray-600">
            <span className="text-green-500 text-lg font-bold">" </span>To get
            social media testimonials like these, keep your customers engaged
            with your social media accounts by posting regularly yourself{" "}
            <span className="text-green-500 text-lg font-bold"> "</span>
          </p>
          <div className="flex bg-green-100 rounded-full items-center">
            <a href="#" className="block relative">
              <Image
                src="/images/avatar.png"
                width={40}
                height={40}
                alt="avatar"
                className="h-10 w-10 rounded-full mx-auto"
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="text-sm text-green-500 font-semibold ">
                Ashutosh
              </span>
              <span className="text-xs">Director</span>
            </div>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="shadow-lg rounded-xl mx-auto p-4 ">
          <p className="text-gray-600">
            <span className="text-green-500 text-lg font-bold">" </span>To get
            social media testimonials like these, keep your customers engaged
            with your social media accounts by posting regularly yourself{" "}
            <span className="text-green-500 text-lg font-bold"> "</span>
          </p>
          <div className="flex bg-green-100 rounded-full items-center">
            <a href="#" className="block relative">
              <Image
                src="/images/avatar.png"
                width={40}
                height={40}
                alt="avatar"
                className="h-10 w-10 rounded-full mx-auto"
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="text-sm text-green-500 font-semibold ">
                Ashutosh
              </span>
              <span className="text-xs">Director</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;

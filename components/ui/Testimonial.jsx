import Image from "next/image";

function Testimonial({ testimonial }) {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-500">
          {testimonial.title}
        </h2>
      </div>
      {/* Testimonial container */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonial.testimonial_card.map((testimonial, key) => {
          return (
            <div className="grid shadow-lg rounded-xl mx-auto p-4" key={key}>
              <p className="text-gray-600 pb-6">
                <span className="text-paletterpurple-500 text-lg font-bold">
                  "{" "}
                </span>
                {testimonial.description}
                <span className="text-paletterpurple-500 text-lg font-bold">
                  {" "}
                  "
                </span>
              </p>
              <div className="flex bg-paletterpurple-100 rounded-full items-center">
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
                  <span className="text-sm text-paletterpurple-500 font-semibold ">
                    {testimonial.name}
                  </span>
                  <span className="text-xs">{testimonial.designation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;

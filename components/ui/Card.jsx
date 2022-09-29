import Image from "next/image";
function Card() {
  return (
    <>
      <div className="flex mt-5 p-10 justify-center">
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-500">
          Recent Properties
        </h2>
      </div>

      {/* Card Container */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card */}
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="/images/home1.jpg"
            alt="home1"
            width={1500}
            height={950}
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Orchid Villa</div>
            <p className="text-gray-700">
              Located in the suburbs of california, orchid villa offers luxury
              with a modern touch. Equipped with green lighting and a rainwater
              harvesting system, this property is eco-friendly.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block text-green-400 font-bold pb-1 mb-2">
              $ 450,0000
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Beds
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              9 Baths
            </span>
          </div>
          <div className="px-6 pt-4 pb-10">
            <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white">
              View Property
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="/images/home2.jpg"
            alt="home1"
            width={1500}
            height={950}
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Orchid Villa</div>
            <p className="text-gray-700">
              Located in the suburbs of california, orchid villa offers luxury
              with a modern touch. Equipped with green lighting and a rainwater
              harvesting system, this property is eco-friendly.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block text-green-400 font-bold pb-1 mb-2">
              $ 450,0000
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Beds
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              9 Baths
            </span>
          </div>
          <div className="px-6 pt-4 pb-10">
            <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white">
              View Property
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="/images/home3.jpg"
            alt="home1"
            width={1500}
            height={950}
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Orchid Villa</div>
            <p className="text-gray-700">
              Located in the suburbs of california, orchid villa offers luxury
              with a modern touch. Equipped with green lighting and a rainwater
              harvesting system, this property is eco-friendly.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block text-green-400 font-bold pb-1 mb-2">
              $ 450,0000
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Beds
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              9 Baths
            </span>
          </div>
          <div className="px-6 pt-4 pb-10">
            <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white">
              View Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

function Banner({ banner }) {
  return (
    <main className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8 bg-slate-50 m-2 p-2">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold xl:space-x-4 text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{banner.title_1}</span>
          <span className="block xl:inline text-green-500">
            {banner.title_2}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {banner.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
            >
              {banner.button_1_label}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
            >
              {banner.button_2_label}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Banner;

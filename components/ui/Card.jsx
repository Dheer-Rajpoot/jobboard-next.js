import Image from "next/image";
function Card({ featureSection }) {
  return (
    <>
      <div className="flex mt-5 p-10 justify-center">
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-500">
          {featureSection.title}
        </h2>
      </div>
      {/* Card Container */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card */}
        {featureSection.featured_cards.map((card, key) => {
          return (
            <div key={key} className="rounded overflow-hidden shadow-lg">
              <Image
                className="w-full"
                src={card.image.url}
                alt={card.image.title}
                width={1500}
                height={950}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {card.feature_card_title}
                </div>
                <p className="text-gray-700">{card.feature_card_description}</p>
              </div>
              <div className="px-6 pt-4 pb-10">
                <button className="inline-block bg-paletterpurple-900 rounded-full px-4 py-1 font-bold text-white">
                  {card.button_label}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;

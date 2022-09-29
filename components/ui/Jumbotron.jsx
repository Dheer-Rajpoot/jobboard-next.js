function Jumbotron({ jumbotron }) {
  return (
    <div
      className="py-20 rounded-md m-2"
      style={{ background: "linear-gradient(315deg, #D1FAE5 0%, #10B981 74%)" }}
    >
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          {jumbotron.title}
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">{jumbotron.sub_title}</h3>
        <button className="bg-white font-bold rounded-2xl py-4 px-8 shadow-lg uppercase tracking-wider">
          {jumbotron.button_label}
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;

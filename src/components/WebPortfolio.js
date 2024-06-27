//src/components/WebPortfolio.js

function WebPortfolio(props) {
  const { preview, alt, website, title, githubRepo, text1 } = props;

  return (
    <div className="mt-5 mx-5 w-72">
      <div className="p-3 justify-items-center bg-rem-gray rounded-xl shadow-sm">
        <img className="w-64 h-40 object-cover rounded-t-md hover:scale-105 transition-all transform duration-400" src={preview} alt={alt} />
        <div className="mt-2">
          <a href={website} target="_blank" rel="noreferrer"><h1 className="underline text-gray-600 hover:text-rem-blue text-2xl font-bold">{title}</h1></a>
          <a href={githubRepo} target="_blank" rel="noreferrer"><p className="text-md underline mt-2 text-gray-700 hover:text-rem-blue">Github Repo</p></a>
          <p className="text-sm mt-3 pb-3 text-gray-700">{text1}</p>
        </div>
      </div>
    </div>
  );
}

export default WebPortfolio;

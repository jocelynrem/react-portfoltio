
// Note-Taker: https://calm-fortress-51934.herokuapp.com/notes
//   Github: https://github.com/jocelynrem/note_taker

// Weather-Dashboard: https://jocelynrem.github.io/weather-dahboard/
//   Github: https://github.com/jocelynrem/weather-dahboard

// Pour-Decisions: https://thompsonel11.github.io/Project_1/
//   Github: https://github.com/thompsonel11/Project_1

// Workout-Tracker: https://workout-tracker-jremington.herokuapp.com/stats
//   Github: https://github.com/jocelynrem/workoutTracker

// Code-Quiz: https://jocelynrem.github.io/Code-Quiz/

// Be|Seated: https://beseated.herokuapp.com/
//   Github: https://github.com/jocelynrem/project-2
//   Demo: https://drive.google.com/file/d/1nuy9PY3poKoPu17KkfpDZaRc6yuP2I_J/view

// Resume: https://drive.google.com/file/d/1OeCyICt424v7mSiFgoF4UjmiCOaBngeA/view?usp=sharing


function WebPortfolio(props) {
  const { preview, alt, website, title, githubRepo, text1 } = props;

  return (
    <div className="mt-5 mx-5 w-72">
      <div className="p-3 bg-rem-gray rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all transform duration-400">
        <img className="w-64 h-40 object-cover rounded-t-md" src={preview} alt={alt} />
        <div className="mt-2">
          <a href={website} target="_blank" rel="noreferrer"><h1 className="text-2xl font-bold text-gray-700">{title}</h1></a>
          <a href={githubRepo} target="_blank" rel="noreferrer"><p className="text-md mt-2 text-gray-700">Github Repo</p></a>
          <p className="text-sm mt-3 pb-3 text-gray-700">{text1}</p>
        </div>
      </div>
    </div>
  );
}

export default WebPortfolio;

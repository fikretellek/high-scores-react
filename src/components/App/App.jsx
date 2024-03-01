import allCountryScores from "../../assets/scores";
import HighScoreTable from "../HighScoreTable/HighScoreTable";
import "./App.css";
function App() {
  const countries = allCountryScores.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <div className="table">
      <h2>High Scores Per Country</h2>
      {countries.map((country) => {
        return <HighScoreTable key={`table-${country.name}`} country={country.name} scores={country.scores} />;
      })}
    </div>
  );
}

export default App;

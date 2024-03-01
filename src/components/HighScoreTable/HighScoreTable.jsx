import PlayerScore from "../PlayerScore/PlayerScore";
import "./HighScoreTable.css";

export default function HighScoreTable({ country, scores }) {
  scores = scores.sort((a, b) => b.s - a.s);
  return (
    <table>
      <th>High Scores: {country}</th>
      {scores.map((person) => {
        return <PlayerScore key={`${country}-${person}`} name={person.n} score={person.s} />;
      })}
    </table>
  );
}

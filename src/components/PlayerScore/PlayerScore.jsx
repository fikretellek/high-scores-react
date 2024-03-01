import "./PlayerScore.css";

export default function PlayerScore({ name, score }) {
  return (
    <tr>
      <td>{name.toUpperCase()}</td>
      <td>{score}</td>
    </tr>
  );
}

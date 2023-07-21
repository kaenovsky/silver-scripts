import "./ScoreKeeper.css";
import { useState } from "react";

export default function ScoreKeeper() {

    const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });
    const incrementScoreP1 = () => {
        setScore((oldScores) => {
            return {...oldScores, p1Score: oldScores.p1Score + 1 };
        });
    }

    const incrementScoreP2 = () => {
        setScore((oldScores) => {
            return {...oldScores, p2Score: oldScores.p2Score + 1 };
        });
    }

    return (
        <div className="ScoreKeeper">
            <p>Player 1 ===&gt; {score.p1Score}</p>
            <p>Player 2 ===&gt; {score.p2Score}</p>
            <button onClick={incrementScoreP1}>+1 Player 1</button>
            <button onClick={incrementScoreP2}>+1 Player 2</button>
        </div>
    );
}
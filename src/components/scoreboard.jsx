/* eslint-disable react/prop-types */
export default function Scoreboard({ currentScore, maxScore }) {
    const bestScore = Number(localStorage.getItem('score')) || 0;

    return (
        <div className="scoreboard">
            <p>Score: <span>{currentScore} / {maxScore}</span></p>
            <p>Best Score: <span>{bestScore === null ? 0 : bestScore}</span></p>
        </div>
    )
}
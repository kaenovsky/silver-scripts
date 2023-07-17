import "./Slot.css";

export default function SlotMachine({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val2 === val3;
    const fontColor = isWinner ? "green" : "crimson";
    return (
        <div className="slotBox">
            <h1>{val1}  {val2}  {val3}</h1>
            <h2 style={{color: fontColor}}>{isWinner ? "You win!" : "You lose!"}</h2>
            {isWinner && <h3>Congratulations!</h3>}
        </div>
    );
}
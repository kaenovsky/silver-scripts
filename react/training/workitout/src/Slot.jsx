import "./Slot.css";

export default function SlotMachine({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val2 === val3;
    const fontColor = isWinner ? "green" : "red";
    return (
        <div className="slotBox">
            <h1>==| {val1} | {val2} | {val3} |==</h1>
            <h2>{isWinner ? "You win!" : "You lose!"}</h2>
            <h3 style={{color: fontColor}}>{isWinner ? "Congrats" : "Better luck next time"}</h3>
        </div>
    );
}
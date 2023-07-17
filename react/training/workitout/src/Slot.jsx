export default function SlotMachine({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val2 === val3;
    const fontColor = isWinner ? "green" : "red";
    return (
        <div>
            <h1>{val1} | {val2} | {val3}</h1>
            <h2>{isWinner ? "You Win!" : "You loose!"}</h2>
            <h3 style={{color: fontColor}}>{isWinner ? "Congrats" : "better luck next time"}</h3>
        </div>
    );
}
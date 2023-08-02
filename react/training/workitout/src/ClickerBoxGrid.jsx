import { useState } from "react";
import ClickerBox from "./ClickerBox";

export default function ClickerBoxGrid() {
       
    const [boxes, setBoxes] = useState([false, true, false]);

    const reset = () => {
        setBoxes([false, false, false]);
    };

    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value;
                } else {
                    return value;
                }
            }); 
        });
    };

    return (
        <div className="ClickerBoxGrid">
            <div>
                {boxes.map((b, idx) => (
                    <ClickerBox key={idx} isActive={b} toggle={() => toggleBox(idx)} />
                ))}
            </div>
            <button onClick={reset}>Reset all boxes</button>
        </div>
    );
}
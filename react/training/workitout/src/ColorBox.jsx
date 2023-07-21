import "./ColorBox.css";
import { useState } from "react";

export default function ColorBox({ colors }) {

    const randomNum = () => Math.floor(Math.random() * colors.length);
    const [color, setColor] = useState(colors[randomNum()]);
    const changeColor = () => setColor(colors[randomNum()]);

    return (
        <div 
            onClick= {changeColor} 
            style={{backgroundColor: color}} 
            className="ColorBox">
        </div>
    );
}
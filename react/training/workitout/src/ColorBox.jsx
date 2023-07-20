import "./ColorBox.css";
import { useState } from "react";

export default function ColorBox({ colors }) {

    const randomNum = () => Math.floor(Math.random() * 15) + 1;
    const [color, setColor] = useState(colors[randomNum()]);
    const changeColor = () => setColor(colors[randomNum()]);

    return (
        <div onClick= {changeColor} style={{backgroundColor: `${color}`}} className="box"></div>
    );
}
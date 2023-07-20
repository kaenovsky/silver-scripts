import "./Toggler.css";
import { useState } from "react";

export default function Toggler() {

    const [isSkull, setIsSkull] = useState(false);
    const toggleSkull = () => setIsSkull(!isSkull);
    
    return (
        <span className="emoji" onClick={toggleSkull}>
            {isSkull ? "💀" : "😬"}
        </span>
    );
}
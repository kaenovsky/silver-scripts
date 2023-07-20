import "./Clicker.css";

export default function Clicker({buttonText, message}) {   
    
    const handleClick = function click() {
        alert(message);
    }
    
    return (
        <button onClick={handleClick} className="Clicker">{buttonText}</button>
    );
}
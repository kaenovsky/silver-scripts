import "./ClickerBox.css";

export default function ClickerBox({ isActive, toggle }) {

    return (
        <div
            onClick={toggle}
            className="ClickerBox"
            style={{ backgroundColor: isActive ? "red" : "black" }}
        >
        </div>
    );
}
import "./ColorBoxes.css";
import ColorBox from "./ColorBox";

export default function ColorBoxes({ colors }) {
    return (
        <div className="ColorBoxes">
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
        </div>
    );
}
export default function ColorList({ colors }) {
    return (
        <div>
            <p>Color List!</p>
            {colors.map((c) => (
                <ul>
                    <li style={{color: c}}>{c}</li>
                </ul>
            ))}
        </div>
    );
}
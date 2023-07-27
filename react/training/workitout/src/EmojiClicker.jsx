import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    
    const emojiList = ["😐", "😓", "😅", "😍", "🙃", "😵", "🤒", "😡", "😨", "🤕", "😬"];
    const randomEmoji = Math.floor(Math.random() * emojiList.length);
    
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: emojiList[randomEmoji] }]);

    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: emojiList[randomEmoji] }]);
    }

    return (
        <div style={{ margin: "2rem"}}>
            <button onClick={addEmoji} style={{ margin: "1rem"}}>Add emoji</button>
            <div>
                {emojis.map((e) => (
                    <span key={e.id} style={{ fontSize: "3rem" }}>
                        {e.emoji}
                    </span>
                ))}
            </div>
        </div>
    );
}
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    
    const emojiList = ["😐", "😓", "😅", "😍", "🙃", "😵", "🤒", "😡", "😨", "🤕", "😬", "🤢"];
    const randomEmoji = Math.floor(Math.random() * emojiList.length);
    
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: emojiList[randomEmoji] }]);

    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: emojiList[randomEmoji] }]);
    }

    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter((e => e.id !== id));
        })        
    } 

    const makeThemHearts = () => {
        const allHearts = emojis.map(e => {
            return {
                ...e,
                emoji: "💜"
            }                    
        });

        setEmojis(allHearts);
        
    }

    return (
        <div style={{ margin: "2rem"}}>
            <button onClick={addEmoji} style={{ margin: "1rem"}}>Add emoji</button>
            <button onClick={makeThemHearts} style={{ margin: "1rem"}}>Make all emoji hearts</button>
            <div>
                {emojis.map((e) => (
                    <span
                        onClick={() => deleteEmoji(e.id)} 
                        key={e.id}
                        style={{ fontSize: "3rem" }}
                    >
                        {e.emoji}
                    </span>
                ))}
            </div>
        </div>
    );
}
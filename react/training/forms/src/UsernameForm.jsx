import { useState } from "react";

export default function UsernameForm() {
    
    const [username, setUsername] = useState("jake");
    
    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    
    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={updateUsername} />
            <button>Send</button>
        </div>
    );
}
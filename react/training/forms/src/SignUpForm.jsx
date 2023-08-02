import { useState } from "react";

export default function SignUpForm() {
    
    const [formData, setFormData] = useState({ firstName: "", lastName: "" });

    const handleChange = (e) => {
        const changedField = e.target.name;
        const newValue = e.target.value;
        setFormData((currentData) => {
            currentData[changedField] = newValue;
            return { ...currentData };
        });
    };

    return (
        <div style={{ margin: "1rem" }}>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last name: </label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <button>Send</button>
        </div>
    );
}
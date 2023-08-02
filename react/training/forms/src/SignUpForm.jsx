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

    const handleSubmit = () => {
        console.log(formData.firstName, formData.lastName);
    }

    const isRed = () => {
        if (formData.firstName === 'red') {
            return true;
        }
    }

    const isBlue = () => {
        if (formData.lastName === 'blue') {
            return true;
        }
    }

    return (
        <div style={{ margin: "1rem" }}>
            <h2 style={{ color: isRed() ? "red" : "black" }}>{formData.firstName}</h2>
            <h2 style={{ color: isBlue() ? "blue" : "black" }}>{formData.lastName}</h2>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />                
            </div>
            <div>
                <label htmlFor="lastName">Last name: </label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
}
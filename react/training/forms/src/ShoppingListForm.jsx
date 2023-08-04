import "./ShoppingListForm.css";
import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
    
    const [formData, setFormData] = useState({ product: "", qty: 0 });

    const handleChange = (e) => {
        const changedField = e.target.name;
        const newValue = e.target.value;
        setFormData((currentData) => {
            currentData[changedField] = newValue;
            return { ...currentData };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ product: "", qty: 0 });
    }

    return (
        <form className="ShoppingListForm" onSubmit={handleSubmit}>
            <h2>Product name is: {formData.product}</h2>
            <h2>Quantity is: {formData.qty}</h2>
            <label htmlFor="product">Product Name: </label>
            <input 
                type="text"
                placeholder="product name"
                name="product"
                id="product"
                onChange={handleChange}
                value={formData.product}
            />

            <label htmlFor="qty">Product Quantity: </label>
            <input 
                type="number"
                placeholder="product quantity"
                name="qty"
                id="qty"
                onChange={handleChange}
                value={formData.qty}
            />
            <button type="submit">Add item</button>
        </form>
    );
}
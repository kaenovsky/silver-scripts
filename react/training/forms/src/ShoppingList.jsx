import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./ShoppingList.css";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {

    const [items, setItems] = useState([
        {id: uuid(), product: "banana", qty: 2},
        {id: uuid(), product: "apple", qty: 5},
    ]);

    const addItem = (item) => {
        setItems(currentItems => {
            return [
                ...currentItems, { ...item, id: uuid() }
            ];
        });
    }

    return (
        <div>
            <h1>Shopping List:</h1>
            <ul className="ShoppingList">
                {items.map(i => <li key={i.id}>{i.product} ~ {i.qty}</li>)}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    );
}
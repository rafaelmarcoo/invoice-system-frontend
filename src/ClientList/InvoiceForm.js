import { useState } from "react";

export const InvoiceForm = () => {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const item = {
            id: items.length === 0 ? 1 : items[items.length - 1].id + 1,
            description: "",
            quantity: "",
            price: "",
        }
        setItems([...items, item]);;
    };

    const removeItem = (removeId) => {
        const newItemsArr = items.filter((item) => item.id !== removeId);
        setItems(newItemsArr);
    };

    return (
        <div className="invoice-form">
            <h3>New Invoice Form</h3>

            <label>Client</label>
            <select></select>
            {/* Will have to connect this to database to show all available clients */}

            <label>Day of Month to Send Invoice</label>
            <input type="date"></input>

            <br/><br/>

            <label>Items</label>
            {items.map((item) => (
                <div key={item.id} className="item">
                    <label>Description</label>
                    <input 
                        type="text"
                    />

                    <label>quantity</label>
                    <input 
                        type="text"
                    />

                    <label>Price</label>
                    <input 
                        type="text"
                    />

                    <button onClick={() => removeItem(item.id)}>X</button>
                </div>
            ))}

            <button onClick={addItem}>Add Item</button>

        </div>
    );
}
import { useState } from "react";
import Axios from 'axios';

export const InvoiceForm = ({ clients }) => {
    const [formData, setFormData] = useState({
        name: "",
        frequency: "",
        dateDue: "",
        items: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const addItem = () => {
        const newItem = {
            id: formData.items.length === 0 ? 1 : formData.items[formData.items.length - 1].id + 1,
            description: "",
            quantity: "",
            price: "",
        };

        setFormData({
            ...formData,
            items: [...formData.items, newItem],
        });
    };

    const removeItem = (removeId) => {
        setFormData({
            ...formData,
            items: formData.items.filter((item) => item.id !== removeId)
        });
    };

    const handleItemChange = (id, field, value) => {
        setFormData({
            ...formData,
            items: formData.items.map((item) => 
                item.id === id ? {...item, [field]: value } : item
            ),
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedItems = formData.items.map((item) => ({
            ...item,
            price: parseFloat(item.price).toFixed(2),
            quantity: parseFloat(item.quantity).toFixed(2)
        }));

        const updatedFormData = {
            ...formData,
            items: updatedItems,
        };

        console.log(updatedFormData);

        try {
            const response = await Axios.post("http://localhost:5041/api/invoice", updatedFormData);

            if(response.status === 200) {
                alert("Invoice made!");
            } else {
                alert("Failed to make invoice!");
            }
        } catch(error) {
            alert("Error: " + error.message)
        }
    }

    return (
        <div className="invoice-form">
            <h3>New Invoice Form</h3>

            <label>Client</label>
            <select 
                className="drop-down" 
                name="name" 
                onChange={handleChange}
                value={formData.name}
            >
                <option>Select a client</option>
                {clients.length > 0 ? (
                    clients.map((client, index) => (
                        <option key={index} value={client.companyCode}>
                            {client.name}
                        </option>
                    )
                )) : (<option>NO CLIENTS</option>)}
            </select>

            <br/><br/>
            
            <label>Frequency</label>
            <select
                className="drop-down"
                name="frequency"
                onChange={handleChange}
                value={formData.frequency}
            >    
                <option>Select time</option>
                <option value="one-time">One-Time</option>
                <option value="weekly">Weekly</option>
                <option value="fortnightly">Fortnightly</option>
                <option value="monthly">Monthly</option>
            </select>

            <br/><br/>

            <label>Due Date</label>
            <input 
                type="date"
                name="dateDue"
                onChange={handleChange}
                value={formData.dateDue}
            >

            </input>

            <br/><br/>

            <label>Items</label>
            <br/>
            {formData.items.map((item) => (
                <div key={item.id} className="item">
                    <label>Description</label>
                    <input
                        name="Description" 
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                    />

                    <label>Quantity</label>
                    <input
                        name="Quantity" 
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(item.id, "quantity", e.target.value)}
                    />

                    <label>Price</label>
                    <input 
                        name="Price"
                        type="number"
                        value={item.price}
                        onChange={(e) => handleItemChange(item.id, "price", e.target.value)}
                    />

                    <button onClick={() => removeItem(item.id)}>X</button>
                </div>
            ))}

            <button onClick={addItem}>Add Item</button>

            <br/><br/>
            <button type="submit" onClick={handleSubmit}>Add Invoice</button>
            
        </div>
    );
}
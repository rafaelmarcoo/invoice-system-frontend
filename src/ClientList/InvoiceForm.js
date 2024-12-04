import { useState } from "react";
import Axios from 'axios';

export const InvoiceForm = ({ clients }) => {
    const [formData, setFormData] = useState({
        Name: "",
        Frequency: "",
        DateDue: "",
        Items: [],
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
            Id: formData.Items.length === 0 ? 1 : formData.Items[formData.Items.length - 1].Id + 1,
            Description: "",
            Quantity: 0,
            Price: 0,
        };

        setFormData({
            ...formData,
            Items: [...formData.Items, newItem],
        });
    };

    const removeItem = (removeId) => {
        setFormData({
            ...formData,
            Items: formData.Items.filter((item) => item.Id !== removeId)
        });
    };

    const handleItemChange = (id, field, value) => {
        setFormData({
            ...formData,
            Items: formData.Items.map((item) => 
                item.Id === id ? {...item, [field]: value } : item
            ),
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedItems = formData.Items.map((item) => ({
            ...item,
            Price: parseFloat(item.Price).toFixed(2),
            Quantity: parseFloat(item.Quantity).toFixed(2),
        }));

        const updatedFormData = {
            ...formData,
            Items: updatedItems,
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
                name="Name" 
                onChange={handleChange}
                value={formData.Name}
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
                name="Frequency"
                onChange={handleChange}
                value={formData.Frequency}
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
                name="DateDue"
                onChange={handleChange}
                value={formData.DateDue}
            >

            </input>

            <br/><br/>

            <label>Items</label>
            <br/>
            {formData.Items.map((item) => (
                <div key={item.id} className="item">
                    <label>Description</label>
                    <input
                        name="Description" 
                        type="text"
                        value={item.Description}
                        onChange={(e) => handleItemChange(item.Id, "Description", e.target.value)}
                    />

                    <label>Quantity</label>
                    <input
                        name="Quantity" 
                        type="number"
                        value={item.Quantity}
                        onChange={(e) => handleItemChange(item.Id, "Quantity", e.target.value)}
                    />

                    <label>Price</label>
                    <input 
                        name="Price"
                        type="number"
                        value={item.Price}
                        onChange={(e) => handleItemChange(item.Id, "Price", e.target.value)}
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
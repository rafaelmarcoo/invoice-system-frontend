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
        const lastItem = formData.Items[formData.Items.length - 1];
        if(lastItem && (!lastItem.Description || !lastItem.Quantity || !lastItem.Price)) {
            alert("Please fill out previous item fields before adding a new one!");
            return;
        };

        const newItem = {
            Description: "",
            Quantity: 0,
            Price: 0,
        };

        setFormData({
            ...formData,
            Items: [...formData.Items, newItem],
        });
    };

    const removeItem = (removeDscp) => {
        setFormData({
            ...formData,
            Items: formData.Items.filter((item) => item.Description !== removeDscp)
        });
    };

    const handleItemChange = (description, field, value) => {
        setFormData({
            ...formData,
            Items: formData.Items.map((item) => 
                item.Description === description ? {...item, [field]: value } : item
            ),
        });
    };

    const calculateTotAmt = () => {
        const totAmt = formData.Items.reduce((total, item) => {
            return total + (parseFloat(item.Quantity) * parseFloat(item.Price) || 0);
        }, 0);
        return parseFloat(totAmt.toFixed(2));
    }

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const currentDate = getCurrentDate();
        const totAmt = calculateTotAmt();

        const updatedItems = formData.Items.map((item) => ({
            ...item,
            Price: parseFloat(item.Price),
            Quantity: parseFloat(item.Quantity),
        }));

        const updatedFormData = {
            ...formData,
            Items: updatedItems,
            DateSent: currentDate,
            Amount: totAmt,
            Status: "Sent",
        };

        console.log(updatedFormData);

        try {
            const response = await Axios.post("http://localhost:5041/api/invoice", updatedFormData);

            if(response.status === 200) {
                alert("Invoice made!");

                setFormData({
                    Name: "",
                    Frequency: "",
                    DateDue: "",
                    Items: [],
                });
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
            {formData.Items.map((item, index) => (
                <div key={index} className="item">
                    <label>Description</label>
                    <input
                        name="Description" 
                        type="text"
                        value={item.Description}
                        onChange={(e) => handleItemChange(item.Description, "Description", e.target.value)}
                        required
                    />

                    <label>Quantity</label>
                    <input
                        name="Quantity" 
                        type="number"
                        value={item.Quantity}
                        onChange={(e) => handleItemChange(item.Description, "Quantity", e.target.value)}
                        required
                    />

                    <label>Price</label>
                    <input 
                        name="Price"
                        type="number"
                        value={item.Price}
                        onChange={(e) => handleItemChange(item.Description, "Price", e.target.value)}
                        required
                    />

                    <button onClick={() => removeItem(item.Description)}>X</button>
                </div>
            ))}

            <button onClick={addItem}>Add Item</button>

            <br/><br/>
            <button type="submit" onClick={handleSubmit}>Add Invoice</button>
            
        </div>
    );
}
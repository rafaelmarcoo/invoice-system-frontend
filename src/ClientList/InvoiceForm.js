import { useState } from "react";

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
                name="frequencies"
                onChange={handleChange}
                value={formData.frequency}
            >    
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
                        type="text"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(item.id, "quantity", e.target.value)}
                    />

                    <label>Price</label>
                    <input 
                        name="Price"
                        type="text"
                        value={item.price}
                        onChange={(e) => handleItemChange(item.id, "price", e.target.value)}
                    />

                    <button onClick={() => removeItem(item.id)}>X</button>
                </div>
            ))}

            <button onClick={addItem}>Add Item</button>

            <br/><br/>
            <button>Add Invoice</button>
        </div>
    );
}
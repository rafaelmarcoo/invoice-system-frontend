import { useState } from "react";

export const GSTExpenseForm = (props) => {
    const [formData, setFormData] = useState({
        Title: "",
        Description: "",
        Date: "",
        Amount: "",
        File: null,
        Category: "",
        GstRate: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            File: event.target.files[0],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await props.addExpense(formData);
        setFormData({
            Title: "",
            Description: "",
            Date: "",
            Amount: "",
            File: null,
            Category: "",
            GstRate: "",
        });
    };

    return (
        <div className="gst-expenses-addGST">
            <h3>Add GST Expense</h3>

            <form onSubmit={handleSubmit}>
                <label>Expense Title (Required)</label>
                <input 
                    type="text" 
                    name="Title"
                    value={formData.Title}
                    onChange={handleChange}
                    placeholder="Title..." 
                    required 
                />

                <label>Brief Description (Optional)</label>
                <input 
                    type="text"
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange} 
                    placeholder="Provide a brief description of the expense..." 
                />

                <label>Category (Required)</label>
                <select
                    className="drop-down"
                    name="Category"
                    onChange={handleChange}
                    value={formData.Category}
                >
                    <option>Select Category</option>
                    <option value="fullypaid">Fully Paid Expense</option>
                    <option value="partiallypaid">Partially Paid Expense</option>
                    <option value="depreciatingasset">Depreciating Asset</option>
                </select>

                <br/><br/>

                <label>Supporting Documents (Optional)</label>
                <input 
                    type="file" 
                    name="File"
                    onChange={handleFileChange}
                />

                <label>Date of Expense (Required)</label>
                <input 
                    type="date"
                    name="Date"
                    value={formData.Date}
                    onChange={handleChange} 
                    required 
                />

                <label>Cost of Expense (Required)</label>
                <input 
                    type="number" 
                    name="Amount"
                    value={formData.Amount}
                    onChange={handleChange}
                    required 
                />

                <label>GST Rate (0.15 for 15%, 0 for no GST) (Required)</label>
                <input 
                    type="number"
                    name="GstRate"
                    value={formData.GstRate}
                    onChange={handleChange}
                    required
                />

                <br/><br/>
                <button>Submit Expense</button>
            </form>
        </div>
    );
};
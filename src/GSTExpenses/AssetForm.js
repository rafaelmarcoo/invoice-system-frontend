import { useState } from "react";

export const AssetForm = () => {
    const [formData, setFormData] = useState({
        Name: "",
        Description: "",
        DatePurchased: "",
        DepreciationType: "",
        OriginalValue: "",
        UsefulLife: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {

    }

    return (
        <div className="form">
            <h3>Depreciable Asset Form</h3>

            <form onSubmit={handleSubmit}> 
                <label>Asset Name</label>
                <input 
                    type="text" 
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Asset Name..." 
                    required 
                />

                <label>Description</label>
                <input 
                    type="text" 
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                    placeholder="Description.." 
                    required 
                />

                <label>Purchase Date</label>
                <input 
                    type="date" 
                    name="DatePurchased"
                    value={formData.DatePurchased}
                    onChange={handleChange}
                    required 
                />

                <label>Depreciation Type</label>
                <select
                    className="drop-down"
                    name="DepreciationType"
                    onChange={handleChange}
                    value={formData.DepreciationType}
                >
                    <option>Select a depreciation method</option>
                    <option value="straight-line">Straight-Line Method</option>
                    <option value="diminishing">Diminishing Value</option>
                </select>

                <label>Original Value</label>
                <input 
                    type="number" 
                    name="OriginalValue"
                    value={formData.OriginalValue}
                    onChange={handleChange}
                    placeholder="Original value of the asset..." 
                    required 
                />

                <label>Useful Life (in years)</label>
                <input 
                    type="number" 
                    name="UsefulLife"
                    value={formData.UsefulLife}
                    onChange={handleChange}
                    placeholder="Useful life of the asset in years..." 
                    required 
                />

                <br/><br/>
                <button>Add Asset</button>
            </form>
        </div>
    );
};
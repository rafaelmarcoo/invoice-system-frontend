import { useState } from "react";

export const AssetForm = (props) => {
    const [formData, setFormData] = useState({
        Name: "",
        Description: "",
        DatePurchased: "",
        DepreciationType: "straight-line",
        DepreciationRate: "",
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const floatOV = parseFloat(formData.OriginalValue).toFixed(2);
        const floatDR = parseFloat(formData.DepreciationRate).toFixed(2);
        setFormData({
            ...formData,
            OriginalValue: parseFloat(floatOV),
            DepreciationRate: parseFloat(floatDR),
        });

        await props.addAsset(formData);
        setFormData({
            Name: "",
            Description: "",
            DatePurchased: "",
            DepreciationType: "",
            DepreciationRate: "",
            OriginalValue: "",
            UsefulLife: "",
        });
    };

    return (
        <div>
            <h3>Depreciable Asset Form</h3>
            <form className="form-container" onSubmit={handleSubmit}> 
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

                <label>Original Value</label>
                <input 
                    type="number" 
                    name="OriginalValue"
                    value={formData.OriginalValue}
                    onChange={handleChange}
                    placeholder="Original value of the asset..." 
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

                <br/><br/>

                <div className="select-dropdown">
                    <label>Depreciation Type</label>
                    <select
                        name="DepreciationType"
                        onChange={handleChange}
                        value={formData.DepreciationType}
                    >
                        <option value="straight-line">Straight-Line Method</option>
                        <option value="diminishing">Diminishing Value</option>
                    </select>
                </div>

                <br/>
                
                <label>Depreciation Rate</label>
                <input 
                    type="number"
                    name="DepreciationRate"
                    value={formData.DepreciationRate}
                    onChange={handleChange}
                    placeholder="Rate of depreciation ..."
                    required
                />

                <label>Estimated Useful Life (in years)</label>
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
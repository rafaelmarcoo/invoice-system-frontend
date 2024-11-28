import { useState } from "react";
import { Axios } from "axios";

export const CompanyForm = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        gstNumber: "",
        companyAddress: "",
        companyCity: "",
        companyZip: "",
        companyPhone: "",
        companyEmail: ""
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

        {/*Test*/}
        console.log(formData);

        try {
            const response = await Axios.post("http://localhost:5000/api/company", formData);

            if(response.ok) {
                alert("Company details updated!");
            } else {
                const err = await response.json();
                alert(`Error: ${err.message}`);
            }
        } catch(error) {
            alert("Error");
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Company Name</label>
                <input 
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange} 
                    placeholder="Company Name..." 
                    required
                />

                <label>GST Number</label>
                <input 
                    type="text" 
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    placeholder="Email..." 
                    required
                />

                <label>Company Address</label>
                <input 
                    type="text" 
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Company Address..." 
                    required
                />

                <label>Company City</label>
                <input 
                    type="text" 
                    name="companyCity"
                    value={formData.companyCity}
                    onChange={handleChange}
                    placeholder="Company City" 
                    required
                />

                <label>Company ZIP</label>
                <input 
                    type="text" 
                    name="companyZip" 
                    value={formData.companyZip}
                    onChange={handleChange}
                    placeholder="Company Zip" 
                    required
                />

                <label>Company Phone</label>
                <input 
                    type="tel" 
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleChange}
                    placeholder="Phone..." 
                    required
                />

                <label>Company Email</label>
                <input 
                    type="email" 
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="Email..." 
                    required
                />

                <br/><br/>
                <button>Save Changes</button>
            </form>
        </div>
    );
};
import { useState } from "react";
import Axios from 'axios';

export const ClientForm = () => {
    const [formData, setFormData] = useState({
        CompanyCode: "",
        GstNumber: "",
        Name: "",
        Address: "",
        City: "",
        Zip: "",
        Phone: "",
        Email: "",
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

        console.log(formData);
        
        try {
            const response = await Axios.post("http://localhost:5041/api/client", formData)

            if(response.status === 200) {
                alert("Client added!");
            } else {
                alert("Failed to add client!");
            }
        } catch(error) {
            alert("Error: " + error.message)
        }
    }

    return (
        <div className="client-list-clientform">
            <h3>ClientForm</h3>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Company Name..." 
                    required
                />

                <label>Address</label>
                <input 
                    type="text" 
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                    placeholder="Company Address..." 
                    required
                />

                <label>City</label>
                <input 
                    type="text" 
                    name="City"
                    value={formData.City}
                    onChange={handleChange}
                    placeholder="Company City..." 
                    required
                />

                <label>ZIP</label>
                <input 
                    type="text" 
                    name="Zip"
                    value={formData.Zip}
                    onChange={handleChange} 
                    placeholder="Company Zip" 
                    required
                />

                <label>Phone</label>
                <input 
                    type="tel" 
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    placeholder="Phone..." 
                    required
                />

                <label>Email</label>
                <input 
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange} 
                    placeholder="Email..." 
                    required
                />

                <label>Company Code</label>
                <input 
                    type="text" 
                    name="CompanyCode"
                    value={formData.CompanyCode}
                    onChange={handleChange}
                    placeholder="Company Code..." 
                    required
                />

                <label>GST Number</label>
                <input 
                    type="text" 
                    name="GstNumber"
                    value={formData.GstNumber}
                    onChange={handleChange}
                    placeholder="GST Number..." 
                    required
                />

                <br/><br/>
                <button>Add Client</button>
            </form>
        </div>
    )
}
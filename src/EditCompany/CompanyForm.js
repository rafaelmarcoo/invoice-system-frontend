import { useEffect, useState } from "react";
import Axios from 'axios';

export const CompanyForm = () => {
    const [formData, setFormData] = useState({
        Name: "",
        GstNumber: "",
        Address: "",
        City: "",
        Zip: "",
        Phone: "",
        Email: ""
    });

    const retrieveClientInfo = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/company/1");
            setFormData({
                Name: response.data.name,
                GstNumber: response.data.gstNumber,
                Address: response.data.address,
                City: response.data.city,
                Zip: response.data.zip,
                Phone: response.data.phone,
                Email: response.data.email
            });
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    useEffect(() => {
        retrieveClientInfo();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.put("http://localhost:5041/api/company", formData);

            if(response.status === 200) {
                alert("Company details updated!");
            } else {
                alert("Failed to update details!");
            }
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Company Name</label>
                <input 
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange} 
                    placeholder="Company Name..." 
                    required
                />

                <label>GST Number</label>
                <input 
                    type="text" 
                    name="GstNumber"
                    value={formData.GstNumber}
                    onChange={handleChange}
                    placeholder="Email..." 
                    required
                />

                <label>Company Address</label>
                <input 
                    type="text" 
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                    placeholder="Company Address..." 
                    required
                />

                <label>Company City</label>
                <input 
                    type="text" 
                    name="City"
                    value={formData.City}
                    onChange={handleChange}
                    placeholder="Company City" 
                    required
                />

                <label>Company ZIP</label>
                <input 
                    type="text" 
                    name="Zip" 
                    value={formData.Zip}
                    onChange={handleChange}
                    placeholder="Company Zip" 
                    required
                />

                <label>Company Phone</label>
                <input 
                    type="tel" 
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    placeholder="Phone..." 
                    required
                />

                <label>Company Email</label>
                <input 
                    type="email" 
                    name="Email"
                    value={formData.Email}
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
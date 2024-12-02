import { useState } from "react";

export const EditClient = ({ clients }) => {
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

    const [selectedClient, setSelectedClient] = useState("");
    const handleClientChange = (event) => {
        const selectedCode = event.target.value
        setSelectedClient(selectedCode);

        const clientData = clients.find(client => client.companyCode === selectedCode);

        setFormData({
            CompanyCode: clientData.companyCode,
            GstNumber: clientData.gstNumber,
            Name: clientData.name,
            Address: clientData.address,
            City: clientData.city,
            Zip: clientData.zip,
            Phone: clientData.phone,
            Email: clientData.email,
        }); 
    };

    return (
        <div>
            <h3>Edit Client</h3>

            <label>Client</label>
            <select 
                className="drop-down" 
                name="clients" 
                id="clients" 
                onChange={handleClientChange}
                value={selectedClient}
            >
                {clients.length > 0 ? (
                    clients.map((client, index) => (
                        <option key={index} value={client.companyCode}>
                            {client.name}
                        </option>
                    )
                )) : (<option>NO CLIENTS</option>)}
            </select>

            <form>
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
    );
}
// import Axios from "axios";
// import { useEffect, useState } from "react";

export const ClientTable = ({ clients }) => {
    // const [clients, setClients] = useState([]);

    // useEffect(() => {
    //     const retrieveClients = async () => {
    //         try {
    //             const response = await Axios.get("http://localhost:5041/api/client");
    //             setClients(response.data);
    //         } catch(error) {
    //             alert("Error: " + error.message);
    //         }
    //     };

    //     retrieveClients();
    // }, []);

    return (
        <div className="client-list-table">
            <h3>Client List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>GST Number</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length > 0 ? (
                        clients.map((client, index) => (
                            <tr key={index}>
                                <td>{client.name}</td>
                                <td>{client.companyCode}</td>
                                <td>{client.gstNumber}</td>
                                <td>{client.email}</td>
                                <td>{client.phone}</td>
                                <td>{client.address}</td>
                                <td><button key={index}>Action</button></td>
                            </tr>
                        )

                    )) : (<tr><td colSpan="5">NO CLIENTS</td></tr>)}
                </tbody>
            </table>    
        </div>
    );
}
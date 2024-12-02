export const ClientTable = ({ clients }) => {
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
                        <th>Delete</th>
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
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )

                    )) : (<tr><td colSpan="5">NO CLIENTS</td></tr>)}
                </tbody>
            </table>    
        </div>
    );
}
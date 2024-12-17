export const ClientTable = (props) => {
    const handleDelete = async (deleteId) => {
        await props.deleteClient(deleteId);
    }

    return (
        <div className="table-list">
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
                    {props.clients.length > 0 ? (
                        props.clients.map((client, index) => (
                            <tr key={index}>
                                <td>{client.name}</td>
                                <td>{client.companyCode}</td>
                                <td>{client.gstNumber}</td>
                                <td>{client.email}</td>
                                <td>{client.phone}</td>
                                <td>{client.address}</td>
                                <td>
                                    <button onClick={() => handleDelete(client.id)}>Delete</button>
                                </td>
                            </tr>
                        )

                    )) : (<tr><td colSpan="5">LOADING...</td></tr>)}
                </tbody>
            </table>    
        </div>
    );
}
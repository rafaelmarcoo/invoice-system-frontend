export const ClientTable = () => {
    return (
        <div className="client-list-table">
            <h3>Client List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Email</th>
                        <th>Recurring Invoices</th>
                        <th>Total Items</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Will add data from database */}
                </tbody>
            </table>    
        </div>
    );
}
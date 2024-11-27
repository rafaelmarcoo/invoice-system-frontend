export const SentInvoices = () => {
    return (
        <div className="manage-invoices-sent-invoices">
            <h3>Sent Invoices</h3>
            <h1>HELLOOOOOO</h1>
            <table>
                <thead>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Client</th>
                        <th>Date Sent</th>
                        <th>Date Due</th>
                        <th>Total Amount</th>
                        <th>GST</th>
                        <th>Action</th>
                        <th>Mark as Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Will add data from database */}
                </tbody>
            </table>
        </div>
    );
}
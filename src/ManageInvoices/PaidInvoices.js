export const PaidInvoices = () => {
    return (
        <div className="manage-invoices-paid-invoices">
            <h3>Paid Invoices</h3>

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
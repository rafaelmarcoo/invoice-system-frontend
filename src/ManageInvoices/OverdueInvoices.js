export const OverdueInvoices = () => {
    return (
        <div className="manage-invoices-overdue-invoices">
            <h3>Overdue Invoices</h3>

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
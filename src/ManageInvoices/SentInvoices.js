export const SentInvoices = () => {
    return (
        <div className="manage-invoices-sent-invoices">
            <h3>Sent Invoices</h3>

            <table>
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
            </table>
        </div>
    );
}
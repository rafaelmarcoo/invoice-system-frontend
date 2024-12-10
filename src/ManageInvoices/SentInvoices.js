export const SentInvoices = (props) => {
    const sentInv = props.invoices.filter(invoice => invoice.status === "Sent");

    const calculateTotAmt = () => {
        var totAmt = 0;
        sentInv.map((invoice) => {
            invoice.amount != 0 ? totAmt += invoice.amount : totAmt += 0;
        });
        return totAmt;
    };

    const calculateTotGST = () => {
        var GST = 0;
        sentInv.map((invoice) => {
            invoice.gst != 0 ? GST += invoice.gst : GST += 0;
        });
        return GST;
    };

    return (
        <div className="manage-invoices-sent-invoices">
            <h3>Sent Invoices</h3>

            <table>
                <thead>
                    <tr>
                        <th>Client Code</th>
                        <th>Invoice Number</th>
                        <th>Date Sent</th>
                        <th>Date Due</th>
                        <th>Total Amount</th>
                        <th>GST</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sentInv.length > 0 ? (
                        sentInv.map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.name}</td>
                                <td>{invoice.id}</td>
                                <td>{invoice.dateSent}</td>
                                <td>{invoice.dateDue}</td>
                                <td>${invoice.amount}</td>
                                <td>${invoice.gst}</td>
                                <td>
                                    <button onClick={() => props.markAsPaid(invoice.id)}>Mark as Paid</button><br/>
                                    <button>View Invoice</button>
                                </td>
                            </tr>
                        )
                    )) : (<tr><td colSpan="6">NO SENT INVOICES</td></tr>)}
                    <tr>
                        <td colSpan="4"><strong>Total</strong></td>
                        <td><strong>${calculateTotAmt()}</strong></td>
                        <td><strong>${calculateTotGST()}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
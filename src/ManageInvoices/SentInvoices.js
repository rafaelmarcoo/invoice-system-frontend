export const SentInvoices = (props) => {
    const sentInv = props.invoices.filter(invoice => invoice.status === "Sent");

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
                                <td>
                                    <button onClick={() => props.markAsPaid(invoice.id)}>Mark as Paid</button><br/>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    )) : (<tr><td colSpan="6">NO SENT INVOICES</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}
export const PaidInvoices = (props) => {
    const paidInv = props.invoices.filter(invoice => invoice.status === "Paid");

    return (
        <div className="manage-invoices-paid-invoices">
            <h3>Paid Invoices</h3>

            <table>
                <thead>
                    <tr>
                        <th>Client Code</th>
                        <th>Invoice Number</th>
                        <th>Date Sent</th>
                        <th>Date Due</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {paidInv.length > 0 ? (
                        paidInv.map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.name}</td>
                                <td>{invoice.id}</td>
                                <td>{invoice.dateSent}</td>
                                <td>{invoice.dateDue}</td>
                                <td>${invoice.amount}</td>
                            </tr>
                        )
                    )) : (<tr><td colSpan="6">NO PAID INVOICES</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}
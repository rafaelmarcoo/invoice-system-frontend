export const OverdueInvoices = (props) => {
    const currentDate = new Date();


    const overdueInv = props.invoices.filter(invoice => 
        new Date(invoice.dateDue) <= currentDate);

    return (
        <div className="manage-invoices-overdue-invoices">
            <h3>Overdue Invoices</h3>

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
                    {overdueInv.length > 0 ? (
                        overdueInv.map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.name}</td>
                                <td>{invoice.id}</td>
                                <td>{invoice.dateSent}</td>
                                <td>{invoice.dateDue}</td>
                                <td>${invoice.amount}</td>
                                <td>
                                    <button>Mark as Paid</button><br/>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        )
                    )) : (<tr><td colSpan="6">NO SENT INVOICES</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}
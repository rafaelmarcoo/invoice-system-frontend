export const PaidInvoices = (props) => {
    const paidInv = props.invoices.filter(invoice => invoice.status === "Paid");

    const groupedInv = props.invoices
        .filter(invoice => invoice.status === "Paid")
        .reduce((acc, invoice) => {
            if(!acc[invoice.name]) {
                acc[invoice.name] = [];
            }
            acc[invoice.name].push(invoice);
            return acc;
        }, {});

    return (
        <div className="manage-invoices-paid-invoices">
            <h3>Paid Invoices</h3>


            {Object.keys(groupedInv).length > 0 ? (
                Object.keys(groupedInv).map((companyCode) => (
                    <div key={companyCode}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Client Code</th>
                                    <th>Invoice Number</th>
                                    <th>Date Sent</th>
                                    <th>Date Due</th>
                                    <th>Total Amount</th>
                                    <th>GST</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedInv[companyCode].map((invoice) => (
                                    <tr key={invoice.id}>
                                        <td>{invoice.name}</td>
                                        <td>{invoice.id}</td>
                                        <td>{invoice.dateSent}</td>
                                        <td>{invoice.dateDue}</td>
                                        <td>${invoice.amount}</td>
                                        <td>${invoice.gst}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (<tr><td colSpan="6">NO PAID INVOICES</td></tr>)}


            {/* <table>
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
            </table> */}
        </div>
    );
}
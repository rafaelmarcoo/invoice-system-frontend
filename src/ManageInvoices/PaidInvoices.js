export const PaidInvoices = (props) => {
    const groupedInv = props.invoices
        .filter(invoice => invoice.status === "Paid")
        .reduce((acc, invoice) => {
            if(!acc[invoice.name]) {
                acc[invoice.name] = {invoices: [], totAmt: 0, GST: 0};
            }
            acc[invoice.name].invoices.push(invoice);
            acc[invoice.name].totAmt += invoice.amount;
            acc[invoice.name].GST += invoice.gst;
            return acc;
        }, {});

    return (
        <div>
            <h3>Paid Invoices</h3>

            {Object.keys(groupedInv).length > 0 ? (
                Object.keys(groupedInv).map((companyCode) => (
                    <div key={companyCode}>
                        <table className="table-list">
                            <thead>
                                <tr>
                                    <th>Client Code</th>
                                    <th>Invoice Number</th>
                                    <th>Date Sent</th>
                                    <th>Date Due</th>
                                    <th>Payment Date</th>
                                    <th>Total Amount</th>
                                    <th>GST</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedInv[companyCode].invoices.map((invoice) => (
                                    <tr key={invoice.id}>
                                        <td>{invoice.name}</td>
                                        <td>{invoice.id}</td>
                                        <td>{invoice.dateSent}</td>
                                        <td>{invoice.dateDue}</td>
                                        <td>{invoice.datePaid}</td>
                                        <td>${parseFloat(invoice.amount).toFixed(2)}</td>
                                        <td>${parseFloat(invoice.gst).toFixed(2)}</td>
                                        <td>
                                        <button onClick={() => props.handleViewFile(invoice.filePath)}>View Invoice</button>
                                        </td>
                                    </tr>
                                ))}
                                <tr> 
                                    <td colSpan="5"><strong>Total</strong></td> 
                                    <td><strong>${parseFloat(groupedInv[companyCode].totAmt).toFixed(2)}</strong></td> 
                                    <td><strong>${parseFloat(groupedInv[companyCode].GST).toFixed(2)}</strong></td> 
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (
                <table className="table-list">
                    <tbody>
                        <tr>
                            <td colSpan="7">NO PAID INVOICES</td>
                        </tr>
                </tbody>
            </table>)}
        </div>
    );
}
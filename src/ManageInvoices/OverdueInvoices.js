export const OverdueInvoices = (props) => {
    const currentDate = new Date();
    const overdueInv = props.invoices.filter(invoice => 
        new Date(invoice.dateDue) <= currentDate && invoice.status !== "Paid");
    
    const calculateTotAmt = () => {
        var totAmt = 0;
        overdueInv.map((invoice) => {
            invoice.amount !== 0 ? totAmt += invoice.amount : totAmt += 0;
        });
        return totAmt;
    };

    const calculateTotGST = () => {
        var GST = 0;
        overdueInv.map((invoice) => {
            invoice.gst !== 0 ? GST += invoice.gst : GST += 0;
        });
        return GST;
    };

    return (
        <div className="manage-invoices-overdue-invoices">
            <h3>Overdue Invoices</h3>


            {overdueInv.length > 0 ? (
                <table className="table-list">
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
                        {overdueInv.map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.name}</td>
                                <td>{invoice.id}</td>
                                <td>{invoice.dateSent}</td>
                                <td>{invoice.dateDue}</td>
                                <td>${invoice.amount}</td>
                                <td>${invoice.gst}</td>
                                <td>
                                    <button onClick={() => props.markAsPaid(invoice.id)}>Mark as Paid</button><br/>
                                    <button onClick={() => props.handleViewFile(invoice.filePath)}>View Invoice</button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="4"><strong>Total</strong></td>
                            <td><strong>${calculateTotAmt()}</strong></td>
                            <td><strong>${calculateTotGST()}</strong></td>
                        </tr>
                    </tbody>
                </table>
            ): (
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="7">NO OVERDUE INVOICES</td>
                        </tr>
                </tbody>
            </table>)}

            {/* <table>
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
                    {overdueInv.length > 0 ? (
                        overdueInv.map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.name}</td>
                                <td>{invoice.id}</td>
                                <td>{invoice.dateSent}</td>
                                <td>{invoice.dateDue}</td>
                                <td>${invoice.amount}</td>
                                <td>${invoice.gst}</td>
                                <td>
                                    <button onClick={() => props.markAsPaid(invoice.id)}>Mark as Paid</button><br/>
                                    <button onClick={() => props.handleViewFile(invoice.filePath)}>View Invoice</button>
                                </td>
                            </tr>
                        )
                    )) : (<tr><td colSpan="6">NO OVERDUE INVOICES</td></tr>)}
                    {overdueInv.length > 0 && (
                        <tr>
                            <td colSpan="4"><strong>Total</strong></td>
                            <td><strong>${calculateTotAmt()}</strong></td>
                            <td><strong>${calculateTotGST()}</strong></td>
                        </tr>
                    )}
                </tbody>
            </table> */}
        </div>
    );
}
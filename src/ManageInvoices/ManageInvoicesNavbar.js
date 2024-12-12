export const ManageInvoicesNavbar = (props) => {
    return (
        <div className="secondary-navbar">
            <button onClick={() => props.toggleTable("sent")}>Sent Invoices</button>
            <button onClick={() => props.toggleTable("paid")}>Paid Invoices</button>
            <button onClick={() => props.toggleTable("overdue")}>Overdue Invoices</button>
        </div>
    )
};
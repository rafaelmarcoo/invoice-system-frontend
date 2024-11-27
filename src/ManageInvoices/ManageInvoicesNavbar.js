export const ManageInvoicesNavbar = (props) => {
    return (
        <div className="secondary-navbar">
            <button onClick={() => props.toggleTable("sent")}>Sent Invoices</button>
            <button onClick={() => props.toggleTable("paid")}>Paid Invoices</button>
            <button onClick={() => props.toggleTable("overdue")}>Overdue Invoices</button>
            {/*Either separate pages orrrr separate components using states*/}
            {/*I used states its easier*/}
        </div>
    )
};
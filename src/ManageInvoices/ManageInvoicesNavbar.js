import { Link } from "react-router-dom";

export const ManageInvoicesNavbar = () => {
    return (
        <div className="manage-invoices-navbar">
            <Link>Sent Invoices</Link>
            <Link>Paid Invoices</Link>
            <Link>Overdue Invoices</Link>
            {/*Either separate pages orrrr separate components using states*/}
        </div>
    )
};
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/editcompany">Edit Company</Link>
            <Link to="/clientlist">Client List</Link>
            <Link to="/manageinvoices">Manage Invoice</Link>
            <Link to="/gstexpenses">GST Expenses</Link>
            <Link to="/assets">Assets</Link>
            <Link to="/taxsummary">Tax Summary</Link>
        </div>
    );
};
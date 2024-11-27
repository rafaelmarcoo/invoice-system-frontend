import { React, useState } from "react";
import { ManageInvoicesNavbar } from "./ManageInvoicesNavbar";

export const ManageInvoicesPage = () => {
    const [activeTable, setActiveTable] = useState("sent");

    return  (
        <div className="manage-invoices-page">
            <h1>THIS IS ManageInvoicesPage</h1>

            <ManageInvoicesNavbar />
        </div>
    );
}
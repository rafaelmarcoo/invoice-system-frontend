import { React, useState } from "react";
import { ManageInvoicesNavbar } from "./ManageInvoicesNavbar";
import { SentInvoices } from "./SentInvoices";
import { PaidInvoices } from "./PaidInvoices";
import { OverdueInvoices } from "./OverdueInvoices";

export const ManageInvoicesPage = () => {
    const [activeTable, setActiveTable] = useState("sent");

    const toggleTable = (text) => {
        setActiveTable(text);
    };

    return  (
        <div className="manage-invoices-page">
            <h1>THIS IS ManageInvoicesPage</h1>
            <ManageInvoicesNavbar toggleTable={toggleTable}/>

            {activeTable === "sent" && <SentInvoices />}
            {activeTable === "paid" && <PaidInvoices />}
            {activeTable === "overdue" && <OverdueInvoices />}
        </div>
    );
}
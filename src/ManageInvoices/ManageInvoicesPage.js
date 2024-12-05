import { React, useState, useEffect } from "react";
import { ManageInvoicesNavbar } from "./ManageInvoicesNavbar";
import { SentInvoices } from "./SentInvoices";
import { PaidInvoices } from "./PaidInvoices";
import { OverdueInvoices } from "./OverdueInvoices";
import Axios from "axios";

export const ManageInvoicesPage = () => {
    const [activeTable, setActiveTable] = useState("sent");
    const toggleTable = (text) => {
        setActiveTable(text);
    };

    const [invoices, setInvoices] = useState([]);
    const retrieveInvoices = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/invoice");
            setInvoices(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    useEffect(() => {
        retrieveInvoices();
    }, []);

    return  (
        <div className="manage-invoices-page">
            <h1>THIS IS ManageInvoicesPage</h1>
            <ManageInvoicesNavbar toggleTable={toggleTable}/>

            {activeTable === "sent" && <SentInvoices invoices={invoices} />}
            {activeTable === "paid" && <PaidInvoices />}
            {activeTable === "overdue" && <OverdueInvoices />}
        </div>
    );
}
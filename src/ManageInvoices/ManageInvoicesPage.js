import { React, useState, useEffect } from "react";
import { ManageInvoicesNavbar } from "./ManageInvoicesNavbar";
import { SentInvoices } from "./SentInvoices";
import { PaidInvoices } from "./PaidInvoices";
import { OverdueInvoices } from "./OverdueInvoices";
import { InvoiceForm } from "./InvoiceForm";
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

    const markAsPaid = async (editId) => {
        try {
            const response = await Axios.put(`http://localhost:5041/api/invoice/${editId}`)
            retrieveInvoices();

            if(response.status === 200) {
                alert("Invoice marked as paid!");
                retrieveInvoices();
            } else {
                alert("Failed to update invoice status!");
            }
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    const getClientInfo = async (companyCode) => {
        try {
            const response = await Axios.get(`http://localhost:5041/api/client/${companyCode}`)
            return response.data;
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    const getCompanyInfo = async () => {
        try {
            const response = await Axios.get(`http://localhost:5041/api/company/1`)
            return response.data;
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    const getInvoiceInfo = async (invoiceId) => {
        try {
            const response = await Axios.get(`http://localhost:5041/api/invoice/${invoiceId}`);
            return response.data;
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    return  (
        <div className="manage-invoices-page">
            <h1>THIS IS ManageInvoicesPage</h1>

            <InvoiceForm retrieveInvoices={retrieveInvoices} getClientInfo={getClientInfo} getCompanyInfo={getCompanyInfo} getInvoiceInfo={getInvoiceInfo}/>

            <br/><br/>
            <ManageInvoicesNavbar toggleTable={toggleTable}/>

            {activeTable === "sent" && <SentInvoices invoices={invoices} markAsPaid={markAsPaid}/>}
            {activeTable === "paid" && <PaidInvoices invoices={invoices}/>}
            {activeTable === "overdue" && <OverdueInvoices invoices={invoices} markAsPaid={markAsPaid}/>}
        </div>
    );
}
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
            const response = await Axios.put(`http://localhost:5041/api/invoice/${editId}`);

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

    const handleViewFile = async (fileName) => {
        try {
            const url = `http://localhost:5041/api/invoice/view/${fileName}`;
            window.open(url, '_blank');
        } catch(error) {
            alert("Error: " + error);
        }
    }

    const getClientInfo = async (companyCode) => {
        try {
            const response = await Axios.get(`http://localhost:5041/api/client/${companyCode}`);
            return response.data;
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    const getCompanyInfo = async () => {
        try {
            const response = await Axios.get(`http://localhost:5041/api/company/1`);
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

    const sendEmail = async (emailRequest, file) => {
        const formData = new FormData();
        formData.append("To", emailRequest.To);
        formData.append("Subject", emailRequest.Subject);
        formData.append("Body", emailRequest.Body);
        formData.append("File", file.get('pdf'));
        formData.append("FileName", file.get('pdf').name);

        try {
            const response = await Axios.post(`http://localhost:5041/api/email/send-email`, formData);

            if(response.status === 200) {
                alert("Email sent with invoice!");
            } else {
                alert("Failed to send email with invoice!");
            }
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    return  (
        <div>
            <InvoiceForm 
                retrieveInvoices={retrieveInvoices} 
                getClientInfo={getClientInfo} 
                getCompanyInfo={getCompanyInfo} 
                getInvoiceInfo={getInvoiceInfo} 
                handleViewFile={handleViewFile}
                sendEmail={sendEmail}
            />
            <br/><br/>
            <ManageInvoicesNavbar toggleTable={toggleTable}/>
            {activeTable === "sent" && <SentInvoices 
                                            invoices={invoices} 
                                            markAsPaid={markAsPaid} 
                                            handleViewFile={handleViewFile}
                                        />}
            {activeTable === "paid" && <PaidInvoices 
                                            invoices={invoices} 
                                            handleViewFile={handleViewFile}
                                        />}
            {activeTable === "overdue" && <OverdueInvoices 
                                            invoices={invoices} 
                                            markAsPaid={markAsPaid} 
                                            handleViewFile={handleViewFile}
                                        />}
        </div>
    );
}
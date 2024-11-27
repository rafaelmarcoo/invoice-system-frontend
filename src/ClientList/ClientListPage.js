import { useState } from "react";
import { ClientForm } from "./ClientForm";
import { InvoiceForm } from "./InvoiceForm";

export const ClientListPage = () => {
    const [clientForm, showClientForm] = useState(false);
    const [invoiceForm, showInvoiceForm] = useState(false);

    const toggleClientForm = () => {
        showClientForm(!clientForm);
    }

    const toggleInvoiceForm = () => {
        showInvoiceForm(!invoiceForm);
    }

    return  (
        <div className="client-list">
            <h1>THIS IS CLIENT LIST PAGE</h1>

            <button onClick={toggleClientForm}>Add Client</button>
            <button onClick={toggleInvoiceForm}>Make Invoice</button>

            {clientForm && <ClientForm />}
            {invoiceForm && <InvoiceForm />}
        </div>
    );
}
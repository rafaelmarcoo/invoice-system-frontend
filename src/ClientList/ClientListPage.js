import { useState } from "react";
import { ClientForm } from "./ClientForm";
import { InvoiceForm } from "./InvoiceForm";
import { ClientTable } from "./ClientTable";
import { ClientNavbar } from "./ClientNavbar";

export const ClientListPage = () => {
    const [active, setActive] = useState("client-form");

    const toggle = (text) => {
        setActive(text);
    }

    return  (
        <div className="client-list">
            <h1>THIS IS CLIENT LIST PAGE</h1>

            <ClientTable />
            <br/><br/>

            <ClientNavbar toggle={toggle}/>

            {active === "client-form" && <ClientForm />}
            {active === "client-invoice" && <InvoiceForm />}
        </div>
    );
}
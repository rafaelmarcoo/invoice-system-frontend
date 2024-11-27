import { useState } from "react";
import { ClientForm } from "./ClientForm";

export const ClientListPage = () => {
    const [clientForm, showClientForm] = useState(false);

    const toggleClientForm = () => {
        showClientForm(!clientForm);
    }

    return  (
        <div className="client-list">
            <h1>THIS IS CLIENT LIST PAGE</h1>

            <button onClick={toggleClientForm}>Add Client</button>
            {clientForm && <ClientForm />}
        </div>
    );
}
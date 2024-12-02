import { useEffect, useState } from "react";
import Axios from "axios";
import { ClientForm } from "./ClientForm";
import { InvoiceForm } from "./InvoiceForm";
import { ClientTable } from "./ClientTable";
import { ClientNavbar } from "./ClientNavbar";

export const ClientListPage = () => {
    
    const [active, setActive] = useState("client-form");
    const toggle = (text) => {
        setActive(text);
    }

    const [clients, setClients] = useState([]);
    const retrieveClients = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/client");
            setClients(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    useEffect(() => {
        retrieveClients();
    }, []);

    const addClient = async (newClient) => {
        try {
            const response = await Axios.post("http://localhost:5041/api/client", newClient)

            if(response.status === 200) {
                alert("Client added!");
                retrieveClients();
            } else {
                alert("Failed to add client!");
            }
        } catch(error) {
            alert("Error: " + error.message)
        }
    }

    return  (
        <div className="client-list">
            <ClientTable clients={ clients }/>
            <br/><br/>

            <ClientNavbar toggle={toggle}/>

            {active === "client-form" && <ClientForm addClient={ addClient }/>}
            {active === "client-invoice" && <InvoiceForm clients={ clients }/>}
        </div>
    );
}
import { useEffect, useState } from "react";
import Axios from "axios";
import { ClientForm } from "./ClientForm";
import { ClientTable } from "./ClientTable";
import { ClientNavbar } from "./ClientNavbar";
import { EditClient } from "./EditClient";

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

    const editClient = async (clientData, editId) => {
        try {
            const response = await Axios.put(`http://localhost:5041/api/client/${editId}`, clientData)

            if(response.status === 200) {
                alert("Client details updated!");
                retrieveClients();
            } else {
                alert("Failed to update client details!");
            }
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    const deleteClient = async (clientId) => {
        const isConfirmed = window.confirm("Delete client?");

        if(isConfirmed) {
            try {
                const response = await Axios.delete(`http://localhost:5041/api/client/${clientId}`);
    
                if(response.status === 200) {
                    alert("Client deleted!");
                    retrieveClients();
                } else {
                    alert("Failed to delete client!");
                }
            } catch(error) {
                alert("Error: " + error.Message);
            }
        }
    }

    return  (
        <div className="client-list">
            <ClientTable clients={ clients } deleteClient={deleteClient}/>
            <br/><br/>

            <ClientNavbar toggle={toggle}/>

            {active === "client-form" && <ClientForm addClient={ addClient }/>}
            {/* {active === "client-invoice" && <InvoiceForm clients={ clients }/>} */}
            {active === "client-edit" && <EditClient clients={ clients } editClient={editClient}/>}
        </div>
    );
}
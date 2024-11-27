import { useState } from "react";
import { GSTExpensesNavbar } from "./GSTExpensesNavbar";

export const GSTExpensesPage = () => {
    const [activeTable, setActiveTable] = useState("add");

    const toggleTable = (text) => {
        setActiveTable(text);
    };

    return  (
        <div className="gst-expenses-page">
            <h1>THIS IS GST EXPENSES PAGE</h1>
            <GSTExpensesNavbar toggleTable={toggleTable} />
        </div>
    );
}
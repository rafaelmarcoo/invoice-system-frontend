import { GSTExpenseForm } from "./GSTExpenseForm";
import Axios from "axios";
import { useState, useEffect } from "react";
import { GSTExpensesNavbar } from "./GSTExpensesNavbar";
import { FullyPaidExpenses } from "./FullyPaidExpenses";
import { PartiallyPaidExpenses } from "./PartiallyPaidExpenses";

export const GSTExpensesPage = () => {
    const [activeTable, setActiveTable] = useState("full");
    const toggleTable = (text) => {
        setActiveTable(text);
    };

    const [expenses, setExpenses] = useState([]);
    const retrieveExpenses = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/expense");
            setExpenses(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        };
    };

    useEffect(() => {
        retrieveExpenses();
    }, []);

    const addExpense = async (formData) => {
        const formDataToSend = new FormData();

        formDataToSend.append("File", formData.File);
        formDataToSend.append("Title", formData.Title);
        formDataToSend.append("Description", formData.Description);
        formDataToSend.append("Date", formData.Date);
        formDataToSend.append("Amount", formData.Amount);
        formDataToSend.append("Category", formData.Category);
        formDataToSend.append("GstRate", formData.GstRate);

        try {
            const response = await Axios.post("http://localhost:5041/api/expense", formDataToSend);

            if(response.status === 200) {
                alert("Expense added!");
                retrieveExpenses();
            } else {
                alert("Failed to add expense");
            }
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    const handleViewFile = async (fileName) => {
        try {
            const url = `http://localhost:5041/api/expense/view/${fileName}`;
            window.open(url, '_blank');
        } catch(error) {
            alert("Error: " + error);
        }
    }

    return  (
        <div className="gst-expenses-page">
            <GSTExpenseForm addExpense={addExpense}/>

            <br/><br/>
            
            <GSTExpensesNavbar toggleTable={toggleTable}/>

            {activeTable === "full" && <FullyPaidExpenses expenses={expenses} handleViewFile={handleViewFile}/>}
            {activeTable === "partial" && <PartiallyPaidExpenses expenses={expenses}/>}
            
        </div>
    );
}
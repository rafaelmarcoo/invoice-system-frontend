import { GSTExpenseTable } from "./GSTExpenseTable";
import { GSTExpenseForm } from "./GSTExpenseForm";
import Axios from "axios";
import { useState, useEffect } from "react";

export const GSTExpensesPage = () => {
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

    return  (
        <div className="gst-expenses-page">
            <h1>THIS IS GST PAGE</h1>
            <GSTExpenseTable expenses={expenses}/>
            <GSTExpenseForm addExpense={addExpense}/>
        </div>
    );
}
import { GSTExpenseForm } from "./GSTExpenseForm";
import Axios from "axios";
import { useState, useEffect } from "react";
import { GSTExpensesNavbar } from "./GSTExpensesNavbar";
import { FullyPaidExpenses } from "./FullyPaidExpenses";
import { PartiallyPaidExpenses } from "./PartiallyPaidExpenses";
import { DepreciatingAssets } from "./DepreciatingAssets";
import { AssetForm } from "./AssetForm";

export const GSTExpensesPage = () => {
    const [activeTable, setActiveTable] = useState("full");
    const toggleTable = (text) => {
        setActiveTable(text);
    };

    const [activeForm, setActiveForm] = useState("expense");
    const toggleForm = (text) => {
        setActiveForm(text);
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

    const [assets, setAssets] = useState([]);
    const retrieveAssets = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/asset");
            setAssets(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        };
    };

    useEffect(() => {
        retrieveExpenses();
        retrieveAssets();
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

    const addAsset = async (formData) => {
        try {
            const response = await Axios.post("http://localhost:5041/api/asset", formData)

            if(response.status === 200) {
                alert("Asset added!");
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

            <h2>Expense or Asset Form:</h2>
            <select
                onChange={(event) => toggleForm(event.target.value)}
            >
                <option value="expense">Expense</option>
                <option value="asset">Asset</option>
            </select>

            {activeForm === "expense" && <GSTExpenseForm addExpense={addExpense}/>}
            {activeForm === "asset" && <AssetForm addAsset={addAsset}/>}

            <br/><br/>
            <GSTExpensesNavbar toggleTable={toggleTable}/>

            {activeTable === "full" && <FullyPaidExpenses expenses={expenses} handleViewFile={handleViewFile}/>}
            {activeTable === "partial" && <PartiallyPaidExpenses expenses={expenses}/>}
            {activeTable === "assets" && <DepreciatingAssets assets={assets}/>}
            
        </div>
    );
}
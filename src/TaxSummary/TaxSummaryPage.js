import { useEffect, useState } from "react";
import Axios from 'axios';
import { DataSheet } from "./DataSheet";

export const TaxSummaryPage = () => {
    const [invoices, setInvoices] = useState([]);
    const retrieveInvoices = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/invoice");
            setInvoices(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        }
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
        retrieveInvoices();
        retrieveExpenses();
    }, []);

    const [finalAmts, setFinalAmts] = useState({
        TotalSales: "",
        TotalGst: "",
        GrandTotal: "",
        TotalExpenses: "",
    });
    const calculateFinalAmts = (invoices) => {
        var grandTot = 0;
        var totGst = 0;
        var totExp = 0;

        invoices.map((invoice) => {
            grandTot += invoice.amount;
            totGst += invoice.gst;
        });

        expenses.map((expense) => {
            totExp += expense.amount;
        });
    
        setFinalAmts({
            TotalSales: parseFloat(parseFloat(grandTot - totGst).toFixed(2)),
            TotalGst: parseFloat(parseFloat(totGst).toFixed(2)),
            GrandTotal: parseFloat(parseFloat(grandTot).toFixed(2)),
            TotalExpenses: parseFloat(parseFloat(totExp).toFixed(2)),
        });
    };

    useEffect(() => {
        if (invoices && invoices.length > 0) {
            calculateFinalAmts(invoices);
        }
    }, [invoices]);

    return  (
        <div>
            <h3>Income and Tax Summary</h3>
            <br/>
            <DataSheet finalAmts={finalAmts} expenses={expenses}/>
        </div>
    );
}
import { useEffect, useState } from "react";
import Axios from 'axios';

export const TaxSummaryPage = () => {
    const [activeTable, setActiveTable] = useState("balance-sheet");
    const toggleTable = (text) => {
        setActiveTable(text);
    };

    const [invoices, setInvoices] = useState([]);
    const retrieveInvoices = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/invoice");
            setInvoices(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        }
    };

    useEffect(() => {
        retrieveInvoices();
    }, []);

    const [finalAmts, setFinalAmts] = useState({
        TotalSales: "",
        TotalGst: "",
        GrandTotal: "",
    });
    const calculateFinalAmts = (invoices) => {
        var grandTot = 0;
        var totGst = 0;

        invoices.forEach((invoice) => {
            grandTot += invoice.amount;
            totGst += invoice.gst;
        });
    
        setFinalAmts({
            TotalSales: parseFloat(parseFloat(grandTot - totGst).toFixed(2)),
            TotalGst: parseFloat(parseFloat(totGst).toFixed(2)),
            GrandTotal: parseFloat(parseFloat(grandTot).toFixed(2)),
        });
    };

    useEffect(() => {
        if (invoices && invoices.length > 0) {
            calculateFinalAmts(invoices);
        }
    }, [invoices]);

    return  (
        <div>
            {/* <button onClick={() => calculateFinalAmts(invoices)}>try</button> */}
            <p>{finalAmts.TotalSales}</p>
            <p>{finalAmts.TotalGst}</p>
            <p>{finalAmts.GrandTotal}</p>
        </div>
    );
}
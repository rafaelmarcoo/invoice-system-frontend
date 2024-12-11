// import Axios from "axios";

export const GSTExpenseTable = (props) => {

    const handleViewFile = async (fileName) => {
        try {
            const url = `http://localhost:5041/api/expense/view/${fileName}`;
            window.open(url, '_blank');
        } catch(error) {
            alert("Error: " + error);
        }
    }

    return (
        <div className="gst-expense-table">
            <h3>All Expenses</h3>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Cost</th>
                        <th>Files</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.expenses.length > 0 ? (
                        props.expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>{expense.description}</td>
                            <td>{expense.date}</td>
                            <td>${expense.amount}</td>
                            <td>{expense.filePath}</td>
                            <td>
                                {expense.filePath === "NO FILES UPLOADED" ? <p>...</p> : (
                                    <button onClick={() => handleViewFile(expense.filePath)}>View</button>
                                )}
                            </td>
                                
                        </tr>
                    )
                )) : (<tr><td colSpan="6">LOADING...</td></tr>)}
                </tbody>
            </table>
        </div>
    );
};
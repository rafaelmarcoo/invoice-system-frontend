export const PartiallyPaidExpenses = (props) => {
    const partialExpenses = props.expenses.filter(expense => expense.category === "partiallypaid")

    return (
        <div className="gst-expense-table">
            <h3>Partially Paid Expenses</h3>
            {partialExpenses.length > 0 ? (
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Cost</th>
                            <th>GST Rate</th>
                            <th>Files</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partialExpenses.map((expense) => (
                            <tr key={expense.id}>
                                <td>{expense.title}</td>
                                <td>{expense.description}</td>
                                <td>{expense.date}</td>
                                <td>${expense.amount}</td>
                                <td>{expense.gstRate}</td>
                                <td>{expense.filePath}</td>
                                <td>
                                    {expense.filePath === "NO FILES UPLOADED" ? <p>...</p> : (
                                        <button onClick={() => props.handleViewFile(expense.filePath)}>View</button>
                                    )}
                                </td>      
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <table className="table-list">
                    <tbody>
                        <tr>
                            <td colSpan="7">NO EXPENSES</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};
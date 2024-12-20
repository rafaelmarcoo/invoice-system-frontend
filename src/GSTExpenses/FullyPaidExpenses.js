export const FullyPaidExpenses = (props) => {
    const fullExpenses = props.expenses.filter(expense => expense.category === "fullypaid")

    return (
        <div className="table-list">
            <h3>Fully Paid Expenses</h3>
                {fullExpenses.length > 0 ? (
                    <table>
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
                            {fullExpenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td>{expense.title}</td>
                                    <td>{expense.description}</td>
                                    <td>{expense.date}</td>
                                    <td>${parseFloat(expense.amount).toFixed(2)}</td>
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
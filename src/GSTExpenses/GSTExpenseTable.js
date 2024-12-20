export const GSTExpenseTable = (props) => {

    return (
        <div className="table-list">
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
                                    <button onClick={() => props.handleViewFile(expense.filePath)}>View</button>
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
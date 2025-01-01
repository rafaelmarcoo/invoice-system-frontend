export const DataSheet = (props) => {
    const gstEligExp = props.expenses.filter(expense => expense.gstRate !== 0);

    return (
        <div>
            <div className="data-sheet">
                <div className="table-list">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">---- Income Statement ----</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Net Sales excl. GST</td>
                                <td>${parseFloat(props.finalAmts.TotalSales).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colspan="2">Minus: Expenses</td>
                            </tr>
                            {props.expenses.map((expense) => (
                                <tr>
                                    <td>{expense.title}</td>
                                    <td>${parseFloat(expense.amount).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Net Profit</td>
                                <td>${props.finalAmts.TotalSales - props.finalAmts.TotalExpenses}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-list">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">GST Calculation</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
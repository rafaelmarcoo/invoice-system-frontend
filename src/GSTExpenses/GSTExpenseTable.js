export const GSTExpenseTable = () => {
    return (
        <div className="gst-expense-table">
            <h3>All Expenses</h3>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date Sent</th>
                        <th>Cost</th>
                        <th>Files</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Will add data from database */}
                </tbody>
            </table>
        </div>
    );
};
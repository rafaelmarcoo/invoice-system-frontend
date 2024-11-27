export const GSTExpensesNavbar = (props) => {
    return (
        <div className="secondary-navbar">
            <button onClick={() => props.toggleTable("add")}>Add GST Expense</button>
            <button onClick={() => props.toggleTable("view")}>All GST Expenses</button>
        </div>
    );
};
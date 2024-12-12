export const GSTExpensesNavbar = (props) => {
    return (
        <div className="secondary-navbar">
            <button onClick={() => props.toggleTable("full")}>Fully Paid Expenses</button>
            <button onClick={() => props.toggleTable("partial")}>Partially Paid Expenses</button>
            <button onClick={() => props.toggleTable("assets")}>Depreciating Assets</button>
        </div>  
    );
}
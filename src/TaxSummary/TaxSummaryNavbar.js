export const TaxSummaryNavbar = (props) => {
    return (
        <div className="secondary-navbar">
            <button onClick={() => props.setActiveTable("incomeStmt")}>Income Statement</button>
            <button onClick={() => props.setActiveTable("balance")}>Balance Sheet</button>
        </div>
    );
};
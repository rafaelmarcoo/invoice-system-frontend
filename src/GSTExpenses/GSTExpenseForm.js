export const GSTExpenseForm = () => {
    return (
        <div className="gst-expenses-addGST">
            <form>
                <label>Expense Title (Required)</label>
                <input type="text" placeholder="Title..." required />

                <label>Brief Description (Optional)</label>
                <input type="text" placeholder="Provide a brief description of the expense..." />

                <label>Supporting Documents (Optional)</label>
                <input />

                <label>Date of Expense (Required)</label>
                <input type="date" required />

                <label>Cost of Expense (Required)</label>
                <input type="number" required />

                <br/><br/>
                <button>Submit Expense</button>
            </form>
        </div>
    );
};
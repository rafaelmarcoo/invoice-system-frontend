export const ClientForm = () => {
    return (
        <div className="client-list-clientform">
            <h3>ClientForm</h3>

            <form>
                <label>Name</label>
                <input type="text" placeholder="Company Name..."/>

                <label>Address</label>
                <input type="text" placeholder="Company Address..."/>

                <label>City</label>
                <input type="text" placeholder="Company City"/>

                <label>ZIP</label>
                <input type="text" placeholder="Company Zip"/>

                <label>Phone</label>
                <input type="number" placeholder="Phone..."/>

                <label>Email</label>
                <input type="text" placeholder="Email..."/>

                <label>Invoice Code</label>
                <input type="text" placeholder="Invoice Code..."/>

                <br/><br/>
                <button>Add Client</button>
            </form>
        </div>
    )
}
export const ClientForm = () => {
    return (
        <div className="client-list-clientform">
            <h3>ClientForm</h3>

            <form>
                <label>Name</label>
                <input type="text" placeholder="Company Name..." required/>

                <label>Address</label>
                <input type="text" placeholder="Company Address..." required/>

                <label>City</label>
                <input type="text" placeholder="Company City..." required/>

                <label>ZIP</label>
                <input type="text" id="company-zip" name="companyZip" placeholder="Company Zip" required/>

                <label>Phone</label>
                <input type="tel" placeholder="Phone..." required/>

                <label>Email</label>
                <input type="email" placeholder="Email..." required/>

                <label>Invoice Code</label>
                <input type="text" placeholder="Invoice Code..." required/>

                <br/><br/>
                <button>Add Client</button>
            </form>
        </div>
    )
}
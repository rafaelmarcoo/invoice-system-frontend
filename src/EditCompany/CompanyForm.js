export const CompanyForm = () => {
    return (
        <div className="edit-company-form">
            <form>
                <label>Company Name</label>
                <input type="text" placeholder="Company Name..."/>

                <label>GST Number</label>
                <input type="text" placeholder="Email..."/>

                <label>Company Address</label>
                <input type="text" placeholder="Company Address..."/>

                <label>Company City</label>
                <input type="text" placeholder="Company City"/>

                <label>Company ZIP</label>
                <input type="text" placeholder="Company Zip"/>

                <label>Company Phone</label>
                <input type="number" placeholder="Phone..."/>

                <label>Company Email</label>
                <input type="text" placeholder="Email..."/>

                <br/><br/>
                <button>Save Changes</button>
            </form>
        </div>
    );
};
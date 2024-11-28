export const CompanyForm = () => {
    return (
        <div className="form-container">
            <form>
                <label>Company Name</label>
                <input type="text" placeholder="Company Name..." required/>

                <label>GST Number</label>
                <input type="text" placeholder="Email..." required/>

                <label>Company Address</label>
                <input type="text" placeholder="Company Address..." required/>

                <label>Company City</label>
                <input type="text" placeholder="Company City" required/>

                <label>Company ZIP</label>
                <input type="text" id="company-zip" name="companyZip" placeholder="Company Zip" required/>

                <label>Company Phone</label>
                <input type="tel" placeholder="Phone..." required/>

                <label>Company Email</label>
                <input type="email" placeholder="Email..." required/>

                <br/><br/>
                <button>Save Changes</button>
            </form>
        </div>
    );
};
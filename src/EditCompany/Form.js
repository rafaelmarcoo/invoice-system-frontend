export const Form = () => {
    return (
        <div className="edit-company-form">
            <form>
                <p>Company Name</p>
                <input type="text" placeholder="Company Name..."/>

                <p>GST Number</p>
                <input type="text" placeholder="Email..."/>

                <p>Company Address</p>
                <input type="text" placeholder="Company Address..."/>

                <p>Company City</p>
                <input type="text" placeholder="Company City"/>

                <p>Company ZIP</p>
                <input type="text" placeholder="Company Zip"/>

                <p>Company Phone</p>
                <input type="number" placeholder="Phone..."/>

                <p>Company Email</p>
                <input type="text" placeholder="Email..."/>

                <br/><br/>
                <button>Save Changes</button>
            </form>
        </div>
    );
};
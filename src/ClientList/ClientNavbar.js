export const ClientNavbar = (props) => {
    return (
        <div className="secondary-navbar">
            <button onClick={() => props.toggle("client-form")}>Add Client</button>
            <button onClick={() => props.toggle("client-invoice")}>Make Invoice</button>
        </div>
    );
}
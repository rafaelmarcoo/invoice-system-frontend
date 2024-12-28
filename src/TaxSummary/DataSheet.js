export const DataSheet = () => {
    return (
        <div className="data-sheet">
            <div>
                <h3>Income Statement</h3>
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>-------------------------------------</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Revenue</td>
                            <td>$20000</td>
                        </tr>
                        <tr>
                            <td>Services</td>
                            <td>$20000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>Balance Sheet</h3>
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>-------------------------------------</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
            </div>
        </div>
    );
};
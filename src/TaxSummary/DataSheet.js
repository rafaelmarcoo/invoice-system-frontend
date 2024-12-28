export const DataSheet = () => {
    return (
        <div>
            <div className="data-sheet">
                <div className="table-list">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">---- Income Statement ----</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Revenue</td>
                                <td>$20000</td>
                            </tr>
                            <tr>
                                <td>Minus: Expenses</td>
                                <td>$20000</td>
                            </tr>
                            <tr>
                                <td>Net Profit</td>
                                <td>$0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-list">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">Balance Sheet</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
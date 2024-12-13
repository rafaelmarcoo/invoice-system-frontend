import Axios from 'axios';
import { useEffect, useState } from 'react';

export const DepreciatingAssets = (props) => {
    const [depreciation, setDepreciation] = useState([]);

    const retrieveDep = async (id) => {
        try {
            const response = await Axios.get(`http://localhost:5041/api/asset/${id}`);
            setDepreciation(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        }
    }
    return (
        <div className="gst-expense-table">
            {props.assets.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th colSpan="5">name of asset  + details from database</th>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <th>Original Value</th>
                            <th>Depreciation Rate</th>
                            <th>Depreciation Claimed</th>
                            <th>Adjusted Tax Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.assets.map((asset) => retrieveDep(asset.id) (
                            <tr key={asset.id}>
                                <td>depreciation.year</td>
                                <td>depreciation.originalValue</td>
                                <td>depreciation.depreciationRate</td>
                                <td>depreciation.depreciationClaimed</td>
                                <td>depreciation.adjustedTaxValue</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<table></table>)}
        </div>
    );
}
import Axios from 'axios';
import { useEffect, useState } from 'react';

export const DepreciatingAssets = (props) => {
    const [depreciation, setDepreciation] = useState([]);

    const retrieveDepreciations = async () => {
        try {
            const results = await Promise.all(
                props.assets.map(async (asset) => {
                    const response = await Axios.get(`http://localhost:5041/api/asset/${asset.id}`);
                    return { 
                        id: asset.id, 
                        name: asset.name, 
                        date: asset.datePurchased, 
                        method: asset.depreciationType, 
                        data: response.data };
                })
            );
            setDepreciation(results);
        } catch(error) {
            alert("Error: " + error.message);
        }
    };

    useEffect(() => {
        if(props.assets.length > 0) {
            retrieveDepreciations();
        };
    }, [props.assets]);

    return (
        <div className="gst-expense-table">
            {depreciation.length > 0 ? (
                depreciation.map((asset) => (
                    <div className="asset-table" key={asset.id}>
                        <h3>Name: {asset.name} | Date Purchased: {asset.date} | Depreciation Type: {asset.method}</h3>
                        <table className="table-list">
                            <thead>
                                {/* <tr colSpan="5">
                                    <th>Name: {asset.name} Date Purchased: {asset.date} Depreciation Type: {asset.method}</th>
                                </tr> */}
                                <tr>
                                    <th>Useful Life (in years)</th>
                                    <th>Original Cost</th>
                                    <th>Depreciation Rate</th>
                                    <th>Depreciation Claimed</th>
                                    <th>Adjusted Tax Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {asset.data.map((data) => (
                                    <tr key={data.year}>
                                        <td>Year {data.year}</td>
                                        <td>${data.originalValue}</td>
                                        <td>{data.depreciationRate}</td>
                                        <td>${data.depreciationClaimed}</td>
                                        <td>${data.adjustedTaxValue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="5">NO ASSETS</td>
                        </tr>
                </tbody>
            </table>
            )}
        </div>
    );
}
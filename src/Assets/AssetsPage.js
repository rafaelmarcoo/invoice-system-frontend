import { AssetForm } from "./AssetForm";
import { DepreciatingAssets } from "./DepreciatingAssets";
import Axios from 'axios';
import { useState, useEffect } from "react";

export const AssetsPage = () => {
    const [assets, setAssets] = useState([]);
    const retrieveAssets = async () => {
        try {
            const response = await Axios.get("http://localhost:5041/api/asset");
            setAssets(response.data);
        } catch(error) {
            alert("Error: " + error.message);
        };
    };

    useEffect(() => {
        retrieveAssets();
    }, []);

    const addAsset = async (formData) => {
        try {
            const response = await Axios.post("http://localhost:5041/api/asset", formData)

            if(response.status === 200) {
                alert("Asset added!");
                retrieveAssets();
            } else {
                alert("Failed to add expense");
            }
        } catch(error) {
            alert("Error: " + error.message);
        }
    };

    return(
        <div>
            <AssetForm addAsset={addAsset}/>
            <br/><br/>
            <DepreciatingAssets assets={assets}/>
        </div>
    );
}
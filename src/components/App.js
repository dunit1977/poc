import React, { useState, useEffect} from 'react';
import TransactionSelect from "./TransactionSelect";



export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            PA Cookbook
            <br/>
            <br/>
            Select Appropriate URL to initiate a transaction for the Cookbook:
            <br/>
            <br/>
            <TransactionSelect/>
            <br/>
            <br/>
        </div>

    );

}

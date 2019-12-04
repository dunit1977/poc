import React, { useState, useEffect} from 'react';
import TransactionSelect from "./TransactionSelect";
import Clock from "./Clock";
import Submit from "./Submit";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div style={{backgroundColor: "#ffd000"}}>
            <br/>
            <h1 style={{color: "#1a1446"}}>PA Cookbook</h1>
            <br/>
            <br/>
            <p style={{color:"#1a1446"}}>Select Appropriate URL to initiate a transaction for the Cookbook:</p>
            <br/>
            <br/>
            <TransactionSelect/>
            <br/>
            <br/>
            <Submit/>
            <br/>
            <br/>
            <Clock/>
            <br/>
            <footer style={{color: "#1a1446"}}>Copyright© WolfPAck 2019  OWWWW!</footer>
            </div>
        </div>

    );
}

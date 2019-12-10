import React, { useState, useEffect, Component} from 'react';
import TransactionSelect from "./TransactionSelect";
import Clock from "./Clock";
import Submit from "./Submit";
import GetCookbook from "./GetCookbook";

export default function App(initialState) {
    const [] = useState(undefined);
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
            <GetCookbook/>
            <br/>
            <Clock/>
            <br/>
            <footer style={{color: "#1a1446"}}>Copyright© WolfPAck 2019  OWWWW!</footer>
            </div>
        </div>

    );
}

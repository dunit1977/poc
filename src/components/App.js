import React, { useState, useEffect} from 'react';


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
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
    
}

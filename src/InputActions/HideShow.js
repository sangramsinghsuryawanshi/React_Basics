import React from "react";
export function Toggle()
{
    const [status,setStatus]=React.useState(true);
    return(
        <div>
            {status?<h1>Hello</h1>:null}
            <button onClick={()=>setStatus(false)}>Hide</button>&nbsp;
            <button onClick={()=>setStatus(true)}>Show</button>&nbsp;
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    );
}
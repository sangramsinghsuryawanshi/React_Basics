import { useState } from "react";
function UseStateFunComponent()
{
    const [data,setData]=useState("Sangram");
    function UseStateDemo()
    {
        setData("Suryawanshi");
        alert(data);
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={UseStateDemo}>Update data</button>
        </div>
    );
}
export default UseStateFunComponent
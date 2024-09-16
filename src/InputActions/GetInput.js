import React,{useState} from "react";
function GetInput()
{
    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    const t= (val)=>{
        setData(val.target.value);
    }
    return(
        <div>
            <h2>{data}</h2>
            <input type="text" onChange={t}></input>
            {print?
            <h2>{data}</h2>
            :null
            }
            <button type="text" onClick={()=>setPrint(true)}>Print</button>
        </div>
    );
}
export default GetInput;
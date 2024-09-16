import { useState,useEffect } from "react";
export default function UseEffectComponent()
{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },1000);
    });
    return(
        <div>
            <h3 color="red">useEffect rendering count</h3>
        </div>
    )
}
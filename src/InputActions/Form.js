import React from "react";
function Form()
{
    const [name,setName]=React.useState("");
    const [sel,setSel]=React.useState("");
    const [TNC,setTNC]=React.useState(false);
    function GetFormData(e)
    {
        alert(`Name: ${name}, Selected: ${sel}, Terms Accepted: ${TNC}`);
            e.preventDefault(); 
    }
    return(
        <div>
            <form onSubmit={GetFormData}>
                <label>Name:</label>&nbsp;&nbsp;
                <input type="text" onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
                <select onChange={(e)=>setSel(e.target.value)}>
                    <option>Select</option>
                    <option>Marval</option>
                    <option>Dc</option>
                </select><br></br><br></br>
                <input type="checkbox" onChange={(e)=>setTNC(e.target.checked)} /><span>Terms and conditon</span><br></br><br></br>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
export default Form;
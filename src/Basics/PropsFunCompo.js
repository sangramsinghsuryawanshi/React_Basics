function PropsFunCompo(Props)
{
    return(
        <div style={{backgroundColor:"crimson",margin:10}}>
            <h1>Welcome, {Props.Name}</h1>
            <h2>Email: {Props.Email}</h2>
            <h3>City: {Props.other.Address}</h3>
            <h3>mobile: {Props.other.mobile}</h3>
        </div>
    );
}
export default PropsFunCompo;
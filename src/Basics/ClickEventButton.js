function ClickEventButton()
{
    function ClickEvent()
    {
        alert("hello");
    }
    return(
        <div>
            <button onClick={ClickEvent}>Click Event using Function onClick=ClickEvent</button><br></br><br></br>
            <button onClick={()=>alert("Lambda expression")}>Click Event using onClick=()=alert("Lambda expression")</button><br></br><br></br>
            <button onClick={()=>ClickEvent()}>Click Event using  onClick=()=ClickEvent()</button><br></br><br></br>
        </div>
    );
}
export default ClickEventButton
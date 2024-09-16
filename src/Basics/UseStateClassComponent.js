import React from "react";
class UseStateClassComponent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:1
        }
    }
    apple(){
        alert('Good day');
    }
    update(){
        this.setState({data:this.state.data+1});
    }
    render()
    {
        return(
                <div>
                    <button onClick={this.apple}>alert</button><br></br><br></br>
                    <h1>{this.state.data}</h1>
                    <button onClick={()=>this.update()}>Update</button>
                </div>
        );
    }
}
export default UseStateClassComponent;
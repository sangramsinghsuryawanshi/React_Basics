import React from "react";
const JokeButton=(props)=>{
    return(
        <button onClick={props.callApi}>Click generate Joke.!</button>
    );
};
export default JokeButton;
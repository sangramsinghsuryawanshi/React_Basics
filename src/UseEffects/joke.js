import React, { useState } from "react";
import JokeButton from "./JokeButton";

const JokeGenerator = () => {
    const [joke, setJoke] = useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div>
            <JokeButton callApi={fetchApi} />
            <p>{joke}</p>
        </div>
    );
};

export default JokeGenerator;

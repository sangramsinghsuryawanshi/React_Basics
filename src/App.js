import './App.css';
import UserFunction from './Basics/UserFunction';
import ClassComponent from './Basics//ClassComponent';
import ClickEventButton from './Basics//ClickEventButton';
import UseStateFunComponent from './Basics//UseStateFunComponent';
import UseStateClassComponent from './Basics//UseStateClassComponent';
import PropsFunCompo from './Basics//PropsFunCompo';
import React, { useState } from 'react';
import PropClassCompo from './Basics//PropsClassCompo';
import GetInput from './InputActions/GetInput';
import { Toggle } from './InputActions/HideShow';
import UseEffectComponent from './UseEffects/UseEffect';
import JokeGenerator from './UseEffects/joke';
function App() {
  const [n, setN] = useState("aditya");

  function Apple() {
    return (<h2>Hi</h2>);
  }

  return (
    <div className="App">
      <div className="section">
        <h2>UserFunction</h2>
        <UserFunction />
      </div>

      <div className="section">
        <h2>ClassComponent</h2>
        <ClassComponent />
      </div>

      <div className="section">
        <h2>Function in One Function</h2>
        <Apple />
      </div>

      <div className="section">
        <h2>ClickEventButton</h2>
        <ClickEventButton />
      </div>

      <div className="section">
        <h2>UseStateFunComponent</h2>
        <UseStateFunComponent />
      </div>

      <div className="section">
        <h2>UseStateClassComponent</h2>
        <UseStateClassComponent />
      </div>

      <div className="section">
        <h2>PropsFunCompo</h2>
        <PropsFunCompo Name={"Sangram"} Email={"Test@gmail.com"} other={{ Address: "Karad", mobile: "111" }} />
        <PropsFunCompo Name={"Omkar"} Email={"Test@gmail.com"} other={{ Address: "Masur", mobile: "222" }} />
        <PropsFunCompo Name={n} Email={"Test@gmail.com"} other={{ Address: "Hingangaon", mobile: "333" }} />
        <button onClick={() => { setN("jhadhav") }}>Update</button>
      </div>

      <div className="section">
        <h2>PropClassCompo</h2>
        <PropClassCompo Name={"Sangram"} Email={"Test@gmail.com"}/>
        <PropClassCompo Name={"Omkar"} Email={"Test@gmail.com"}/>
        <PropClassCompo Name={n} Email={"Test@gmail.com"} />
      </div>

      <div className="section">
        <h2>GetInput</h2>
        <GetInput />
      </div>

      <div className="section">
        <h2>Actons</h2>
        <Toggle />
      </div>

      <div className="section">
        <h2>useEffect</h2>
        <UseEffectComponent/>
      </div>

      <div className="section">
        <h2>Joke Generater</h2>
        <JokeGenerator/>
      </div>

    </div>
  );
}

export default App;

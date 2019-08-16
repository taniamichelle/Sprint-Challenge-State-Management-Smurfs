import React from "react";
import "./App.scss";
import Form from './Form';
import SmurfList from "./SmurfList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Smurfs Characters Page!</h1>
      <div className='form'>
        <Form />
      </div>
      <div className='smurf-list'>
        <SmurfList />
      </div>
    </div>
  );

}

export default App;


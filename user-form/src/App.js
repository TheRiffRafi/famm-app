import logo from './logo.svg';
import './App.css';
import { useState } from "react";
//import fs from "fs";
 
function App() {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [message, setMessage] = useState("");
  //const fs = require('fs');
//  const fetch = require('node-fetch');
//  const https = require('https');
  
//  const httpsAgent = new https.Agent({
//	  rejectUnauthorized: false,
//  });

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const fs = require('fs');
      let res = await fetch("https://localhost:9200/testindex/_doc", {
       method: "POST",
       headers: {
        'Content-Type': 'application/json',
	'Authorization': 'Basic ZWxhc3RpYzpCdkR4Ykw5c0s5cDdLOUU1MXUtaA=='       
      },
       body: JSON.stringify({
        tipoUsuario: tipoUsuario
       }),
	      rejectUnauthorized: false
//       agent: httpsAgent
     });
     let resJson = await res.json();
      if (res.status === 200) {
        setTipoUsuario("");
        setMessage('User created successfully');
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form className="App-form" onSubmit={handleSubmit}>
        <input
            type="text"
            value={tipoUsuario}
            placeholder="Tipo De Usuario"
            onChange={(e) => setTipoUsuario(e.target.value)}
        />
	<button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;

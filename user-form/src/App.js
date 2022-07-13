import logo from './logo.svg';
import './App.css';
import { useState } from "react";
 

function App() {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9000/", {
       method: "POST",
       headers: {
        'Content-Type': 'application/json'
//	'Authorization': 'Basic ZWxhc3RpYzpCdkR4Ykw5c0s5cDdLOUU1MXUtaA=='       
      },
       body: JSON.stringify({
        tipoUsuario: tipoUsuario
       })
     });
     console.log(res)
     let resJson = await res.json();
     console.log(resJson)
     if (res.status === 200) {
        setTipoUsuario("");
        setMessage('User Created');
        setData(resJson);
      } else {
        setMessage("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
 
function testfunc() {
    return (
      <>
      
        { data ? 
          data.map(({ name, city }) => (
            <p key={name}>My name is {name} i am from {city}.</p>
            )
          ) : null
        }
      </>
    );
  };
return (
    <div className="App">
      <form className="App-form" onSubmit={handleSubmit}>
        <input
            type="text"
            value={tipoUsuario}
            placeholder="Tipo De Usuario"
            onChange={(e) => setTipoUsuario(e.target.value)}
        />
    	  <button type="submit">Create</button>
    
        <div> {testfunc()}</div>

      </form>
     

    </div>
    
  );
}

export default App;

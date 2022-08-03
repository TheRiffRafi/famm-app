import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function App() {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cedula, setCedula] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState("");
  const [establEscolar, setEstablEscolar] = useState("");
  const [gradoEscolar, setGradoEscolar] = useState("");
  const [nombreDelDocente, setNombreDelDocente] = useState("");
  const [nombrePadre, setNombrePadre] = useState("");
  const [nombreMadre, setNombreMadre] = useState("");
  const [nombreTutor, setNombreTutor] = useState("");
  const [nombreHermanos, setNombreHermanos] = useState("");
  const [telefonoPrincipal, setTelefonoPrincipal] = useState("");
  const [telefonoSecundario, setTelefonoSecundario] = useState("");
  const [email, setEmail] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [lugarDeTrabajo, setlugarDeTrabajo] = useState("");
  const [entidadQueRepresenta, setEntidadQueRepresenta] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [datosAdjuntos, setDatosAdjuntos] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9000/", {
       method: "POST",
       headers: {
        'Content-Type': 'application/json'
//  'Authorization': 'Basic ZWxhc3RpYzpCdkR4Ykw5c0s5cDdLOUU1MXUtaA=='       
      },
       body: JSON.stringify({
        tipoUsuario: tipoUsuario,
        nombres: nombres,
        apellidos: apellidos,
        cedula: cedula,
        genero: genero,
        fechaDeNacimiento: fechaDeNacimiento,
        establEscolar: establEscolar,
        gradoEscolar: gradoEscolar,
        nombreDelDocente: nombreDelDocente,
        nombrePadre: nombrePadre,
        nombreMadre: nombreMadre,
        nombreTutor: nombreTutor,
        nombreHermanos: nombreHermanos,
        telefonoPrincipal: telefonoPrincipal,
        telefonoSecundario: telefonoSecundario,
        email: email,
        observaciones: observaciones,
        lugarDeTrabajo: lugarDeTrabajo,
        entidadQueRepresenta: entidadQueRepresenta,
        domicilio: domicilio,
        datosAdjuntos: datosAdjuntos 
       })
     });
     console.log(res)
     let resJson = await res.json();
     console.log(resJson)
     if (res.status === 200) {
        setTipoUsuario("");
        setNombres("");
        setApellidos("");
        setCedula("");
        setGenero("");
        setFechaDeNacimiento("");
        setEstablEscolar("");
        setGradoEscolar("");
        setNombreDelDocente("");
        setNombrePadre("");
        setNombreMadre("");
        setNombreTutor("");
        setNombreHermanos("");
        setTelefonoPrincipal("");
        setTelefonoSecundario("");
        setEmail("");
        setObservaciones("");
        setlugarDeTrabajo("");
        setEntidadQueRepresenta("");
        setDomicilio("");
        setDatosAdjuntos("");
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
      <table>
        
        { data ? 
          <tr key={"header"}>
          {Object.keys(data[0]).map((key) => (
            <th>{key}</th>
          ))}
          </tr> : null }
          { data ?
          data.map((item) => (
            <tr key={item.cedula}> 
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
            )) : null
        }
      </table>
    );
  };
return (
    <div className="App">
      <form className="App-form" onSubmit={handleSubmit}>
        <input
            type="text"
            value={tipoUsuario}
            placeholder="Tipo de Usuario"
            onChange={(e) => setTipoUsuario(e.target.value)}
        />
        <input
            type="text"
            value={nombres}
            placeholder="Nombres"
            onChange={(e) => setNombres(e.target.value)}
        />
        <input
            type="text"
            value={apellidos}
            placeholder="Apellidos"
            onChange={(e) => setApellidos(e.target.value)}
        />
        <input
            type="text"
            value={cedula}
            placeholder="Número de Cédula"
            onChange={(e) => setCedula(e.target.value)}
        />
        <input
            type="text"
            value={genero}
            placeholder="Género"
            onChange={(e) => setGenero(e.target.value)}
        />
        <input
            type="text"
            value={fechaDeNacimiento}
            placeholder="Fecha de Nacimiento"
            onChange={(e) => setFechaDeNacimiento(e.target.value)}
        />
        <input
            type="text"
            value={establEscolar}
            placeholder="Establecimiento Escolar"
            onChange={(e) => setEstablEscolar(e.target.value)}
        />
        <input
            type="text"
            value={gradoEscolar}
            placeholder="Grado Escolar"
            onChange={(e) => setGradoEscolar(e.target.value)}
        />
        <input
            type="text"
            value={nombreDelDocente}
            placeholder="Nombre del Docente"
            onChange={(e) => setNombreDelDocente(e.target.value)}
        />        
        <input
            type="text"
            value={nombrePadre}
            placeholder="Nombre Padre"
            onChange={(e) => setNombrePadre(e.target.value)}
        />        
        <input
            type="text"
            value={nombreMadre}
            placeholder="Nombre Madre"
            onChange={(e) => setNombreMadre(e.target.value)}
        />        
        <input
            type="text"
            value={nombreTutor}
            placeholder="Nombre Tutor"
            onChange={(e) => setNombreTutor(e.target.value)}
        />        
        <input
            type="text"
            value={nombreHermanos}
            placeholder="Nombre Hermanos"
            onChange={(e) => setNombreHermanos(e.target.value)}
        />        
        <input
            type="text"
            value={telefonoPrincipal}
            placeholder="Telefono Principal"
            onChange={(e) => setTelefonoPrincipal(e.target.value)}
        />        
        <input
            type="text"
            value={telefonoSecundario}
            placeholder="Telefono Secundario"
            onChange={(e) => setTelefonoSecundario(e.target.value)}
        />        
        <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
        />        
        <input
            type="text"
            value={observaciones}
            placeholder="Observaciones"
            onChange={(e) => setObservaciones(e.target.value)}
        />
        <input
            type="text"
            value={lugarDeTrabajo}
            placeholder="Lugar de Trabajo"
            onChange={(e) => setlugarDeTrabajo(e.target.value)}
        />
        <input
            type="text"
            value={entidadQueRepresenta}
            placeholder="Entidad que Representa"
            onChange={(e) => setEntidadQueRepresenta(e.target.value)}
        />
        <input
            type="text"
            value={domicilio}
            placeholder="Domicilio"
            onChange={(e) => setDomicilio(e.target.value)}
        />
        <input
            type="text"
            value={datosAdjuntos}
            placeholder="Datos Adjuntos"
            onChange={(e) => setDatosAdjuntos(e.target.value)}
        />
          <button type="submit">Crear</button>
    
        <div> {testfunc()}</div>

      </form>
     

    </div>
    
  );
}

export default App;
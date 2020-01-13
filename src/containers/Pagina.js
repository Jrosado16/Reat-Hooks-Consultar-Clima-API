import React, { useState } from 'react';
import '../App.css';
import Header from "../components/Header";
import Formulario from '../components/Formulario';
import Error from '../components/Error';
import Clima from '../components/Clima';
import Loader from '../components/Loader';

function App() {

  const [datos, guardarDatos] = useState({
      pais: '',
      ciudad: ''
  });
  const [error, guardarError] = useState(false);
  const [loader, guardarLoader] = useState(false);
  const [resultado, guardarResultado] = useState({})
  const [mensaje, guardarMensaje] = useState('');

    //llamado a la API
  const consultarAPI = (e) => {
      e.preventDefault();

      const API = process.env.API_KEY || '';


      if(!verificarDatos() || !API){
        alert('Algo salio mal revisar API')
         return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${datos.ciudad},${datos.pais}&appid=${API}`;
      guardarLoader(true)
  
      fetch(url, {
        method: 'GET'
      })
      .then(data => {
        return data.json()
      })
      .then(res => {
          guardarLoader(false)
        
        if(res.cod !== 200){
            guardarError(true);
            guardarMensaje('Ciudad no encontrada');
            guardarResultado({});
        }else{
            guardarResultado(res)
            guardarMensaje('');
        }
      })
    }

  const verificarDatos = () => {
    if(datos.pais === '' || datos.ciudad === ''){
        guardarError(true)
        guardarMensaje('Ambos campos son obligatorios');
        return false;
    }else{
        guardarError(false);
        return true;
    }
  }
  //traemos los datos del form y validamos
  const datosConsulta = (event) => {
      //validamos que vengas los campos
      guardarDatos({
          ...datos,
          [event.target.name]: event.target.value
      })
  }
  //mostrar un componente condicinalmente
  let cargarLoader;
  let componente;

  //cargamos un loader y un error
  cargarLoader = (loader ? cargarLoader = <Loader /> :  cargarLoader = null)
  componente = (error ? <Error mensaje={mensaje}/> : componente = <Clima resultado={resultado}/>)
  
  return (
    <div className="App">
      <Header
        titulo='Aplicacion del Clima con React'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
                consultarAPI={consultarAPI}
              />
            </div>
            <div className="col s12 m6">
              {componente}
              {cargarLoader}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

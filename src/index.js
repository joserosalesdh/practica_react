import React from 'react'; //Porque estamos por escribir un componente (un componente es una funcion)
import ReactDOM from 'react-dom'; //Es la parte de la libreria que se encarga de renderizacion 
import './index.css'; //es el css que se le va a aplicar a esta pagina
import App from './App'; //


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('wrapper')
);



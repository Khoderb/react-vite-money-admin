import { useState } from "react";
import Mensaje from "./Mensaje";
import cerrar from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
    const[mensaje, setMensaje] = useState('');
    const[nombreGasto,setNombreGasto] = useState("");
    const[cantidad,setCantidad] = useState("");
    const[categoria,setCategoria] = useState('');
  


  const handleSubmit = e =>{
    e.preventDefault();
    if([nombreGasto,cantidad,categoria].includes('')){
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje('');
      }, 3000);      
      return;
    }
    guardarGasto({nombreGasto,cantidad,categoria});
  }

  const ocultarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 650);

  }

  return (

    <div className="modal">

      <div className="cerrar-modal">
        <img
          src={cerrar}
          alt="Cerrar Modal"
          onClick={ocultarModal}
        />
      </div>
      <form 
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        
        <legend>Nuevo Gasto</legend>
        {mensaje!=="" && <Mensaje tipo="error-modal">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade El Nombre Del Gasto, Ej. Transporte"
            value={nombreGasto}
            onChange={ e => setNombreGasto(e.target.value) } 
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="Añade La Cantidad, Ej $300 "
            id="cantidad"
            value={cantidad}
            onChange={ e => setCantidad(Number(e.target.value)) }
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={ e => setCategoria(e.target.value) }

          >
            <option value="">-- Seleccionar --</option>
            <option value="comida">Comida</option>
            <option value="ahorro">Ahorro</option>
            <option value="hogar">Hogar</option>
            <option value="ocio">Ocio</option>
            <option value="gastos">Gastos Varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div >

        <input 
          type="submit" 
          value="Añadir gasto"
        /> 

      </form>
    </div>
  )
}

export default Modal
import * as React from "react"
import "../components/log.css"
import Layout from "../components/layout"


const CandidatoPage = (props) => {

  const colores ={"red":"bg-red-500","yellow":"bg-yellow-300"}


  return (
    <Layout>
      <div className=" shadow-xl m-3 overflow-hidden rounded-md h-fit">
        <img
          width={220}
          height={150}
          className=" flex justify-center"
          src={`${props.media}`}
          alt="user"
        ></img>
        <p className=" text-center p-2">{props.candidato_nombre}</p>
        <h3 className=" text-center">{props.candidato_puesto}</h3>
        <div className={`w-auto h-1 ${colores[props.color]} mb-5`}></div>
        <div className={`w-auto h-auto ${colores[props.color]} flex flex-row justify-around p-2`}>
          <p className=" m-0 text-sm p-1">Vota por mi</p>
          <label>
            <input name={props.nombre} value={props.id_candidato} data-indice={props.indice} data-votacion={props.votacion} type="radio"  onChange={props.handleChange}></input>
            Votar
          </label>
        </div>
      </div>
    </Layout>
  )
}

export default CandidatoPage

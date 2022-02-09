import React, { useEffect, useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/fonts.css"
import axios from "axios"

import Layout from "../components/layout"

const IndexPage = () =>{
  const [ respuesta, setrespuesta]=useState([])
  useEffect( () => {
    async function fetchData() {
    const consulta = await axios.get("http://127.0.0.1:8000/api/votaciones/disponibilidad");
    setrespuesta(consulta.data);
    }
    fetchData()
  },[]);

  return(
    <Layout>
      <div className="flex-auto flex flex-row justify-around bg-gray-600">
        <h1 className="text-3xl font-bold  text-white  py-5 my-0">
        FISCALÍA GENERAL DEL ESTADO DE CAMPECHE
        </h1>
        <StaticImage  width={300} heigth={200}  src="../images/FGECAM-Blanco.png" alt="Fiscalia" />
      </div>
  
      <div className=" mx-48  my-10">
        <h3 className=" text-center">GRACIAS POR SU PARTICIPACION</h3>
      </div>
      <p className=" text-center">Para volver a la convocatoria da click aqui.</p>
      <div className=" flex flex-row justify-center mb-10">
      <Link className="votar " to="/">INICIO</Link>
      </div>
    </Layout>

  )

}

export default IndexPage

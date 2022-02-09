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
        <h3 className="text-justify ">PROCESO DE ELECCIÓN DE MIEMBROS PROPIETARIOS TEMPORALES DEL COMITÉ DE ÉTICA Y DE PREVENCIÓN DE CONFLICTOS DE INTERÉS DE LA FISCALÍA GENERAL DEL ESTADO DE CAMPECHE.</h3>
      </div>
  
      <div className=" text-center">
        <h4 className="my-0">INVITACIÓN</h4>
      </div>
      <br></br>
      <div className=" mx-56">
        <p>
        Servidores públicos de la Fiscalía General del Estado de Campeche, te invitamos a participar en el proceso de elección de los servidores públicos que conformarán el Comité de Ética y de Prevención de Conflictos de Interés de la Fiscalía General del Estado de Campeche.
        </p>
        <p>
        El Comité de Ética y de Prevención de Conflictos de Interés tiene por objeto propiciar la integridad de los servidores públicos e implementar acciones permanentes que favorezcan su comportamiento ético, por lo tanto tendrá a su cargo vigilar la aplicación y cumplimiento del Código de Ética y las Reglas de Integridad para el ejercicio de la Función Pública en el Estado de Campeche, así como del Código de Conducta.
        </p>
        <p>El Comité de Ética y de Prevención de Conflictos de Interés estará conformado por el titular de la Fiscalía General del Estado, quien lo presidirá, un Secretario Ejecutivo, el cual será designado por éste, quienes serán miembros propietarios permanentes; De igual manera se integrará por miembros propietarios temporales, quienes serán los tres servidores públicos que representen el nivel jerárquico o su equivalente siguiente:</p>
  
        <br></br>
  
        <div className="listas">
        <li>
          "Director General o Director de Área."
        </li>
        <li>
          "Enlace de control interno."
        </li>
        <li>
          "Jefe de Departamento."
        </li>
        </div>
        <br></br>
  
        <p>El proceso de elección de los miembros de carácter temporal del Comité se llevara a cabo mediante votación que realizará el personal de la Fiscalía General del Estado.</p>
        <p>En virtud de todo lo anterior, tu participación es importante, por lo que se adjunta a esta carta invitación la boleta que contiene los nombres de los servidores públicos nominados como miembros propietarios temporales del Comité referido a fin de que votes por el servidor público de tu preferencia.</p>
        <p>Sin otro particular, aprovecho la ocasión para enviarle un cordial saludo.</p>
        <br></br>
      </div>
  
      <div className=" text-center">
        <h4>ATENTAMENTE</h4>
      </div>
  
      <div className=" flex flex-row justify-center mb-10">

      {
        respuesta.message?            
        <Link className="votar " to="/login/">Votar</Link>
        :
        <Link className="votar " to="/login/">No hay votacion</Link>
      }
      </div>
    </Layout>

  )

}

export default IndexPage

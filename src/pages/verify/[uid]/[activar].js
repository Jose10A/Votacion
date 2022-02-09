import * as React from "react"
import { Link , navigate } from "gatsby"
import "../../../components/log.css"
import { StaticImage } from "gatsby-plugin-image"
import axios from "axios"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { data } from "autoprefixer"


const VotoPage = (props) =>{

    const activacion = async ()=>{
        const respuesta = await axios.post("http://127.0.0.1:8000/auth/users/activation/", {"uid": props.params.uid,"token": props.params.activar});
        console.log({"uid": props.params.uid,"token": props.params.activar})
        if (respuesta.status == 204) {
            navigate("/login/")
          } else {
            console.log("todo salio mal bro")
          }
    }
        
    
    return(

  <Layout>
      <div className=" flex h-screen justify-center items-center">
          <div className=" bg-black text-white flex justify-around items-center flex-col p-10 pt-5 rounded-xl">
               <StaticImage className=" mb-10" width={300} heigth={200}  src="../../../images/FGECAM-Blanco.png" alt="Fiscalia"></StaticImage>
               <p className=" text-white">Hemos enviado un codigo de activacion al<br></br>correo proporcionado, favor de introducirlo <br></br> dentro del recuadro de texto.</p>
               <p className=" text-white">Introduce el codigo para continuar.</p>
               <input className=" bg-white rounded-md"></input>
               <div className=" flex flex-row">
                   <button className=" mx-10 mt-10 font-sans p-1 hover:bg-white hover:text-black hover:p-1 rounded-md" onClick={activacion}>Activar</button>
               </div>
          </div>
      </div>
  </Layout>
    )
}

export default VotoPage
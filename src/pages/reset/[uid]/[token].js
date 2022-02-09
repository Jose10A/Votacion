import * as React from "react"
import { Link, navigate } from "gatsby"
import "../../../components/log.css"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import axios from "axios"

const Recuperacion = (props) => {
  const recuperar = async (e) => {
    e.preventDefault()
    let data = {
      "uid":props.params.uid,
      "token":props.params.token,
      "new_password": e.target.password.value,
      "re_new_password": e.target.password1.value
    }
    
    try{

      await axios.post(
        "http://127.0.0.1:8000/auth/users/reset_password_confirm/",
        data 
      ).then((res)=>{
        
        if (res.status == 204) {
          console.log("contraseña modificada")
          navigate("/login/")
        } else {
          console.log("todo salio mal")
        }
      })
      
    }catch(error){
      console.log(error.response)
      if(error.response.status >= 400){
        console.log("400")
      }
      if(error.response.data){
        console.log(error.response.data)
      }

    }

  }

  return (
    <Layout>
      <form onSubmit={recuperar}>
        <div className=" flex h-screen justify-center items-center">
          <div className=" bg-black text-white flex justify-around items-center flex-col p-10 pt-5 rounded-xl">
            <StaticImage
              className=" mb-10"
              width={300}
              heigth={200}
              src="../../../images/FGECAM-Blanco.png"
              alt="Fiscalia"
            ></StaticImage>
            <p className=" text-white">
              Introduzca dentro del recuadro de texto su<br></br>nueva contraseña
            </p>
            <p className=" text-white">Ingrese su nueva contraseña.</p>
            <input
            type="password"
              name="password"
              className=" text-black bg-white rounded-md"
            ></input>
            <p className=" text-white">Repita su nueva contraseña.</p>
            <input
            type="password"
              name="password1"
              className=" text-black bg-white rounded-md"
            ></input>
            <div className=" flex flex-row">
              <button type="submit"
                className=" mx-10 mt-10 font-sans p-1 hover:bg-white hover:text-black hover:p-1 rounded-md"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default Recuperacion
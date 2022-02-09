import * as React from "react"
import { Link, navigate } from "gatsby"
import "../components/log.css"
import { StaticImage } from "gatsby-plugin-image"
import axios from "axios"

import Layout from "../components/layout"
import { data } from "autoprefixer"

const Recuperacion = () => {
  const recuperar = async e => {
    e.preventDefault()
    let data = {
      email: e.target.email.value,
    }
    const respuesta = await axios.post(
      "http://127.0.0.1:8000/auth/users/reset_password/",
      data
    )
    if (respuesta.status == 204) {
      console.log("correo enviado")
    } else {
      console.log("todo salio mal")
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
              src="../images/FGECAM-Blanco.png"
              alt="Fiscalia"
            ></StaticImage>
            <p className=" text-white">
              Introduzca dentro del recuadro de texto su correo<br></br>para
              recuperar su contraseña{" "}
            </p>
            <p className=" text-white">Ingrese su correo para continuar.</p>
            <input
              name="email"
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

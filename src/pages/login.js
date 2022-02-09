import * as React from "react"
import { Link } from "gatsby"
import "../components/log.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Registro from "../components/registro_form"
import Login from "../components/login_form"

const SecondPage = () =>{
  const [formulario, setformulario]=React.useState(true)

 const setform = (x)=> setformulario(x)

  return (
  <Layout>
    <div className="body h-screen flex justify-center items-center">
      <div className="card bg-white p-11 pb-0">

      {/*<h1 className=" text-center">Login</h1>*/}


        <div className=" flex justify-around items-center flex-row mb-9">
        <button className={formulario?"btn1 text-lg font-bold": " btn1"} onClick={()=>setform(true)}>Login</button>
        <p className=" mb-0">|</p>
        <button className={formulario?"btn2 ": " btn2 text-lg font-bold"} onClick={()=>setform(false)}>Registrar</button>
        </div>
        {formulario ?
<Login></Login>

        :
<Registro></Registro>
        }
      </div>
    </div>
  </Layout>
)}

export default SecondPage

import * as React from "react"
import "../components/log.css"

import Layout from "../components/layout"
import CandidatoPage from "../components/candidato_card"
import { navigate } from "gatsby"

const VotoPage = () => {
  
  const [candidatos, setcandidatos] = React.useState(false)
  const [elegidos, setelegidos]= React.useState([])
 
 
  React.useEffect(() => {
    let token = localStorage.getItem("token")
    fetch("http://127.0.0.1:8000/api/votaciones/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    })
      .then(x => x.json().then(z => ({ status: x.status, body: z })))
      .then(response => {
        console.log(response)
        if(response.body.voto){
          navigate("/gracias/")
        }else(
          setcandidatos(() => Object.values(response.body.candidatos))
        )
          
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  const handleChange = (x) =>{

  let y = elegidos 
  y[x.target.dataset.indice] = {"id_candidatos":x.target.value, "id_votaciones":x.target.dataset.votacion}
  setelegidos(y)


  }

  const Enviar = () =>{
   console.log(elegidos)
  }

  return (
    <Layout>
      <div className=" h-screen">
        <div className=" border-2 p-3 flex flex-col">
          <h1 className=" text-center">Votacion</h1>
          {
            candidatos !== false ? (
              candidatos.map((x,i) => (
                <div key={`M_${i}`}>
                  <h3 key={`H_${i}`} className=" text-center">Candidatos para {x[0].id_puesto.titulo}</h3>
                  <div  key={`D_${i}`} className=" flex flex-row justify-center mb-8">
                    {x.map((z, y) => (
                      <CandidatoPage
                      nombre={`cand_${i}`}
                      votacion={z.id_votaciones}
                      indice={i}
                        key={`C_${y}`}
                        media={z.media}
                        candidato_puesto={z.id_puesto.titulo}
                        candidato_nombre={z.id_empleado.nombres}
                        id_candidato={z.id}
                        color={i%2===0?"yellow" : "red"}
                        //seleccionado={elegidos[i][y]? elegidos[i][y]:null}
                        handleChange={ handleChange}
                      ></CandidatoPage>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading ...</p>
            )
            //candidatos.map((x,y)=><CandidatoPage key={`C_${y}`} media={x.media} candidato_puesto={x.id_puesto.titulo} candidato_nombre={x.id_empleado.nombres} color={"yellow"}></CandidatoPage>)
          }
          <button type="button" onClick={Enviar}>Votar</button>
        </div>
      </div>
    </Layout>
  )
}

export default VotoPage

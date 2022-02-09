import * as React from "react"
import { Link, navigate } from "gatsby"
import { useForm } from "react-hook-form";


const Login = () => {
  const logear = e => {
    e.preventDefault()

  


    let data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    }

    fetch("http://127.0.0.1:8000/auth/jwt/create/", data)
      .then(x => x.json())
      .then(y => {
        if(y.access){
          localStorage.setItem("token",y.access)
          navigate("/votaciones/")
        } 
        if(y.detail) setrespuesta(y.detail)
      })
  }


  const [respuesta, setrespuesta] = React.useState(null)

  return (
    <form onSubmit={(logear)}>
      {respuesta ? <p className=" text-red-500 font-semibold">Usuario o contraseña incorrectos</p> : null}
      <div>
        <p>Email:</p>
        <input name="email"></input>
        <p>Contraseña:</p>
        <input className=" mb-1 font-Dosis" name="password"></input>
        <p className="">
          <Link className=" font-sans text-xs" to="/re_password/">
            ¿Olvido su contraseña?
          </Link>
        </p>
      </div>

      <div className=" flex flex-row justify-around">
        <button type="submit" className="Registrar ">
          Ingresar
        </button>
      </div>
    </form>
  )
}

export default Login

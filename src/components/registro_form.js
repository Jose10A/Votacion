import * as React from "react"
import { Link, navigate } from "gatsby"
import axios from "axios"
import { useForm } from "react-hook-form"

const Registro = () => {
  const registrar = e => {

    let data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    }

    fetch("http://127.0.0.1:8000/auth/users/", data)
      .then(x => x.json().then(z => ({ status: x.status, body: z })))
      .then(y => {
        if(y.body.id & y.status==201){
          navigate("/login/")
        }else(console.log(y))
      })
  }

  const imprime = x => console.log(x)
  const [respuesta, setrespuesta] = React.useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  return (
    <form onSubmit={handleSubmit(registrar)}>
      {respuesta ? <p>{respuesta}</p> : null}
      <div>
        <p className=" mb-0">Email:</p>
        <input
          className={errors.email?"mb-5  border-red-900 text-rose-600 border-2" :" mb-5 "}
          name="email"
          id="email"
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              message: "tu email no sirve, perro",
              //value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              value: /\S+@\S+\.\S+/,
            },
          })}
        ></input>

        <p className=" mb-0">Nombres:</p>
        <input
          className={errors.nombres?"mb-5  border-red-900 border-2" :" mb-5 "}
          name="nombres"
          {...register("nombres", {
            required: true,
          })}
        ></input>

        <p className=" mb-0">Apellidos:</p>
        <input
          className={errors.apellidos?"mb-5  border-red-900 border-2" :" mb-5 "}
          name="apellidos"
          {...register("apellidos", {
            required: true,
          })}
        ></input>

        <p className=" mb-0">No de Expediente:</p>
        <input
          className={errors.no_expediente?"mb-5  border-red-900 border-2" :" mb-5 "}
          name="no_expediente"
          {...register("no_expediente", {
            required: true,
          })}
        ></input>

        <p className=" mb-0">Contraseña:</p>
        <input
          className={errors.password?"mb-5  border-red-900 border-2" :" mb-5 "}
          type="password"
          name="password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        ></input>

        <p className=" mb-0">Confirmar contraseña:</p>
        <input
          className={errors.re_password?"mb-5  border-red-900 border-2" :" mb-5 "}
          type="password"
          name="re_password"
          {...register("re_password", {
            required: true,
            minLength: 8,
          })}
        ></input>
        <p></p>
      </div>

      <div className=" flex flex-row justify-around">
        <button type="submit" className="Registrar">
          Registro
        </button>
      </div>
    </form>
  )
}

export default Registro

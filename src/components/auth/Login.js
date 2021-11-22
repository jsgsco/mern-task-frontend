import { useState } from 'react' 
import { Link } from 'react-router-dom'

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario

    const handleChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Valir que no haya campos vacios

        // Pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="sombra-dark contenedor-form">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={ handleSubmit }
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={ handleChange }
                            value={email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            onChange={ handleChange }
                            value={password}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to="/nueva-cuenta" className="enlace-cuenta">Obtener Cuenta</Link>
            </div>
        </div>
     );
}
 
export default Login;
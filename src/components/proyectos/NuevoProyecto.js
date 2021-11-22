import { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext)
    const { formulario, errorformulario ,mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })
    
    const { nombre } = proyecto

    const handleProyecto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validar los datos
        if(nombre === '') {
            mostrarError()
            return
        }

        // Agregar al state
        agregarProyecto(proyecto)

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    return ( 
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ () => mostrarFormulario() }
            >Nuevo Proyecto</button>

            {
                formulario && (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            onChange={ handleProyecto }
                            value={nombre}
                        />
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                )
            }
            {
                errorformulario && (<p className="mensaje error">El nombre del Proyecto es obligatorio</p>)
            }
        </>
     );
}
 
export default NuevoProyecto;
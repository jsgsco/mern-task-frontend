import { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import * as uuid from 'uuid'

const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    const tareasContext = useContext(tareaContext)
    const { tareaseleccionada, obtenerTareas, errortarea, agregarTarea, validarTarea, actualizarTarea, limpiarTarea  } = tareasContext

    useEffect(() => {
      if(tareaseleccionada !== null) {
          guardarTarea(tareaseleccionada)
      } else {
          guardarTarea({
              nombre: ''
          })
      }
    }, [tareaseleccionada])

    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    const { nombre } = tarea

    if(!proyecto) return null

    const [ proyectoActual ] = proyecto

    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(nombre.trim() === '') {
            validarTarea()
            return
        }

        if(tareaseleccionada === null) {
            tarea.id = uuid.v4()
            tarea.proyectoId = proyectoActual.id
            tarea.estado = false
            agregarTarea(tarea)
        } else {
            actualizarTarea(tarea)
            limpiarTarea()
        }

        obtenerTareas(proyectoActual.id)

        guardarTarea({
            nombre: ''
        })
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={ handleSubmit }
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        onChange={ handleChange }
                        value={nombre}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value={ tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea' }
                    />
                </div>
            </form>
            {
                errortarea && (<p className="mensaje error">El nombre de la tarea es obligatorio</p>)
            }
        </div>
     );
}
 
export default FormTarea;
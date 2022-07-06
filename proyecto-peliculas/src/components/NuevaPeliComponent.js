import React, { useState } from "react"
import { SaveOnStorage } from "../helpers/SaveOnStorage";

export const NuevaPeliComponent = ({setListState}) => {

    const titleSection = "Añadir película";

    const [filmState, setFilmState] = useState({
        title: "",
        description: ""
    });

    const { title, description } = filmState; //Desestruturación del objeto
    
    const getDataForm = e => {
        e.preventDefault(); //Con esto evitamos que se recargue la página al enviar el formulario

        //Conseguir datos del formulario:
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //Crear objeto de la película que vamos a añadir
        let film = {
            id: new Date().getTime(),
            title,
            description
        }

        // Guardamos el estado
        setFilmState(film);

        // Vamos a actualizar el estado del listado principal. Vamos a agregar a los elementos que ya había (...) uno nuevo.
        setListState(items => {
            return [...items, film];
        });

        // Guardar en el almacenamiento local (en este caso vamos a hacerlo llamando al helper, importándolo)
        SaveOnStorage("films", film); 

    }

  return (
    <div className="add">
        <h3 className="title">{titleSection}</h3>

        <strong>
            {(title && description) && "Has creado la película " + title}
        </strong>

        <form onSubmit={getDataForm}>
            <input type="text" id="title" name="title" placeholder="Título"/>
            <textarea id="description" name="description" placeholder="Descripción"></textarea>
            <input id="save" type="submit" value="Guardar"/>
            <input id="reset" type="reset" value="Limpiar"/>
        </form>
    </div>
  )
}

import React, { useState } from 'react'

export const NuevaPeliComponent = () => {

    const titleSection = "Añadir película";

    const [filmState, setFilmState] = useState({
        title: '',
        description: ''
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

        //Guardar en el almacenamiento local
        saveOnStorage(film);

    }

    const saveOnStorage = film => {

        //Conseguir los elementos que ya tenemos en el localStorage. El parse es para convertirlo en un objeto de Javascript usable
        let items = JSON.parse(localStorage.getItem('films'));

        //Comprobamos si es un array
        if (Array.isArray(items)){
            //Guardar dentro del array un elemento nuevo
            items.push(film);
        } else{
            //Crear un array con la película nueva
            items = [film];
        }

        //Guardar en el localStorage
        localStorage.setItem('films', JSON.stringify(items));

        //Devolver objeto
        return film;

    }

  return (
    <div className="add">
        <h3 className="title">{titleSection}</h3>

        <strong>
            {(title && description) && "Has creado la película " + title}
        </strong>

        <form onSubmit={getDataForm}>
            <input type="text" id='title' name='title' placeholder="Título"/>
            <textarea id='description' name='description' placeholder="Descripción"></textarea>
            <input id='save' type="submit" value="Guardar"/>
        </form>
    </div>
  )
}

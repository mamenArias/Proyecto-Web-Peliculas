import React from "react"

export const EditComponent = ({film, getFilms, setEdit, setListState}) => {

    const titleComponent = "EDITAR PELÍCULA";

    const saveEdit = (e, id) => {
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target;

        // Buscar el índice del objeto de la peli que vamos a actualizar
        const savedFilms = getFilms();
        const index = savedFilms.findIndex(film => film.id === id); // este método nos permite buscar, con una condición, un objeto dentro de un array de objetos
        
        // Crear un objeto con ese id de ese índice, con título y descripción del formulario
        let uptadeFilm = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        // Actualizar el elemento con ese índice
        savedFilms[index] = uptadeFilm;

        // Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem("films", JSON.stringify(savedFilms));

        // Actualizar estados
        setListState(savedFilms);
        setEdit(0); // Con esto cerramos el formulario

    }

  return (
    <div className="edit-form">
        <h3 className="title">{titleComponent}</h3>
        <form onSubmit={ e => saveEdit(e, film.id) }>
            <input type="text" name="title" className="title-edit" defaultValue={film.title} />
            <textarea name="description" defaultValue={film.description} className="description-edit" />
            <input type="submit" className="edit" value="Actualizar" />
        </form>
    </div>
  )
}

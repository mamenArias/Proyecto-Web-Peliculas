import React, { useEffect, useState } from 'react'
import { EditComponent } from './EditComponent';

export const ListadoComponent = ({listState, setListState}) => {
  //Es ideal tener los estados primeros, luego los efectos, a continuación las funciones y por último el resto de hooks que utilicemos

  //const [listState, setListState] = useState([]);

  const [edit, setEdit] = useState(0);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = () => {
    let films = JSON.parse(localStorage.getItem("films"));

    setListState(films);

    return films;
  }

  const deleteFilm = (id) => {
    // Conseguir las películas almacenadas
    let filmsSaved = getFilms();

    // Filtrar las películas para eliminar del array la que no queremos
    let newFilmsList = filmsSaved.filter( film => film.id !== parseInt(id)); 
    // este método excluye del array los elementos que cumplan cierta condición (en este caso, nos vamos a quedar con las películas cuyo id sea != al que pasamos por parámetros)

    // Actualizar estado del listado
    setListState(newFilmsList);

    // Actualizar los datos en el localStorage
    localStorage.setItem('films', JSON.stringify(newFilmsList));
  }

  return (
    <>

      {listState != null ? listState.map(film => {
        return (
          <article key={film.id} className="peli-item">
                <h3 className="title">{film.title}</h3>
                <p className="description">{film.description}</p>

                <button className="edit" onClick={ () => { setEdit(film.id); }}>Editar</button>
                <button className="delete" onClick={ () => deleteFilm(film.id) }>Borrar</button>

                {/* Aparece un formulario de editar cuando le damos al botón. Se va a cargar el componente cuando el id coincida con el estado edit */}
                {edit === film.id && (
                  <EditComponent film={film} getFilms={getFilms} setEdit={setEdit} setListState={setListState} />
                )}

            </article>
        );
      }) : <h2 className='no-film'>No hay películas para mostrar</h2> }
  
    </>
  )
}

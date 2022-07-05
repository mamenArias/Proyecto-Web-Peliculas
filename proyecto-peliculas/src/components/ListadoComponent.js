import React, { useEffect, useState } from 'react'

export const ListadoComponent = ({listState, setListState}) => {
  //Es ideal tener los estados primeros, luego los efectos, a continuación las funciones y por último el resto de hooks que utilicemos

  //const [listState, setListState] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = () => {
    let films = JSON.parse(localStorage.getItem("films"));

    setListState(films);
  }

  return (
    <>

      {listState != null ? listState.map(film => {
        return (
          <article key={film.id} className="peli-item">
                <h3 className="title">{film.title}</h3>
                <p className="description">{film.description}</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        );
      }) : <h2 className='no-film'>No hay películas para mostrar</h2> }
  
    </>
  )
}

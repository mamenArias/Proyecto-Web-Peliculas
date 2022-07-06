import React, { useState } from 'react'

export const BuscadorComponent = ({listState, setListState}) => {
 
  const [search, setSearch] = useState('');
  const [notSearch, setNotSearch] = useState(false);

  // Esta función va a buscar en el LocalStorage alguna coincidencia con lo que metamos en el campo de búsqueda
  const searchFilm = (e) => {
    // Crear un estado y actualizarlo con el valor del target
    setSearch(e.target.value);

    // Filtrar para buscar cualquier coincidencia
    let searchedFilms = listState.filter(film => {
      return film.title.toLowerCase().includes(search.toLocaleLowerCase()); // True si la búsqueda está incluída en el string anterior, false si no.
    });

    // Si no hemos introducido nada o una letra, o si no se encuentra nada, no va a filtrar nada, va a mostrar el listado general y ya está.
    if (search.length <= 1 || searchedFilms <= 0){
      searchedFilms = JSON.parse(localStorage.getItem('films'));
      setNotSearch(true);
    } else {
      setNotSearch(false);
    }


    // Actualizar el estado del listado principal con lo que he filtrado.
    setListState(searchedFilms);

  }

  return (
    <div className="search">
        <h3 className="title">Buscador:</h3>
        <form>
            <input type="text" id='searh_field' name='search' autoComplete='off' value={search} onChange={ searchFilm } /> <br/>
            {/* Si no encuentra ninguna coincidencia, se muestra este span */}
            {(notSearch && search.length > 1) && (
              <span className='not-searched'>No se ha encontrado ninguna coincidencia</span>
            )}
        </form>
    </div>
  )
}

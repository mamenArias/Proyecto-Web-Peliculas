//Podemos hacer este método reutilizable, y que no sirva sólo para pelis. Para ello, le pasamos 2 parámetros.
//El primero es el nombre o la clave del elemento que queremos guardar.
//El segundo es el elemento en sí.
export const SaveOnStorage = (key, item) => {

    //Conseguir los elementos que ya tenemos en el localStorage. El parse es para convertirlo en un objeto de Javascript usable
    let items = JSON.parse(localStorage.getItem(key));

    //Comprobamos si es un array
    if (Array.isArray(items)){
        //Guardar dentro del array un elemento nuevo
        items.push(item);
    } else{
        //Crear un array con el nuevo elemento
        items = [item];
    }

    //Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(items));

    //Devolver objeto
    return item;

}
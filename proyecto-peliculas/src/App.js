import { BuscadorComponent } from "./components/BuscadorComponent";
import { ListadoComponent } from "./components/ListadoComponent";
import { NuevaPeliComponent } from "./components/NuevaPeliComponent";

function App() {
  return (
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Películas</h1>
        </header>

        {/* Barra de navegación */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* Contenido principal */}
        <section className="content">

          {/* Aquí van el listado de películas */}
          <ListadoComponent/>
            
        </section>

        {/* Barra lateral */}
        <aside className="lateral">
            <BuscadorComponent/>

            <NuevaPeliComponent/>
        </aside>

        {/* Footer de la web (añadir página web personal cuando se tenga)*/}
        <footer className="footer">
            &copy; Proyecto del Máster en React de Víctor Robles en Udemy - <a href="/#">Mª Carmen Arias</a>
        </footer>
    </div>
  );
}

export default App;

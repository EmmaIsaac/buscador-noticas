import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Forulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
    // definir la categoria y noticias
    const [categoria, guardarCategoria] = useState("");
    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=6590cd8a9bab43a8ba0f4ac5e9821596`;

            const respuesta = await fetch(url);
            const noticias = await respuesta.json();
            guardarNoticias(noticias.articles);
            // console.log(noticias.articles);
        };
        consultarAPI();
    }, [categoria]);
    return (
        <>
            <Header titulo="Buscador de Noticias" />
            <div className="container">
                <div className="container">
                    <Formulario guardarCategoria={guardarCategoria} />
                </div>
                <ListadoNoticias noticias={noticias} />
            </div>
        </>
    );
}

export default App;

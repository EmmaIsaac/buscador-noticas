import styles from "./Formulario.module.css";
import PropTypes from "prop-types";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria }) => {
    // OPCIONES
    const OPCIONES = [
        { value: "general", label: "General" },
        { value: "business", label: "Negocios" },
        { value: "entertainment", label: "Entretenimiento" },
        { value: "health", label: "Salud" },
        { value: "science", label: "Ciencia" },
        { value: "sports", label: "Deportes" },
        { value: "technology", label: "Tecnologia" },
    ];
    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

    // submit al form, pasar categoria a app
    const buscarNoticia = (e) => {
        e.preventDefault();
        guardarCategoria(categoria);
    };
    return (
        <div className="container">
            <div className={`${styles.buscador} row`}>
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={buscarNoticia}>
                        <h2 className={styles.heading}>
                            Encuentra Noticias por Categoria
                        </h2>
                        <SelectNoticias />
                        <div className="input-field col s12">
                            <input
                                type="submit"
                                className={`${styles["btn-block"]} btn btn-primary`}
                                value="Buscar"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;

import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListadoNoticias = ({ noticias }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {noticias.map((noticia) => (
                <Noticia key={noticia.url} noticia={noticia} />
            ))}
        </div>
    );
};

ListadoNoticias.propTypes = {
    noticias: PropTypes.object.isRequired,
};

export default ListadoNoticias;

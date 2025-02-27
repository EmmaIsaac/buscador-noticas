import PropTypes from "prop-types";

const Noticia = ({ noticia }) => {
    // extraer datos
    const { urlToImage, url, title, description, source } = noticia;

    return (
        <div className="col">
            <div className="card h-100">
                <div
                    style={{
                        overflow: "hidden",
                        width: "100%",
                        height: "199px",
                    }}
                >
                    <img
                        src={
                            urlToImage ||
                            "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
                        }
                        className="card-img-top"
                        alt="..."
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <p>
                        Fuente: <span>{source.name}</span>
                    </p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Ver Noticia
                    </a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired,
};

export default Noticia;

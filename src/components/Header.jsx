import PropTypes from "prop-types";

const Header = ({ titulo }) => {
    return (
        <nav
            className="navbar bg-primary justify-content-center"
            data-bs-theme="dark"
        >
            <h2 className="text-light">{titulo}</h2>
        </nav>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default Header;

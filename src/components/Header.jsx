import PropTypes from "prop-types";

function Header({ title, backgroundColor, color }) {
  const headerStyles = {
    backgroundColor: "green",
    color: "red",
  };

  return (
    <header>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback UI",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

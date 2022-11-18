import { IoIosArrowBack } from "react-icons/io";

const BackNav = ({ pageTitle }) => {
  return (
    <nav className="navbar text-center fixed-top navbar-dark bg-dark text-light justify-content-between px-2 py-3">
      <span onClick={() => history.back()}>
        <IoIosArrowBack className="h2 fw-bold" />
      </span>
      <span
        style={{ fontFamily: "Archivo" }}
        className={
          pageTitle.length >= 3 ? "h4 text-uppercase" : "h4 text-capitalize"
        }
      >
        {pageTitle}
      </span>
    </nav>
  );
};

export default BackNav;

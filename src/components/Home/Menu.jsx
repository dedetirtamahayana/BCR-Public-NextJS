import { useSelector } from "react-redux";
// import auth from "../utils/auth";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
const Menu = () => {
  //   const { user } = useSelector((state) => state.login);
  const router = useRouter();
  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ zIndex: "3", backgroundColor: "#F1F3FF" }}
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            <span className="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  href="/#feature"
                  className="nav-link"
                  style={{ color: "#000000" }}
                  aria-current="page"
                >
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/#why-us"
                  className="nav-link"
                  style={{ color: "#000000" }}
                >
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="#testimonial"
                  style={{ color: "#000000" }}
                >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#faq"
                  className="nav-link"
                  style={{ color: "#000000" }}
                >
                  FAQ
                </Link>
              </li>
              {/* {
               user && user.email ? (
                <Button type="button" variant="danger" 
                onClick={() => handleLogout()}
                >
                  Logout
                </Button>
               ) : (
                <>
                  <Button type="button" variant="success" 
                  className="ms-3 me-3"
                  onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button type="button" variant="outline-success" 
                  onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </>
                
               )
              } */}
              <Button
                type="button"
                variant="success"
                className="ms-3 me-3"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
              <Button
                type="button"
                variant="outline-success"
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            BCR
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <h5 className="pb-2">Our Services</h5>
          <h5 className="pb-2">Why Us</h5>
          <h5 className="pb-2">Testimonial</h5>
          <h5 className="pb-2">FAQ</h5>
          <div className="d-flex align-items-center">
            {/* {
               user && user.email ? (
                <Button type="button" variant="danger" 
                
                onClick={() => handleLogout()}
                >
                  Logout
                </Button>
               ) : (
                <>
                  <Button type="button" variant="success" 
                  className="d-flex me-2 justify-content-center"
                  onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button type="button" variant="outline-success" 
                   className="d-flex me-3 justify-content-center"
                  onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </>
                
               )
              } */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;

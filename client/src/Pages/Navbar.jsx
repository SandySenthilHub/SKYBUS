import { useNavigate } from "react-router-dom";
import { success } from "../Utils/notification";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../Redux/authentication/auth.action";
import Logo from '../../src/Images/Skybus.svg.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.data.token);
  const handlelogout = () => {
    Cookies.remove("jwttoken");
    Cookies.remove("userid");
    dispatch(logoutAPI());
    navigate("/");
    success("Logout Successfully");
  };
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary " style={{backgroundColor:"rgba(20, 70, 160, 0.7)"}}>
      <div className="container-fluid" style={{width:'80%',padding:"18px 0"}}>
        <a
          className="navbar-brand"
          style={{ cursor: "pointer",  }}
          onClick={() => navigate("/")}
        >
          
          <img  src={Logo} alt="logo" height={"48px"}/>

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ cursor: "pointer", fontSize:'24px' }}
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                style={{ cursor: "pointer", fontSize:'24px', marginLeft:'0px' }}
                onClick={() => navigate(`/myticket`)}
              >
                My Tickets
              </a>
            </li>
          </ul>
          <div>
            {token ? (
              <button
                className="btn btn-outline-success"
                style={{
                  borderRadius: "10px",
                  border: "2px solid",
                  marginRight: "0px",
                  color: "white",
                  fontSize:'24px'
                }}
                onClick={() => handlelogout()}
              >
                Logout
              </button>
            ) : (
              <div>
                {" "}
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate("/signin")}
                  style={{
                    borderRadius: "10px",
                    border: "2px solid",
                    marginRight: "8px",
                    color: "white",
                  fontSize:'24px'

                  }}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

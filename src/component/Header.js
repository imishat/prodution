import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  let navstyle1 = {
    backgroundColor: "#327558",
    padding: "10px 20px",
  };
  let headername = {
    padding: "10px 20px",
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  };
  let logostyle = {
    display: "inline-block",
    maxWidth: "55px",
    height: "auto",
  };
  return (
    <Navbar
      style={{ zIndex: "1", backgroundColor: "#327558", padding: "10px 20px" }}
      bg="#327558"
      expand="lg"
    >
      <Navbar.Brand to="/">
        <img
          style={logostyle}
          src="https://media.discordapp.net/attachments/901337110995410965/1045774899098177607/tie2_png.png?width=552&height=552"
          alt=""
          srcset=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Link to="/" style={headername}>
            {" "}
            <HomeIcon /> Home
          </Link>
          <Link to="/logout" style={headername}>
            {" "}
            <PowerSettingsNewIcon /> Logout
          </Link>
          <Link to="/wwcd" style={headername}>
            {" "}
            WWCD
          </Link>
          <Link to="/teams" style={headername}>
            {" "}
            <AddIcon /> Add Teams
          </Link>
          <NavDropdown
            style={headername}
            title="Dropdown"
            id="basic-nav-dropdown"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
              }}
            >
              <Link to="/matchstanding">
                <AddIcon /> STANDING
              </Link>
              <Link to="/topf">
                <AddIcon /> Top Fragger
              </Link>
              <Link to="/mvp">
                <AddIcon /> MVP
              </Link>
              <Link to="/display">
                <AddIcon /> DISPLAY
              </Link>
              <Link to="/schedule">
                <AddIcon /> SCHEDULE
              </Link>
              <Link to="/next">
                <AddIcon /> NEXT
              </Link>
              <Link to="/overall">
                <AddIcon /> OverAll
              </Link>
              <Link to="/overallmvp">
                <AddIcon /> OverAll MVP
              </Link>
              <Link to="/overallstanding">
                <AddIcon /> OverAll Standing
              </Link>
            </div>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

import Nav from "react-bootstrap/Nav";

function Nav2() {
  return (
    <Nav
      className="navbar-nav"
      activeKey="/home"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="#aboutMe">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#extra">Extras</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Nav2;

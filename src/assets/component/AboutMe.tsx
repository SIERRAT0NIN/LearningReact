import "../../index.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// function ContainerFluidExample() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col>1 of 1</Col>
//       </Row>
//     </Container>
//   );
// }

function AboutMe() {
  return (
    <div className="about-me" id="aboutMe">
      {" "}
      <Container>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          consectetur rem molestiae pariatur perspiciatis, vitae voluptate,
          cupiditate commodi tenetur itaque magnam eligendi corporis enim optio
          in laudantium esse voluptas dolorem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate velit quia quis ab iusto
          dolorem distinctio beatae fugit numquam magni assumenda, itaque
          tempore. Consectetur hic iure quam necessitatibus quo voluptatem!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto
          aliquam voluptas excepturi quibusdam accusamus sunt in, vel voluptatem
          voluptatum sed, numquam, nostrum dolore blanditiis sapiente
          perspiciatis ut quas? Tempore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor molestias error, eos, expedita impedit minima
          doloribus enim tenetur pariatur totam labore! Et provident quam quae
          saepe cupiditate laudantium minus nesciunt? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Aliquid blanditiis ex iste quas
          consectetur sequi distinctio inventore officiis itaque rem, odit
          assumenda sunt cupiditate non consequatur incidunt fugiat quo sint.
        </p>
      </Container>{" "}
    </div>
  );
}
console.log(AboutMe);
export default AboutMe;

import AreaOfrectangle from "./Component/AreaOfrectangle";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Component/Header";
function rectangle() {
  return (
    <div className="current3">
      <Header />
      <Container>
        <Row>
          <Col>
            <AreaOfrectangle />
          </Col>
        </Row>
      </Container>
      hello friend
    </div>
  );
}

export default rectangle;

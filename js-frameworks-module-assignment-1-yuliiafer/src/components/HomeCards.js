import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import tech from "../images/tech.jpg";
import coding from "../images/coding.jpg";
import computer from "../images/computer.jpg";
import Button from "react-bootstrap/Button";

const HomeCards = () => {
  return (
    <CardDeck bg="dark">
      <Card bg="dark" className="card">
        <Card.Img variant="top" src={tech} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida
            hendrerit. Nunc mattis enim ut tellus elementum.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Visit site</Button>{" "}
        </Card.Footer>
      </Card>
      <Card bg="dark">
        <Card.Img variant="top" src={coding} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida
            hendrerit. Nunc mattis enim ut tellus elementum.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Visit site</Button>{" "}
        </Card.Footer>
      </Card>
      <Card bg="dark">
        <Card.Img variant="top" src={computer} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida
            hendrerit. Nunc mattis enim ut tellus elementum.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Visit site</Button>{" "}
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default HomeCards;

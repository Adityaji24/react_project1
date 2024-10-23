import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import r11 from "../images/r1.jpeg"


function Cards() {
  return (
    <>
    <div id="cards">
    <Card style={{ width: '18rem' }}>
    <img src={r11} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Cards;
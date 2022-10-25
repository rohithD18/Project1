import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Playcard from './Playingcard.png';
import CardGroup from 'react-bootstrap/CardGroup';

export default BasicExample;
function BasicExample() {
  return (
   
    <CardGroup style={{ width: '40rem' }} > 
    <Card >
      <Card.Img variant="top" src={Playcard} />
      <Card.Body>
        <Card.Title>Playing Cards</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src={Playcard} />
      <Card.Body>
        <Card.Title>Playing Cards</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src={Playcard} />
      <Card.Body>
        <Card.Title>Playing Cards</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    </CardGroup>  


  );
}
 
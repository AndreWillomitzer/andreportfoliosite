import {Card, CardGroup, CardImg, CardDeck, ListGroup, ListGroupItem, Container, Row, Col} from 'react-bootstrap';

import rosie from './images/Rosie4.jpg';
import HomeCSS from'./Home.css';
export default function Home(){
    return ( 
        <Container>
        <Col>
        <ListGroup className="list-group">
            <ListGroup.Item as="h2" style={{color: "#B14AED", border:"none", className: "list-group-item"}}>Hello, my name is Andre Willomitzer!</ListGroup.Item>
            <ListGroup.Item as="h6" style={{border:"none",className: "list-group-item"}}>I am currently enrolled at Seneca College for Computer Programming and Analysis and completing my fourth semester. Focuses of the program include C++ object-oriented programming, web development using HTML/CSS/JavaScript and React. Furthermore, through this program I have gained experience with OracleSQL, SQL, and MongoDB.</ListGroup.Item>
            <ListGroup.Item as="h6" style={{border:"none" , className: "list-group-item"}}>I love listening to music (favourite album is Dark Side of The Moon), gaming, going fishing with my father, and playing with my cat Rosie. In my spare time I enjoy learning about different topics like economics, nature, and programming!</ListGroup.Item>
            <Card style={{marginTop:'20px', marginLeft:"15px",width:"40em", border: "none" , className: "list-group-item"}}>
            
            <Card.Img src={rosie}/>
                
            
            </Card>
            <ListGroup.Item as="h3" style={{color: "#B14AED", border:"none"}}>As a developer I am currently looking for an internship to gain experience and learn from experienced professionals.</ListGroup.Item>
        </ListGroup>
        </Col>
        </Container>
    );
}
import {Card, CardGroup, CardImg, CardDeck, Container, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';

export default function NotFound(){
    return(
        <Card bg="danger">
            <Card.Text style={{color: 'white', marginLeft:"5px"}}>
                Url Not Found!

            </Card.Text>
        </Card>
    );
}
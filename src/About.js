import {Card, CardGroup, CardImg, CardDeck} from 'react-bootstrap';
import OpenSourceBank from './images/OpenSourceBank.png';
import restaurantpic from './images/restaurantpic.png';
export default function About(){
    return (
        <>

        <Card border="dark" style={{marginTop:'20px'}}>
        <Card.Header style={{backgroundColor:"#042A2B", color: "white"}} as="h5">About</Card.Header>
        <Card.Body>
            <Card.Title>Andre Willomitzer</Card.Title>
            <Card.Text>
                This page is intended to provide information on professional and personal development projects.
            </Card.Text>
            
        </Card.Body>
        </Card>
        <br/>
        <CardDeck>
        {/* Card 1 */}
        <Card style={{width: "25em"}} border="dark">
        <Card.Header style={{color: "white", backgroundColor: "#042A2B"}} as="h6">Open Source Bank</Card.Header>
        
        <Card.Img src={OpenSourceBank} />
        
            <Card.Body>
            <Card.Text>
            A website employing front and back end web development skills to perform CRUD operations on a MongoDB database.
            </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor:"white"}} className="text-center">

            <Card.Link href="https://andre-willomitzer-webbank2.herokuapp.com/">Project Link</Card.Link>
            <Card.Link href="https://github.com/AndreWillomitzer/Web322-Web-Bank">On Github</Card.Link>
            </Card.Footer>
        </Card>
        {/* Card 1 End*/}
        {/* Card 2 */}
        <Card style={{width: "25em"}} border="dark">
        <Card.Header style={{color: "white", backgroundColor: "#042A2B"}} as="h6">Restaurant API Using Jquery and Lodash Templating</Card.Header>
        <Card.Link href="https://gallant-nobel-86b853.netlify.app/" target="_blank">
        <Card.Img src={restaurantpic} />
        </Card.Link>
            <Card.Body>
            <Card.Text>
                This JQuery/Lodash front end application uses a custom built web API that uses Express/NodeJS/MongoDB to fetch data from the MongoDB Restaurants Sample Data.
            </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor:"white"}} className="text-center">

            <Card.Link href="https://andre-willomitzer-webbank2.herokuapp.com/">Project Link</Card.Link>
            <Card.Link href="https://github.com/AndreWillomitzer/Web322-Web-Bank">On Github</Card.Link>
            </Card.Footer>
        </Card>
        {/* Card 2 End */}
        </CardDeck>
        </>
    );
}
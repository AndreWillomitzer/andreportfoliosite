import {Card, CardGroup, CardImg, CardDeck, Container, Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import OpenSourceBank from './images/OpenSourceBank.png';
import restaurantpic from './images/restaurantpic.png';
import DesignChallenge6UserProfile from './images/DesignChallenge6UserProfile.png';
import AlelaSite from './images/AlelaSite.png';
export default function Projects(){
    return (
        <>
        <Container>
        <Row>
        <Col>
        
        <Card border="dark" style={{marginTop:'20px', marginBottom:"20px", width:"100%", color:"#B14AED"}}>
        <Card.Header style={{backgroundColor:"#042A2B", color: "white"}} as="h5">Projects</Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
                This page is intended to provide information on professional and personal development projects.
            </Card.Text>
            
        </Card.Body>
        </Card>
        
        <br/>
        
        {/* Card 1 */}
        
        <Card border="dark" style={{width:"80%", marginBottom: "15px"}}>
        <Card.Header style={{color: "white", backgroundColor: "#042A2B"}} as="h6">Open Source Bank</Card.Header>
        
        <Card.Img src={OpenSourceBank} />
        
            <Card.Body>
            <Card.Text style={{color:"#B14AED"}}>
            A website employing front and back end web development skills to perform CRUD operations on a MongoDB database. It features password authentication, cookies, user-session timeouts, and dynamically generated user content using HandlebarsJS.
            </Card.Text>
                <Card.Header style={{backgroundColor: "#042A2B", color: "white"}}>
                    Technologies Used:
                </Card.Header>
                <ListGroup>
                    <ListGroupItem>HTML</ListGroupItem>
                    <ListGroupItem>CSS</ListGroupItem>
                    <ListGroupItem>JavaScript</ListGroupItem>
                    <ListGroupItem>NodeJS</ListGroupItem>
                    <ListGroupItem>ExpressJS</ListGroupItem>
                    <ListGroupItem>MongoDB</ListGroupItem>
                    <ListGroupItem>HandlebarsJS</ListGroupItem>
                </ListGroup>
            </Card.Body>
            <Card.Footer style={{backgroundColor:"white"}} className="text-center">

            <Card.Link href="https://andre-willomitzer-webbank2.herokuapp.com/" target="_blank">Project Link</Card.Link>
            <Card.Link href="https://github.com/AndreWillomitzer/Web322-Web-Bank" target="_blank">On Github</Card.Link>
            </Card.Footer>
        </Card>
        
        {/* Card 1 End*/}
        {/* Card 2 */}
        

        <Card style={{width:"80%", marginBottom: "15px"}} border="dark">
        <Card.Header style={{color: "white", backgroundColor: "#042A2B"}} as="h6">Restaurant API Using Jquery and Lodash Templating</Card.Header>
        
        <Card.Img src={restaurantpic} />
        
            <Card.Body>
            <Card.Text style={{color:"#B14AED"}}>
                This JQuery/Lodash front end application uses a custom built web API hosted on Heroku that uses Express/NodeJS/MongoDB to fetch data from the MongoDB Restaurants Sample Data.
            </Card.Text>
            <Card.Header style={{backgroundColor: "#042A2B", color: "white"}}>
                    Technologies Used:
                </Card.Header>
                <ListGroup>
                    <ListGroupItem>HTML</ListGroupItem>
                    <ListGroupItem>CSS</ListGroupItem>
                    <ListGroupItem>JavaScript</ListGroupItem>
                    <ListGroupItem>JQuery</ListGroupItem>
                    <ListGroupItem>Bootstrap</ListGroupItem>
                    <ListGroupItem>Lodash Templating</ListGroupItem>
                    <ListGroupItem>MongoDB</ListGroupItem>
                </ListGroup>
            </Card.Body>
            <Card.Footer style={{backgroundColor:"white"}} className="text-center">

            <Card.Link href="https://gallant-nobel-86b853.netlify.app/" target="_blank">Project Link</Card.Link>
            <Card.Link href="https://github.com/AndreWillomitzer/Restaurant-App-Using-Custom-API" target="_blank">On Github</Card.Link>
            </Card.Footer>
        </Card>
        
        {/* Card 2 End */}
        {/*Card 3 Start*/}
        

        <Card border="dark" style={{width:"80%",marginBottom: "15px"}}>
        <Card.Header style={{color: "white", backgroundColor: "#042A2B"}} as="h6">Alela Diane Website Design Using Figma</Card.Header>
        
        <Card.Img src={AlelaSite} />
       
            <Card.Body>
            <Card.Text style={{color:"#B14AED"}}>
                A personal hobby project of mine practising UI and UX design skills including typography and spacing techniques using Figma.
            </Card.Text>
            <Card.Header style={{backgroundColor: "#042A2B", color: "white"}}>
                    Technologies Used:
                </Card.Header>
                    <ListGroupItem>Figma Design Software</ListGroupItem>

            </Card.Body>
            <Card.Footer style={{backgroundColor:"white"}} className="text-center">

            <Card.Link href="https://www.figma.com/file/FzkCQwC8tt6htKoqyrmVW3xm/Alela-Diane-Site-Redesign?node-id=0%3A1" target="_blank">Project Link</Card.Link>
            </Card.Footer>
        </Card>
       
        {/*Card 3 End*/}
        {/*Card 4 Start*/}
        

        <Card border="dark" style={{width:"80%"}}>
        <Card.Header style={{color: "white", backgroundColor: "#042A2B"}} as="h6">UI Daily Design Challenge: Social App</Card.Header>
        
        <Card.Img src={DesignChallenge6UserProfile} />
       
            <Card.Body>
            <Card.Text style={{color:"#B14AED"}}>
                Part of the Daily UI challenge to design one component or app prototype per day.
            </Card.Text>
            <Card.Header style={{backgroundColor: "#042A2B", color: "white"}}>
                    Technologies Used:
                </Card.Header>
                    <ListGroupItem>Figma Design Software</ListGroupItem>
            </Card.Body>
            <Card.Footer style={{backgroundColor:"white"}} className="text-center">

            <Card.Link href="https://www.figma.com/file/gbX8Z7QhJBPI9IEPeMnN4aMX/Design-Challenge-6-User-Profile?node-id=0%3A1">Project Link</Card.Link>
            
            </Card.Footer>
        </Card>
        {/*Card 4 End*/}
        

        </Col>
        </Row>
        
        </Container>
        </>
    );
}
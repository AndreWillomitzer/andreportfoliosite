import {Card, CardGroup, CardImg, CardDeck, Button} from 'react-bootstrap';

export default function Footer (){
    return(
        <>
            <div className="main-footer"></div>
            <div className="container">
            <div className="row">
                <div className="col">
                    <h4 style={{color: "#B14AED", marginLeft: "15px"}}>Andre Willomitzer</h4>
                    <h6 className="list-unstyled" style={{color: "#B14AED", marginLeft: "15px"}}>
                    <li style={{color: "#B14AED"}}>andre.willomitzer@gmail.com</li>
                    <li style={{color: "#B14AED"}}>647-331-0803</li>
                    <li style={{color: "#B14AED"}}>Toronto, Ontario, Canada</li>
                    <Button variant="link" style={{color: "#042A2B", border: "0px", paddingLeft:"0"}} href="https://www.linkedin.com/in/andrewillomitzer/" target="_blank">LinkedIn</Button>
                    <Button variant="link" style={{color: "#042A2B", border: "0px"}} href="https://github.com/AndreWillomitzer" target="_blank">Github</Button>
                    <Button variant="link" style={{color: "#042A2B", border: "0px"}} href="https://docs.google.com/document/d/1s89VHNRXx5c00hNuHLYZ8rh9zhsnsG6_NRUQ20nWAjE/edit?usp=sharing" target="_blank">Resume</Button>
                    </h6>
                </div>
            </div>{/* end of content*/}
{/*             <footer className="footer">
            <li>Andre Willomitzer</li>
            <li>andre.willomitzer@gmail.com</li>
            <li>647-331-0803</li>
            <li>Toronto, Ontario, Canada</li>
            </footer> */}
            </div>
        </>
    );
  
}
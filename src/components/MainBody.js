import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from '../assets/jay.png'

const MainBody = () => {
    
    /* styles that can be called later in the code*/
    const styleHeading = {
        fontFamily: 'georgia',
        fontSize: '40px'
    }

    const styleSUBHeading = {
        fontFamily: 'georgia',
        fontSize: '20px'
    }

    /* line to divide the sections on the page 
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );*/


    return (
    <>
        <div className='MainBody'>
        <Container>
            <div style={styleHeading}> 
            Janissa Abreu 
            </div>

            <div style={styleSUBHeading}> 
            My Quote and little bit about myself
            </div>
        </Container>

        {/* keep line outside of the container */}
         {/*<ColoredLine color="black" />*/}

        </div>


        <div className='SecondBody'>
        <Container>
            <Row>
                <Col className="profilepic-column"> {/* column 1 */}
                    <figure className='profileimage'>
                        <img src={profileImage} alt="Janissa Abreu" />
                    </figure>
                </Col>


                <Col> {/* column 2 */}

                    <Row className="spacingforbutton">
                        <Button variant="secondary" size="lg">
                            Video Game Programming
                        </Button>
                    </Row>
                    <Row className="spacingforbutton">
                        <Button variant="secondary" size="lg">
                            Art
                        </Button>
                    </Row>
                    <Row className="spacingforbutton">
                        <Button variant="secondary" size="lg">
                            Poetry
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>

        <div className='ContactSheet'>

        <Container>
           
        </Container>
        </div>

    </>
    );
};

export default MainBody;
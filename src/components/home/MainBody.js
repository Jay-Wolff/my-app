import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from '../../assets/jay.png';
import profileSpeaking from '../../assets/jayspeaking.jpg';
//can call other js files with import and manipulate them on their original js file
import ContactForm from '../home/ContactForm';

const MainBody = () => {
    
    /* styles that can be called later in the code*/
    const styleHeading = {
        fontFamily: 'georgia',
        textAlign: 'center',
        fontSize: '60px',
        paddingBottom: '20px',
    }

    const styleSUBHeading = {
        fontFamily: 'georgia',
        fontSize: '30px'
    }

    const styleBack = {
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

            <Row> {/* column 2 */}
                <Col className="spacingforbutton">
                    <Button className="buttonsize" variant="secondary" size="lg">
                        Video Game Programming
                    </Button>
                </Col>
                <Col className="spacingforbutton">
                    <Button className="buttonsize" variant="secondary" size="lg">
                        Art Gallery
                    </Button>
                </Col>
                <Col className="spacingforbutton">
                    <Button className="buttonsize" variant="secondary" size="lg">
                        Poetry Collection
                    </Button>
                </Col>
            </Row>
            
        </Container>

        {/* keep line outside of the container */}
         {/*<ColoredLine color="black" />*/}

        </div>


        <div className='Introduction'>
        <Container>
            <Row>
                <Col className="profilepic-column"> {/* column 1 */}
                    <figure className='profileimage'>
                        <img src={profileImage} alt="Janissa Abreu" />
                    </figure>
                </Col>

                <Col>
                <h1 style={styleHeading}> Hi and Welcome!!
                </h1>
                <div style={styleSUBHeading}> 
                        <p>My name is Janissa Abreu, but I normally go by Jay.</p>
                        <p> In Spring 2023 I graduated with a Bachelors of Science in Computer Graphics & Imaging, and Computer Science.</p>
                        <p> I am currently Pursing my Master's in Computer Science with a focus in video game programming.</p>
                        <p>I currently create art on my free time and during work at the Information Technology Resources at Lehman College.</p>
                    </div>
                </Col>
               
            </Row>
        </Container>
        </div>

        <div className='SecondBody'>
        <Container>
            <Row>
               
                <Col className="background-column">
                <h2 style={styleHeading}> My Background </h2>
                <div style={styleBack}> 
                        <p> My name was misspelled at birth and it causes it to be mispronounced daily, 
                                that is why I go by the nickname 'Jay' in-person and online. 
                            If you want to take a shot at pronouncing my real name 'Janissa' send the syllables 
                                you'd say out loud in a contact form below to start a 
                            fun engaging conversation with me : might even lead to us collaborating.</p>

                        {/* <p> I am a very hardworking first generation student from a hispanic descent with a difficult past. 
                            During 5th grade my mother was diagnosed with triple negative breast cancer at the young age of 35!
                            This made me step up and take more precautions when it came to my studies and furthering my education.

                            I would finish my schoolwork before coming home so I could give my mother the 
                            proper care/attention she needed. During the hours she slept, which were many, 
                            I would play video games. It became my passion and I wanted to make others feel the way I felt. 
                            I made it my side-mission to find a way to "take people out of their reality and place them 
                            into my own." My mother also saw my passion and supported my gaming antics, 
                            she even played Call of Duty Zombies with me! Her undying support throughout 
                            my years helped me find what I am meant to pursue in life and I am now obtaining 
                            my masters for specifically that. My focus in Video Game Programming only stemmed 
                            from my youth days taking care of my mother. Thankfully after 13 long fought years 
                            she beat cancer and is now living peacefully in remission. </p> */}
                    
                        <p>
                        If you'd like to view games I have made please view my video game portfolio:      
                        by clicking that link you can review the games I have made during my years in College and give me 
                        feedback as to what I should make/do next.
                        </p>
                        
                    </div>
                </Col>

                <Col className="profilespeaking-column"> {/* column 1 */}
                    <figure className='profilespeaking'>
                        <img src={profileSpeaking} alt="Janissa Abreu" />
                    </figure>
                </Col>

               
            </Row>
        </Container>
        </div>



        <div className='Contactform'>
        <Container>
           <div style={styleHeading}> Contact Me! </div>
           <div> <ContactForm /> </div>
           <br/>
        </Container>
        </div>

    </>
    );
};

export default MainBody;
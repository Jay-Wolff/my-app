import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import RecycledLogo from '../../assets/recycledlogo.png';
import DevilsAngelLogo from '../../assets/devilsangelogo.png';

const ArtGal = () => {
    
    /* styles that can be called later in the code*/
    const styleHeading = {
        fontFamily: 'georgia',
        textAlign: 'center',
        fontSize: '60px',
        paddingBottom: '20px',
    }

    const styleBack = {
        fontFamily: 'georgia',
        fontSize: '20px',
        textAlign:"left"
    }

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );

    return (
    <>
        <div className='ArtGalHeading'>
        <Container>        
            <div style={styleHeading}> <br/>
            My Expressions 
                <div style={styleBack}> 
                blurb about how i make logos,emotes for people who stream and create online video content
                </div>
                <br/>
            </div>

            <ColoredLine color="black" />
            
        </Container> 
        </div>

        <div className='RecycledLogoImage'>
            <Container>
                <Row>
                    <Col className="recycledpic-column"> {/* column 1 */}
                    <figure className='recycled'>
                        <img src={RecycledLogo} alt="recycled" />
                    </figure>
                    </Col>
                    <Col>
                        <div className="TitleImage">
                            Wow
                        </div>
                        <div className="DescriptionImage">
                            wow
                        </div>
                    </Col>
                </Row>

                <ColoredLine color="black" />

            </Container>

            
        </div>

        <div className='DevilsAngelLogoImage'>
            <Container>
                <Row>
                    <Col> {/* column 1 */}
                        <div className="TitleImage">
                            Wow
                        </div>
                        <div className="DescriptionImage">
                            wow
                        </div>
                    </Col>

                    <Col className="recycledpic-column"> {/* column 2 */}
                        <figure className='recycled'>
                            <img src={DevilsAngelLogo} alt="devilangel" />
                        </figure>
                    </Col>
                </Row>

            </Container>
        </div>



        </>
    );
    }

    export default ArtGal;
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import RecycledLogo from '../../assets/recycledlogo.png';
import DevilsAngelLogo from '../../assets/devilsangelogo.png';
import OmenLove from '../../assets/omenlove.png';

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

    const styleTitle = {
        fontFamily: 'georgia',
        fontSize: '40px',
        textAlign:"left"
    }

    const styleUnderTitle = {
        fontFamily: 'georgia',
        fontSize: '30px',
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
                    <br></br>
                        <div className="TitleImage" style={styleTitle}>
                        LOGO
                        </div>
                        <div className="TitleImage" style={styleTitle}>
                        Recycled_Wolfie_
                        </div>
                        <br></br>
                        <div className="DescriptionImage" style={styleUnderTitle}>
                        This logo was made for a famous streamer who previously went by Recycled_Wolfie_. 
                        They asked for a wolf with a mask to depict how they don't show their face on social media.
                        </div>
                        <br></br>
                    </Col>
                </Row>

                <ColoredLine color="black" />

            </Container>

            
        </div>

        <div className='DevilsAngelLogoImage'>
            <Container>
                <Row>
                    <Col> {/* column 1 */}
                    <br></br>
                        <div className="TitleImage" style={styleTitle}>
                            LOGO
                        </div>
                        <div className="TitleImage" style={styleTitle}>
                            The Devil's Little Angel
                        </div>
                        <div className="DescriptionImage" style={styleUnderTitle} >
                            This logo was made for a small growing nail company who goes by "The Devils Little Angel." 
                            They requested a feeling of the devil grasping hope from an angel, but depicted with hands since 
                            it is a small nail business.
                        </div>
                        <br></br>
                    </Col>

                    <Col className="recycledpic-column"> {/* column 2 */}
                        <figure className='recycled'>
                            <img src={DevilsAngelLogo} alt="devilangel" />
                        </figure>
                    </Col>
                    <br></br>
                </Row>

                <ColoredLine color="black" />
            </Container>
        </div>

        <div className='OmenLoveImage'>
            <Container>
                <Row>
                    <Col className="recycledpic-column"> {/* column 1 */}
                    <figure className='recycled'>
                        <img src={OmenLove} alt="omen" />
                    </figure>
                    </Col>
                    <Col>
                    <br></br>
                    <div className="TitleImage" style={styleTitle}>
                            EMOTE
                        </div>
                        <div className="TitleImage" style={styleTitle}>
                            Omen's Love
                        </div>
                        <div className="DescriptionImage" style={styleUnderTitle} >
                        This emote was made for a streamer on twitch who goes by Jay_Wolff_. This is a creation 
                        of the famous character "Omen" from the video game "Valorant." They requested a lighter 
                        appeal to the deep voiced omen.
                        </div>
                        <br></br>
                    </Col>
                    <br></br>
                </Row>

                <ColoredLine color="black" />

            </Container>

            {/* this is where i show the stuff i made at Lehman College job */}

            

            
        </div>

        </>
    );
    }

    export default ArtGal;
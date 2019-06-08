import React from 'react';
import { Body, AboutContent, AboutImage, AboutText, Button1 } from '../style';
import Navigation from '../components/navigation';

function About(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title animated fadeIn">ABOUT</h1>
            <AboutContent className="animated fadeIn delay-1s">
                <AboutImage />
                <AboutText>
                    <p>Isa Israel’s work is driven by contemporary femininity and can be seen in Vanity Fair, The Coveteur, Hunger Magazine, Elle Canada, Toronto Life, MTV and Vice. His portfolio traverses effortless glamour and modern cool, with an injection of pop and youth culture.</p>
                    <p>His discerning eye and collaborative attitude are highly regarded among her advertising clients which include Adidas, Birks, L'Oréal, McDonald's, Reebok, Samsung, Stuart Weitzman, and Puma. Skye is also known for bringing the innate style of her subjects to life and works regularly with record labels Arts &amp; Crafts, Universal Music, and Warner Music.</p>
                    <div className="button-group">
                        <Button1 stroke="#4B4B4B" width="48%" onClick={()=>props.history.push('/portfolio')}>VIEW WORK</Button1>
                        <Button1 stroke="#4B4B4B" width="48%" onClick={()=>props.history.push('/connect')}>CONNECT</Button1>
                    </div>
                </AboutText>
            </AboutContent>
        </Body>
    )
}

export default About;
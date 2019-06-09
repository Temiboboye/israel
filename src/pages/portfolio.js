import React from 'react';
import { Body, PortfolioContent, ImageBox } from '../style';
import Navigation from '../components/navigation';

function Portfolio(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title">PORTFOLIO</h1>
            <PortfolioContent>
                <div className="wrapper">
                    <ImageBox style={{backgroundImage: `url(${require('../assets/images/fashion.png')})`}} onClick={()=>props.history.push('/portfolio/fashion')}>
                        <p>FASHION</p>
                    </ImageBox>
                    <ImageBox style={{backgroundImage: `url(${require('../assets/images/art.png')})`}}>
                        <p>ART</p>
                    </ImageBox>
                    <ImageBox style={{backgroundImage: `url(${require('../assets/images/others.png')})`}}>
                        <p>OTHER WORKS</p>
                    </ImageBox>
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Portfolio;
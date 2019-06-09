import React from 'react';
import { Body, PortfolioContent, ImageBox } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Fashion(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title"><Link to="/portfolio">PORTFOLIO</Link> / FASHION</h1>
            <PortfolioContent>
                <div className="wrapper">
                    <ImageBox style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} onClick={()=>props.history.push('/portfolio/fashion/design')}>
                        <p>FASHION DESIGN</p>
                    </ImageBox>
                    <ImageBox style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}}>
                        <p>FASHION ILLUSTRATIONS</p>
                    </ImageBox>
                    <ImageBox style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} onClick={()=>props.history.push('/portfolio/fashion/collections')}>
                        <p>COLLECTIONS</p>
                    </ImageBox>
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Fashion;
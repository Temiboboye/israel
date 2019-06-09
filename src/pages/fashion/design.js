import React from 'react';
import { Body, PortfolioContent, ImageBox3 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Design() {
    return (
        <Body>
            <Navigation />
            <h1 className="title"><Link to="/portfolio">PORTFOLIO</Link> / <Link to="/portfolio/fashion">FASHION</Link> / DESIGN</h1>
            <PortfolioContent>
                <div className="wrapper2">
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox3 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Design;
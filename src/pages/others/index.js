import React from 'react';
import { Body, PortfolioContent, ImageBox4 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Others() {
    return (
        <Body>
            <Navigation />
            <h1 className="title"><Link to="/portfolio">PORTFOLIO</Link> / OTHERS</h1>
            <PortfolioContent>
                <div className="wrapper2">
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}} />
                    <ImageBox4 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}} />
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Others;
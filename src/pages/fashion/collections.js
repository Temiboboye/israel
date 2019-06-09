import React from 'react';
import { Body, PortfolioContent, ImageBox2 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Collections() {
    return (
        <Body>
            <Navigation />
            <h1 className="title"><Link to="/portfolio">PORTFOLIO</Link> / <Link to="/portfolio/fashion">FASHION</Link> / COLLECTIONS</h1>
            <PortfolioContent>
                <div className="wrapper">
                    <ImageBox2 style={{backgroundImage: `url(${require('../../assets/images/fashion.png')})`}}>
                        <p>SPRING 2020</p>
                        <p className="sub">A collection of blah bleh blah</p>
                    </ImageBox2>
                    <ImageBox2 style={{backgroundImage: `url(${require('../../assets/images/art.png')})`}}>
                        <p>SPRING 2020</p>
                        <p className="sub">A collection of blah bleh blah</p>
                    </ImageBox2>
                    <ImageBox2 style={{backgroundImage: `url(${require('../../assets/images/others.png')})`}}>
                        <p>SPRING 2020</p>
                        <p className="sub">A collection of blah bleh blah</p>
                    </ImageBox2>
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Collections;
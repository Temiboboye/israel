import React from 'react';
import { Body, PortfolioContent, ImageBox5 } from '../style';
import Navigation from '../components/navigation';

function Archive(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title">ARCHIVE</h1>
            <PortfolioContent>
                <div className="wrapper">
                    <ImageBox5 style={{backgroundImage: `url(${require('../assets/images/fashion.png')})`}}>
                        <p>FASHION COLLECTIONS</p>
                    </ImageBox5>
                    <ImageBox5 style={{backgroundImage: `url(${require('../assets/images/art.png')})`}}>
                        <p>PHOTOGRAPHY</p>
                    </ImageBox5>
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Archive;
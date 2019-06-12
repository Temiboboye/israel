import React from 'react';
import { Body, PortfolioContent, ImageBox3 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Collections() {
    const imagelist = [1,2,3,4,5,6];
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/portfolio">PORTFOLIO</Link> / <Link to="/portfolio/fashion">FASHION</Link> / COLLECTIONS</h1>
            <PortfolioContent>
                <div className="wrapper2">
                    {imagelist.map((image,index)=>{
                        return (
                            <ImageBox3 key={index} style={{backgroundImage: `url(${require(`../../assets/images/fashion/collections/${image}.png`)})`}} />
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Collections;
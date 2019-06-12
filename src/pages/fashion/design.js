import React from 'react';
import { Body, PortfolioContent, ImageBox3 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Design() {
    const imagelist = [1,2,3,4];
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/portfolio">PORTFOLIO</Link> / <Link to="/portfolio/fashion">FASHION</Link> / DESIGN</h1>
            <PortfolioContent>
                <div className="wrapper2">
                    {imagelist.map((image,index)=>{
                        return (
                            <ImageBox3 key={index} style={{backgroundImage: `url(${require(`../../assets/images/fashion/design/${image}.png`)})`}} />
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Design;
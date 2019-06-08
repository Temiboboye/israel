import React from 'react';
import Navigation from '../components/navigation';
import { Body, HomeContent, FeaturedAlbumArt, Button1 } from '../style';

function Home(props) {
    return (
        <Body>
            <Navigation />
            <HomeContent>
                <FeaturedAlbumArt className="animated fadeInUp">
                    <h1>I’M ISA ISRAEL</h1>
                    <Button1 onClick={()=>props.history.push('/portfolio')}>VIEW MY WORK</Button1>
                </FeaturedAlbumArt>
            </HomeContent>
        </Body>
    )
}

export default Home;


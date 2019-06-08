import React from 'react';
import { Body, ConnectContent, SocialBox } from '../style';
import Navigation from '../components/navigation';

function Connect() {
    return (
        <Body>
            <Navigation />
            <ConnectContent>
                <div className="wrapper">
                    <SocialBox className="animated fadeInUp">
                        <img src={require('../assets/images/social/ig.svg')} alt="IG" />
                        <p>INSTAGRAM</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp">
                        <img src={require('../assets/images/social/behance.svg')} alt="behance" />
                        <p>BEHANCE</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp">
                        <img src={require('../assets/images/social/2.svg')} alt="vsco" />
                        <p>VSCO</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp">
                        <img src={require('../assets/images/social/email.svg')} alt="email" />
                        <p>E-MAIL</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp">
                        <img src={require('../assets/images/social/dribbble.svg')} alt="dribbble" />
                        <p>DRIBBBLE</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp">
                        <img src={require('../assets/images/social/t.svg')} alt="TUMBLR" />
                        <p>TUMBLR</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                </div>
            </ConnectContent>
        </Body>
    )
}

export default Connect;
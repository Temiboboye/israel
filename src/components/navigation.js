import React, { Component } from 'react';
import { Nav, NavContent, NavContentMobile } from '../style/navigation';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    state = {
        'navMenuClicked': false
    }
    _onToggleHamburger = () => {
        this.setState({
            'navMenuClicked': !this.state.navMenuClicked
        })
    }
    render() {
        return (
            <Nav>
                <NavContent>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <Link to="/">ARCHIVE</Link>
                    <Link to="/connect">CONNECT</Link>
                </NavContent>
                <NavContentMobile>
                    <div className={this.state.navMenuClicked ? "close-hamburguer" : "hamburguer"} onClick={this._onToggleHamburger}>
                        <div className="lines line-top"></div>
                        <div className="lines line-mid"></div>
                        <div className="lines line-bottom"></div>
                    </div>
                    {this.state.navMenuClicked ? 
                    <div className="mobile-content">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/portfolio">PORTFOLIO</Link>
                        <Link to="/">ARCHIVE</Link>
                        <Link to="/connect" className="last-link">CONNECT</Link>
                        <div className="social">
                            <img src={require('../assets/images/social/ig.svg')} alt="IG" />
                            <img src={require('../assets/images/social/2.svg')} alt="2" />
                            <img src={require('../assets/images/social/behance.svg')} alt="behance" />
                            <img src={require('../assets/images/social/email.svg')} alt="email" />
                            <img src={require('../assets/images/social/t.svg')} alt="t" />
                        </div>
                    </div> : null }
                </NavContentMobile>
            </Nav>
        )
    }
}

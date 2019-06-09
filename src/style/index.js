import styled from 'styled-components';

var colors = {
    "textColor": "#ED4119",
    "dark": "#4B4B4B"
}

export const Body = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .title {
        font-size: 28px;
        padding: 0 100px;
        @media only screen and (max-width: 938px) {
            padding: 0 50px;      
        }
        @media only screen and (max-width: 837px) {
            padding: 0 10px;      
        }
    }
`

export const Content = styled.div`
    flex: 1;
    background-color: #F9F9F9;
`

/**
 * @param { PropTypes.string } width
 * @param { PropTypes.string } height
 * @param { PropTypes.string } stroke
 */
export const Button1 = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    border: 2px solid ${props=>props.stroke};
    background: transparent;
    color: ${props=>props.stroke};
    outline: none;
    font-family: 'Niramit', sans-serif;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    :hover {
        transition: .2s ease-in-out;
        background-color: rgba(0,0,0,0.2);
    }
    @media only screen and (max-width: 464px) {
        width: 170px;
        height: 45px;
        font-size: 15px;
    }
`

Button1.defaultProps = {
    "width": "326px",
    "height": "59.2px",
    "stroke": "#FFFFFF"
}

// Home Styles

export const HomeContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    @media only screen and (max-width: 464px) {
        align-items: flex-start; 
        padding-top: 40px;    
    }
`

export const FeaturedAlbumArt = styled.div`
    width: 620.57px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${require('../assets/images/featuredart.jpg')});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    h1 {
        color: white;
        font-size: 48px;
        @media only screen and (max-width: 464px) {
            font-size: 27px;
        }
    }
    @media only screen and (max-width: 464px) {
        height: 400px;      
    }
` 

// About Styles

export const AboutContent = styled.div`
    flex: 1;
    display: flex;
    padding: 40px 100px;
    @media only screen and (max-width: 938px) {
        padding: 40px 50px;      
    }
    @media only screen and (max-width: 837px) {
        padding: 40px 20px;      
    }
    @media only screen and (max-width: 778px) {
        flex-wrap: wrap;      
    }
`

export const AboutImage = styled.div`
    flex-basis: 40%;
    height: 511.37px;
    background: url(${require('../assets/images/person.jpg')});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (max-width: 778px) {
        flex-basis: 100%;
        margin-bottom: 30px;
    }
`

export const AboutText = styled.div`
    flex-basis: 60%;
    padding: 0 30px;
    font-size: 20px;
    color: ${colors.dark};
    @media only screen and (max-width: 778px) {
        flex-basis: 100%;
        padding: 0;
    }
    p {
        margin: 0;
        margin-bottom: 30px;
    }
    .button-group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media only screen and (max-width: 464px) {
            flex-wrap: wrap;
            button {
                width: 100%;
                margin-bottom: 20px;
                height: 59.2px;
            }   
        }
    }
`

// Connect Styles

export const ConnectContent = styled.div`
    display: flex;
    padding: 40px 100px;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 938px) {
        padding: 40px 50px;      
    }
    @media only screen and (max-width: 837px) {
        padding: 40px 20px;      
    }
    .wrapper {
        width: 400px;
        display: flex;
        flex-wrap: wrap; 
        div:nth-child(2) {
            animation-delay: .2s;
        }
        div:nth-child(3) {
            animation-delay: .4s;
        }
        div:nth-child(4) {
            animation-delay: .6s;
        }
        div:nth-child(5) {
            animation-delay: .8s;
        }
        div:nth-child(6) {
            animation-delay: 1s;
        }
    }
`

export const SocialBox = styled.div`
    flex-basis: 100%;
    height: 60px;
    border: 2px solid ${colors.dark};
    background: transparent;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 29px;
    cursor: pointer;
    :hover {
        background: rgba(245,245,245,1)
    }
    img {
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
    .arrow {
        width: 26px;
        height: 24px;
        object-fit: contain;
    }
    p {
        margin: 0;
        font-size: 24px;
    }
`

// Portfolio Styles

export const PortfolioContent = styled.div`
    display: flex;
    padding: 40px 100px;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 938px) {
        padding: 40px 50px;      
    }
    @media only screen and (max-width: 837px) {
        padding: 40px 10px;      
    }
    .wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;  
        div:before{
            position: absolute;
            content:" ";
            top:0;
            left:0;
            width:100%;
            height:100%;
            display: block;
            z-index:0;
            background-color: rgba(0,0,0,0.45);
        }
        @media only screen and (max-width: 670px) {
            flex-wrap: wrap;    
        }
    }
    .wrapper2 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;  
        @media only screen and (max-width: 670px) {
            flex-wrap: wrap;    
        }
    }
`

export const ImageBox = styled.div`
    flex-basis: 31%;
    height: 248px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border: 1px solid ${colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
        margin: 0;
        font-size: 24px;
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
        position: absolute;
        text-align: center;
    }
    @media only screen and (max-width: 670px) {
        flex-basis: 48.5%;
        margin-bottom: 7px; 
        height: 200px; 
        p {
            font-size: 20px;
        }
    }
`

export const ImageBox3 = styled.div`
    flex-basis: 31%;
    height: 248px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border: 1px solid ${colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    @media only screen and (max-width: 670px) {
        flex-basis: 48.5%;
        margin-bottom: 7px;  
        height: 200px;
    }
`

export const ImageBox5 = styled.div`
    flex-basis: 48.5%;
    height: 248px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border: 1px solid ${colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        margin: 0;
        font-size: 24px;
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
        position: absolute;
        text-align: center;
    }
    @media only screen and (max-width: 670px) {
        flex-basis: 48.5%;
        margin-bottom: 7px;  
        height: 200px;
        p {
            font-size: 20px;
        }
    }
`

export const ImageBox4 = styled.div`
    flex-basis: 31%;
    height: 248px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border: 1px solid ${colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    @media only screen and (max-width: 670px) {
        /* flex-basis: 48.5%; */
        margin-bottom: 7px;  
        height: 140px;
    }
`



export const ImageBox2 = styled.div`
    flex-basis: 100%;
    height: 248px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    margin-bottom: 20px;
    border: 1px solid ${colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    p {
        margin: 0;
        font-size: 24px;
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
        z-index: 999999;
        text-align: center;
        margin-bottom: 5px;
    }
    .sub {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0;
    }
    @media only screen and (max-width: 670px) {
        height: 200px;
    }
`

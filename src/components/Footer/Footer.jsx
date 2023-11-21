import styled from "styled-components";
import footerPicture from '../../assets/footer_picture.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer_info">
                <h1>Департамент міністерства освіти та науки МО України</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Головна</Link></li>
                        <li><Link to="/cadrs">Кадри</Link></li>
                        <li><Link to="/about">Про нас</Link></li>
                        <li><Link to="/contacts">Контакти</Link></li>
                    </ul>
                </nav>
            </div>
            <img src={footerPicture} alt="" />
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-color: black;
    position: relative;
    padding: 0 20px; 

    img {
        position: absolute;
        max-width: 100%;
        height: auto;
        bottom: 0;
    }

    .footer_info {
        z-index: 5;
        padding-bottom: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px; 
        h1 {
            margin: 0;
            color: white;
            font-weight: 300;
        }
        ul {
            padding: 0;
            display: flex;
            margin-bottom: 0;
            justify-content: center;
            gap: 20px; 
            list-style-type: none;
            li {
                position: relative; 
            }
            a {
                text-decoration: none;
                color: white;
                position: relative;
            }
    
            a::after {
                content: ""; 
                position: absolute;
                width: 100%;
                height: 1px;
                bottom: -10%;
                left: 0;
                background-color: #8ecae6;
                transform: scaleX(0);
                transform-origin: 0 50%;
                transition: transform 0.3s;
            }
    
            a:hover::after {
                transform: scaleX(1);
            }
        }
    }

   
    @media (max-width: 1024px) {
        h1{
            font-size:24px;
        }
        .footer_info {
            padding-bottom: 150px; 
            gap: 40px; 
        }

    }

    
    @media (max-width: 768px) {
        height: auto; 
        h1{
            padding-top:40px;
            font-size:24px;
            text-align:center;
        }
        .footer_info {
            flex-direction: column; 
            padding-bottom: 100px;
        }

        ul {
            flex-direction: column; 
            li{
                text-align:center;
            }
        }
    }
`;

export default Footer
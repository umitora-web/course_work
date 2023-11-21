import styled from "styled-components";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <img className="logo" src={logo} alt="Logo" />
            <div>
                <h1>Департамент міністерства освіти та науки МО України</h1>
                <Navigation>
                    <ul>
                        <li><Link to="/">Головна</Link></li>
                        <li><Link to="/cadrs">Кадри</Link></li>
                        <li><Link to="/about">Про нас</Link></li>
                        <li><Link to="/contacts">Контакти</Link></li>
                    </ul>
                </Navigation>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: #023047;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    
    h1 {
        margin: 0;
        color: white;
        font-weight: 300;
    }

    img {
        width: 120px;
        height: 120px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;

        h1 {
            font-size: 1.5rem;
        }

        img {
            width: 80px; 
            height: 80px;
        }
    }
`;

const Navigation = styled.nav`
    ul {
        padding: 0;
        display: flex;
        margin-bottom: 0;
        justify-content: center;
        gap: 80px;
        list-style-type: none;
        
        li {
            position: relative;
        }
        
        a {
            text-decoration: none;
            color: white;
            position: relative;
            
            &::after {
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
            
            &:hover::after {
                transform: scaleX(1);
            }
        }
    }
    
    @media (max-width: 768px) {
        ul {
            flex-direction: row;
            gap: 20px;

            li {
                margin: 10px 0;
            }
        }
    }
`;

export default Header;

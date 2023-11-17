import styled from "styled-components";
import arrow from "../../../assets/arrow-203 (1).svg"
const Card = ({ data }) => {
    
    

    return (
        <CardContainer>
                <div className="card_picture">
                    <h1>{data.title}</h1>
                    <img src={data.urlToImage} alt="news"/>
                    <div>
                    <a href={data.url}>Дізнатись більшe</a>
                    <img className="arrow" src={arrow} alt="" />
                    </div>
                </div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display:flex;
    width:270px;
    height:450px;
    flex-direction:column;
    background-color: #023047;
    
    .card_picture{
        h1{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            color:white;
            font-size:16px;
            text-transform:uppercase;
            padding:0 10px;
        }
        img{
            width:270px;
            height:330px;
            object-fit:cover;
        }
        div{
            cursor:pointer;
            height:40px;
            display:flex;
            justify-content:center;
            align-items:center;
            gap:100px;
            a{
                text-decoration:none;
                color:white;
            }
            .arrow{
                width:20px;
                height:24px;
                padding:0;

            }
            
        }
        div:hover{
            a{
                color:#219ebc;
            }
            transform:scale(1.015);
        }
        
    }

`

export default Card;
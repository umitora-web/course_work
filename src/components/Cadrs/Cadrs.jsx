import styled from "styled-components";

const Cadrs = () => {

    const peoples = [
        { urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Lieutenant_General_Valerii_Zaluzhnyi.jpg', name: 'Залужний Валерій Федорович', rank: 'Головнокомандувач ЗСУ' },
        { urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Yevhenmoisiuk.jpg/1200px-Yevhenmoisiuk.jpg', name: 'Мойсюк Євген Георгійович', rank: 'Генерал-лейтенант' },
        { urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/7/71/General_Mykola_Balan_%28cropped%29.jpg', name: 'Балан Микола Іванович', rank: 'Генерал-полковник' },
        { urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Shaptala_S_O.jpg', name: 'Шаптала Сергій Олександрович', rank: 'Генерал-лейтенант' },
        { urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Serhii_Naiev_02.jpg/1200px-Serhii_Naiev_02.jpg', name: 'Наєв Сергій Іванович', rank: 'Генерал-лейтенант' },
        { urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Kosunskiu.jpg', name: 'Косинський Олександр Юрійович', rank: 'Головний майстер-сержант' },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ textAlign: "center", fontSize: '48px', borderBottom: "5px solid #023047", width: '160px' }}>Кадри</h1>
            </div>
            <CardsContainer>
                {peoples.map((people, index) => (
                    <CardBlock key={index}>
                        <img src={people.urlToImage} alt=""/>
                        <h1>{people.name}</h1>
                        <h3>{people.rank}</h3>
                    </CardBlock>
                ))}
            </CardsContainer>
        </div>
    );
}

const CardsContainer = styled.div`
    padding-bottom: 60px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 270px); 
    grid-template-rows: repeat(2, 450px); 
    gap: 40px; 

    @media (max-width: 1024px) { // For tablets
        grid-template-columns: repeat(2, 270px); // 2 columns
        grid-template-rows: repeat(3, 450px); // adjust the row count accordingly
    }

    @media (max-width: 768px) { // For smaller tablets
        grid-template-columns: repeat(2, 270px); // 2 columns, if you want fewer cards per row
    }

    @media (max-width: 480px) { // For mobile
        grid-template-columns: repeat(1, 270px); // 1 column
        grid-template-rows: auto; // automatically adjust the number of rows based on content
    }
`

const CardBlock = styled.div`
    background-color:black;
    width:270px;
    height:450px;

    &:hover{
        transform:scale(1.1);
        transition: .2s linear;
    }
    img{
        padding-left:10px;
        padding-right:10px;
        padding-top:10px;
        width:250px;
        height:360px;
        color:white;
    }
    h1{
        padding: 0 5px;
        margin-top:5px;
        font-size:18px;
        color:white;
        text-align:center;
    }
    h3{
        color:white;
        font-size:14px;
        text-align:center;
    }
`

export default Cadrs;
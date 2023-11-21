import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card/Card";
import styled from "styled-components";
import slide1 from "../../assets/slider_photos/1347917.jpg"
import slide2 from "../../assets/slider_photos/1348009.jpg"
import slide3 from "../../assets/slider_photos/1348175.jpg"
import slide4 from "../../assets/slider_photos/1348493.jpg"
import slide5 from "../../assets/slider_photos/30326.jpg"
import slide6 from "../../assets/slider_photos/30332.jpg"

const News = () => {
    const slider_photos = [slide1,slide2,slide3,slide4,slide5,slide6];
    const slider_words = ["Навчайся", "Досягай", "Захищай", "Вступай", "Мрій", "Насолоджуйся"]
   
    const news = [
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/11/398307344_657951253183997_3887738763546161567_n-960x540.jpg',title:'З 1 листопада Міноборони суттєво скоротило терміни постачання техніки та зброї в ЗСУ',description:'Нова зброя вітчизняного виробництва потраплятиме на фронт швидше, адже з 1 листопада Міністерство оборони України суттєво скоротило терміни постачання техніки та зброї в ЗСУ. На період воєнного стану скорочується виробничий цикл, а також спрощується процес випробувань. Це істотно розв’язує руки виробникам.',url:'https://armyinform.com.ua/2023/11/03/z-1-lystopada-minoborony-suttyevo-skorotylo-terminy-postachannya-tehniky-ta-zbroyi-v-zsu/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/11/shahed-2-960x540.jpg',title:'Над Україною знищено 24 «шахеди» та ракету Х-59',description:'У ніч на 3 листопада 2023 року російські окупанти атакували Україну чотирма десятками Shahed-136/131 з курської області та з району приморсько-ахтарськ — рф. Крім того, противник застосував керовану авіаційну ракету Х-59 із повітряного простору окупованої Херсонщини.',url:'https://armyinform.com.ua/2023/11/03/nad-ukrayinoyu-znyshheno-24-shahedy-ta-raketu-h-59/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/11/vtraty_11-03-2023-960x540.jpg',title:'Ще 850 окупантів, 36 артсистеми і 24 ББМ знищені Силами оборони України за добу',description:'Бий окупанта! Разом переможемо! Наша сила – в правді!',url:'https://armyinform.com.ua/2023/11/03/shhe-850-okupantiv-36-artsystemy-i-24-bbm-znyshheni-sylamy-oborony-ukrayiny-za-dobu/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/10/deklaracziyi-1536x864-1.jpg',title:'Чиї декларації будуть «закриті», як декларувати «бойові» та закордонні рахунки: роз’яснення',description:'Відновлення електронного декларування викликало чимало запитань у середовищі військовослужбовців ЗС України. Зокрема, наших читачів цікавлять окремі положення Закону України «Про внесення змін до деяких законів України про визначення порядку подання декларацій осіб, уповноважених на виконання функцій держави або місцевого самоврядування, в умовах воєнного стану» № 3384-ІХ (яким внесено зміни до ЗУ «Про запобігання корупції», далі — Закон), які стосуються термінів кампаній декларування, суб’єктів декларування, відкриття публічного доступу до Єдиного державного реєстру декларацій з урахуванням безпекових аспектів та нових інструментів від НАЗК для декларантів.',url:'https://armyinform.com.ua/2023/10/31/chyyi-deklaracziyi-budut-zakryti-yak-deklaruvaty-bojovi-ta-zakordonni-rahunky-rozyasnennya/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/10/foto_golovna-400x300.jpg',title:'Журналіст АрміяInform тестує новий тренажер танка Т-72 ЕА',description:'Досвід використання броньованої техніки, зокрема танків і важких БТРів, під час вуличних боїв свідчить, що, окрім необхідної підтримки силами піхоти, є нагальна проблема підготовки саме екіпажів танків до ведення таких боїв.',url:'https://armyinform.com.ua/2023/10/30/zhurnalist-armiyainform-testuye-novyj-trenazher-tanka-t-72-ea/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/10/ucz123-400x300.jpg',title:'Якими ракетами росія атакує Україну — військовий експерт',description:'Військовий експерт Петро Черник спеціально для АрміяInform повідомив, що росіяни за півтора року великої війни застосували проти України від 7000 до 10 000 ракет та розповів, якими саме ракетами окупанти завдають ударів.',url:'https://armyinform.com.ua/2023/10/30/yakymy-raketamy-rosiya-atakuye-ukrayinu-vijskovyj-ekspert/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/09/20230928-01-e1695901032311-400x300.jpg',title:'Кирило Буданов зустрівся з британською експерткою з питань росії — обговорили шляхи звільнення Криму від окупантів',description:'Начальник Головного управління розвідки Міністерства оборони України Кирило Буданов зустрівся із британською експерткою з питань росії доктором Джейд МакГлинн.',url:'https://armyinform.com.ua/2023/09/28/kyrylo-budanov-zustrivsya-z-brytanskoyu-ekspertkoyu-z-pytan-rosiyi-obgovoryly-sposoby-zvilnennya-krymu-vid-okupantiv/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/09/72acc20fd603a9f4289c981c732d42f1_1693558663_extra_large-400x300.jpeg',title:'Без деокупації Криму та Донбасу не буде справжнього сталого миру ані в Україні, ані у Європі — Глава держави',description:'Президент України Володимир Зеленський зазначає, що нещодавні події в Росії яскраво продемонстрували, що російському Президентові не можна довіряти, тому немає жодного сенсу про щось із ним домовлятися, і це мають усвідомити всі у світі. Про це Глава держави заявив під час онлайн-участі в міжнародному економічному форумі Ambrosetti в Італії.',url:'https://armyinform.com.ua/2023/09/01/bez-deokupacziyi-krymu-ta-donbasu-ne-bude-spravzhnogo-stalogo-myru-ani-v-ukrayini-ani-u-yevropi-glava-derzhavy/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/06/krym_golovna.jpeg',title:'Крим: деокупація — на порядку денному',description:'Зазначений підхід є цілком слушний, оскільки питання повернення тимчасово окупованих територій для їхніх мешканців починаються саме в когнітивному вимірі або, іншими словами, в головах людей.',url:'https://armyinform.com.ua/2023/06/16/krym-deokupacziya-na-poryadku-dennomu/'},
        {urlToImage:'https://armyinform.com.ua/wp-content/uploads/2023/04/bez-imeni-2-400x300.png',title:'У міжнародні відносини повернуться повага й порядок, коли у Крим повернеться український прапор — Володимир Зеленський',description:'У міжнародні відносини повернуться повага й порядок, коли у Крим повернеться український прапор — Володимир Зеленський',url:'https://armyinform.com.ua/2023/04/07/v-mizhnarodni-vidnosyny-povernutsya-povaga-j-poryadok-koly-u-krym-povernetsya-ukrayinskyj-prapor-volodymyr-zelenskyj/'},
    ]
   
    

    return (
        <div>
            <SliderContainer>
                <swiper-container class="mySwiper" navigation="true" space-between="30"
                    centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
                        {slider_photos.map((photo,index) => (
                    <swiper-slide key={index}><p>{slider_words[index]}</p><img src={photo} alt="Slide 1"/></swiper-slide>
                       )) }
                    </swiper-container>
            </SliderContainer>
            <div style={{display:'flex', justifyContent:'center'}}>
            <h1 style={{textAlign:"center", fontSize:'48px', borderBottom:"5px solid #023047",width:'160px'}}>Новини</h1>
            </div>
            <CardsContainer>
                    {news.map((newes, index)=>(
                        <Card key={index} data={newes}/>
                    ))}
            </CardsContainer>
        </div>
        
    );
};

const CardsContainer = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: repeat(5, 270px); 
  grid-template-rows: repeat(2, 450px); 
  gap: 40px;
  justify-content: center;
  margin-bottom: 100px;

  
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 270px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 270px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 270px);
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 270px);
    padding:0 16px;
  }
`;

const SliderContainer = styled.div`
    swiper-container{
        position:relative;
        height:600px;
        swiper-slide{
            height:600px;
            img{
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            p{
                position:absolute;
                top:37%;
                left:50%;
                font-size:64px;
                font-weight:700;
                color:white;
                transform: translate(-50%, -50%);
                border:3px solid white;
                padding:15px;
            }
        }
    }
    @media (max-width: 540px) {
        swiper-container{
            position:relative;
            height:0px;
        }
    }
`


export default News;
import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import Video from '../../assets/The Batman - Trailer Principal.mp4'
import Cards from "../../contexts/cards";
import Footer from "../../components/footer/footer";
import { Helmet } from "react-helmet";



function Home() {
   
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <div id="banner"></div>      
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer" type="video/mp4">
                        <source src={Video}/>
                        Seu navegador não possuiu suporte para vídeos
                    </video>
                    <div id="sinopse">
                        <p className="description">                        
                        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                        </p>
                        <button className="button">Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer /> 
        </>
    )
}

export default Home;
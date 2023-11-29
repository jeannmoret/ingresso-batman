import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Helmet } from "react-helmet";

function Contato() {
    return(
        <>
            <Helmet>
                <title>Contato</title>
            </Helmet>
            <Header />
            <div className="container-input">
                <div class="mensagem-topo">           
                    ENTRE EM CONTATO!
                </div>                  
                <div class="input">
                        <label for="name">NOME</label>
                        <input id="input-style" type="name" name="nome" />
                
                        <label for="email">EMAIL</label>
                        <input id="input-style" type="email" name="email" />
                
                        <label for="telefone">TELEFONE</label>
                        <input id="input-style" type="number" name="número" />
                
                        <label for="mensagem">MENSAGEM</label>
                        <textarea name="mensagem" id="mensagem" rows="10"></textarea>
                
                        <button class="button"> ENVIAR </button>   
                </div>
            </div>
            <Footer />

             
        </>
    )
}

export default Contato;
import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Comments from "../../components/coments/coments";
import { Helmet } from "react-helmet";



function Comentario() {
    return(
        <>
            <Helmet>
                <title>Comentários</title>
            </Helmet>
            <Header />
            <Comments />
            <div>
                
                
            </div>
            <Footer />
        
        </>
    )
}

export default Comentario;
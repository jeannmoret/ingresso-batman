import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Gallery from "../../components/gallery/gallery";
import { Helmet } from "react-helmet";


function Fotos() {
    return(
        <>
            <Helmet>
                <title>Fotos</title>
            </Helmet>
            <Header />
            <Gallery />
            <div>
                Fotos
            </div>
            <Footer />
        
        </>
    )
}

export default Fotos;
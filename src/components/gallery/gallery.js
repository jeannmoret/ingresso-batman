import React from "react";
import './styles.css';
import Img1 from '../../assets/gallery-imgs/1.jpeg'
import Img2 from '../../assets/gallery-imgs/2.jpeg'
import Img3 from '../../assets/gallery-imgs/3.jpeg'
import Img4 from '../../assets/gallery-imgs/4.jpeg'
import Img5 from '../../assets/gallery-imgs/5.jpeg'
import Img6 from '../../assets/gallery-imgs/6.jpeg'
import Img7 from '../../assets/gallery-imgs/7.jpeg'
import Img8 from '../../assets/gallery-imgs/8.jpeg'
import Img9 from '../../assets/gallery-imgs/9.jpeg'
import Img10 from '../../assets/gallery-imgs/10.jpeg'
import Img11 from '../../assets/gallery-imgs/11.jpeg'
import Img12 from '../../assets/gallery-imgs/12.jpeg'


function Gallery() {

    return (
        <>
            <div id="gallery">
                <img id='img1' src={Img1} alt="img1"/>
                <img id='img2' src={Img2} alt="img2"/>
                <img id='img3' src={Img3} alt="img3"/>
                <img id='img4' src={Img4} alt="img4"/>
                <img id='img5' src={Img5} alt="img5"/>
                <img id='img6' src={Img6} alt="img6"/>
                <img id='img7' src={Img7} alt="img7"/>
                <img id='img8' src={Img8} alt="img8"/>
                <img id='img9' src={Img9} alt="img9"/>
                <img id='img10' src={Img10} alt="img10"/>
                <img id='img11' src={Img11} alt="img11"/>
                <img id='img12' src={Img12} alt="img12"/>               
            </div>
        </>
    )       
}

export default Gallery;
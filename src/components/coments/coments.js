import React from "react";
import './styles.css'
import ImgBatfan from '../../assets/comentarios/batfan.jpg'
import ImgNerdman from '../../assets/comentarios/robert.jpeg'
import ImgMarra from '../../assets/comentarios/marrakashperfil.png'
import ImgNoriak from '../../assets/comentarios/noriak.png'
import ImgErike from '../../assets/comentarios/erike.png'
import ImgMedina from '../../assets/comentarios/medina.png'

function Comments() {
    return(
        <>
            <div className="comment-container">
                <div className="comment">
                    <img src={ImgBatfan} alt="batfan" />
                    <div class="comment-details">
                        <h3>@batfan1983</h3>
                        <p>ansioso para assistir com meu filho!! compramos o ingresso!! </p>
                    </div>
                </div>
                <div className="comment">
                    <img src={ImgNerdman} alt="robert" />
                    <div class="comment-details">
                        <h3>@Nerdman</h3>
                        <p>será que é bom?? </p>
                    </div>
                </div>
                <div className="comment">
                    <img src={ImgMarra} alt="marrakashperfil" />
                    <div class="comment-details">
                        <h3>@Marrakash</h3>
                        <p>Tudo otário</p>
                    </div>
                </div><div className="comment">
                    <img src={ImgNoriak} alt="noriak" />
                    <div class="comment-details">
                        <h3>@Noriak</h3>
                        <p>WAAAARIIOOOOOOOORWQWIQWOIQWOQWOOOORR</p>
                    </div>
                </div><div className="comment">
                    <img src={ImgErike} alt="erike" />
                    <div class="comment-details">
                        <h3>@Erike</h3>
                        <p>Ces viram a mina que fez cosplay de batgirl???</p>
                    </div>
                </div><div className="comment">
                    <img src={ImgMedina} alt="robert" />
                    <div class="comment-details">
                        <h3>@Medina</h3>
                        <p>@Erike. Tô ligado, já comi</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Comments;
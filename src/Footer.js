import React from 'react';
import cv from './images/CV_Soliman_Al_Halaby.pdf'

function Footer(){
    return(
        <footer className="footer">
            <div className="download">Réalisé par<a className="cv" href="https://github.com/Soliman-Halaby" target="_blank">Soliman Al Halaby</a></div>
            <div className="download">Télécharger<a className="cv" href={cv} target="_blank">mon CV</a></div>
        </footer>
    )
}

export default Footer
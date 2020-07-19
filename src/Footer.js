import React from 'react';
import cv from './images/CV_Soliman_Al_Halaby.pdf'

function Footer(){
    return(
        <footer className="footer">
            <span className="download">Télécharger</span><a className="cv" href={cv} target="_blank">mon CV</a>
        </footer>
    )
}

export default Footer
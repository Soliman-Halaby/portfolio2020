import React from 'react';
import logo from './logo.svg';
import phone from './images/phone.svg'
import style from './App.css'
import project from './images/drumpad.png'
import cv from './images/CV_Soliman_Al_Halaby.pdf'

function App() {
  return (
  <div className="pageContainer">
    <div className="gallerie">
      <div class="cardContainer">
        <div className="card">
          <a class="projectLink" href="https://soliman-halaby.github.io/drumPad/" >
            <img className="projectImg" src={project} alt="Project representation"/>
          </a>
          <div className="cardTitle">
            <img className="responsivePhone" id="greenColor" src={phone} alt="Phone responsive"></img>
            <img className="responsiveComputer" id="greenColor" src={phone} alt="Phone responsive"></img>
            <a class="projectTitle" href="https://soliman-halaby.github.io/drumPad/">Drumpad</a>
          </div>
          <div className="cardDate">Fait le 12/05/2020</div>
          <div className="cardDescription">
            Seul, réaliser un Drum Pad en JS. Avoir plusieurs sons et les contrôler + animations. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code.
          </div>
          <div className="cardBottom">
            <div className="containerDetail">
              <div className="oneThird">
                <div className="cardGrade">Note : <span class="grade">20</span></div>
              </div>
              <div className="twoThird">
                <div className="madeFor">Fais pour :
                  <a className="name" href="https://github.com/brunosimon" target="_blank">Bruno Simon</a>
                </div>
              </div>
            </div>
            <div className="containerBottom">
              <div className="madeWith">Fais avec :</div>
              <a className="participant participant1" target="_blank" href="#">Coucou</a>
              <a className="participant participant2" target="_blank" href="#">Coucou</a>
              <a className="participant participant3" target="_blank" href="#">Coucou</a>
            </div>
          </div> 
        </div>   
      </div>
    </div>
    <footer className="footer">
      <span className="download">Télécharger</span><a className="cv" href={cv} target="_blank">mon CV</a>
    </footer>
  </div>
  );
}

export default App;



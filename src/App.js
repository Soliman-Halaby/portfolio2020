import React from 'react';
import logo from './logo.svg';
import './App.css';
import phone from './images/phone.svg'

function App() {
  return (
    <div className="container">
      <div className="gallerie">
        <div className="card">
          <div className="info">
            <div className="titleInfo">
              <h1 className="title">DrumPad</h1>
              <div className="pictoContainer">
                <div className="titlePicto">
                  <img class="phoneResponsive" src={phone} alt="Responsive Phone"></img>
                </div>
                <div className="titlePicto">
                  <img class="phoneResponsive" src={phone} alt="Responsive Phone"></img>
                </div>
              </div>
            </div>
            <span className="smallTitle">Projet Individuel</span>
              <h3 className="innerTitle">Consignes :</h3>
              <p className="description">Seul, réaliser un Drum Pad en JS. Avoir plusieurs sons et les contrôler + animations. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code.</p>
              <span className="madeFor">Fais pour : <a className="forWho" href="https://github.com/brunosimon">Bruno Simon</a></span>
              <div className="gradeContainer">
                <span className="madeFor">Note : <span className="forWho">17</span></span>
                <div class="detail">Détail</div>
              </div>
              <div className="boxGrade">
                <span className="detailText">Consignes : <span className="myGrade">3</span><span className="detailGrade">/1</span></span>
                <span className="detailText">Features : <span className="myGrade">3</span><span className="detailGrade">/6</span></span>
                <span className="detailText">Aspect : <span className="myGrade">3</span><span className="detailGrade">/3</span></span>
                <span className="detailText">Code : <span className="myGrade">3</span><span className="detailGrade">/5</span></span>
                <span className="detailText">Technicité : <span className="myGrade">3</span><span className="detailGrade">/5</span></span>
              </div>
              <div className="bottomCard">
                <span className="smallTitle">Fait le 07/02/20</span>
                <a className="forWho" href="https://github.com/Soliman-Halaby/drumPad"><span className="smallTitle">Voir le projet</span></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

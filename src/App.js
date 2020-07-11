import React from 'react';
import logo from './logo.svg';
import './App.css';
import firstProject from './images/firstProject.png'

function App() {
  return (
    <div className="container">
      <div className="gallerie">
        <div className="card">
          <div className="info">
            <h1 className="title">DrumPad</h1>
            <span className="smallTitle">Projet Individuel</span>
            <span className="smallTitle">Fait le 07/02/20</span>
            <a className="forWho" href="https://github.com/Soliman-Halaby/drumPad"><span className="smallTitle">Voir le projet</span></a>
              <h3 className="innerTitle">Consignes :</h3>
              <p className="description">Seul, réaliser un Drum Pad en JS. Avoir plusieurs sons et les contrôler + animations. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code.</p>
              <span class="madeFor">Fais pour : <a className="forWho" href="https://github.com/brunosimon">Bruno Simon</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

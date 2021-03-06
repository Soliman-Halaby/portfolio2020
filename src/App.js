import React, { useRef, useState } from "react";

import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Cursor from "./components/Cursor/Cursor"

import project from "./images/oralB.png";
import project1 from "./images/diceRoller.png";
import project2 from "./images/milleBoards.png";
import project3 from "./images/drumpad.png";
import project4 from "./images/savoirMag.png";
import project5 from "./images/gameBoy.png";
import project6 from "./images/unTronePoursuivi.png";
import project7 from "./images/showroom.png"
import project8 from "./images/gourmandine.png"
import project9 from "./images/invioBTP.png"

import moonLight from "./images/iconMoon.svg";
import moonDark from "./images/iconSunDark.svg";

import "./App.css";
import "./components/Card/Card.css"
import "./components/Footer/Footer.css"
import "./components/Cursor/Cursor.css"
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const cursorRef = useRef();
  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  function onMouseMove(e) {
    const cursor = cursorRef.current;
    if (!cursor) return;
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
  }

  return (
    <div onMouseMove={onMouseMove} className="pageContainer" data-theme={isDarkMode ? "dark" : "light"}>
      <div className="cursor" ref={cursorRef}></div>
      <nav className="langSelector">
        <ul className="selectLang">
          <li className="currentLang lang">
            <a href="" title="Visiter le site français">FR</a>
          </li>
          <li className="lang otherLang">
            <a href="" title="Visit English version" >EN</a>
          </li>
        </ul>
      </nav>
      <h1 className="pageTitle">Soliman Al Halaby</h1>
      <img
        className="pageTheme"
        src={isDarkMode ? moonDark : moonLight}
        alt="Theme Icon"
        onClick={handleDarkMode}
      ></img>
      <h4 className="madeWithReact">
        Codé avec
        <a className="reactJS" href="https://fr.reactjs.org/">
          React JS
        </a>
      </h4>
      <div className="gallerie">
        <Card
          title="Showroom D'Dalos"
          projectImage={project7}
          projectLink="https://showroom.ddalos.com/"
          phoneColor="redColor"
          computerColor="greenColor"
          cardDescription="Nous avons mis en ligne notre Showroom D'Dalos réalisé par Christophe sur Blender en utilisant la librairie Three JS."
          projectDate="Livré le 05/02/2021"
          projectGrade="Projet"
          madeForWho="Fait pour :"
          madeFor={[
            {
              name: "Joël Bourienne",
              url: "https://www.linkedin.com/in/jo%C3%ABl-bourienne-ab96037/",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Christophe",
              url: "https://www.linkedin.com/in/christophe-francisco-a758061a9/",
            },
          ]}
        />
        <Card
          title="Invio BTP"
          projectImage={project9}
          projectLink="https://www.invio-batiment.fr/"
          phoneColor="greenColor"
          computerColor="greenColor"
          cardDescription="Design et création du site Invio BTP en utilisant WordPress."
          projectDate="Livré le 01/02/2021"
          projectGrade="WordPress"
          madeForWho="Contrat"
          madeFor={[
            {
              name: "",
              url: "",
            },
          ]}
          invisible="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  "
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Alexandra",
              url: "https://www.linkedin.com/in/alexandrabernard/",
            },
          ]}
        />
        <Card
          title="Gourmandine"
          projectImage={project8}
          projectLink="https://gourmandine-herblay.fr/"
          phoneColor="greenColor"
          computerColor="greenColor"
          cardDescription="Design et création du site Gourmandine Chocolatier en utilisant WordPress et intégration WooCommerce."
          projectDate="Livré le 01/02/2021"
          projectGrade="WordPress"
          madeForWho="Contrat"
          madeFor={[
            {
              name: "",
              url: "",
            },
          ]}
          invisible="Lorem Ipsum Lorem Ipsum  "
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Alexandra",
              url: "https://www.linkedin.com/in/alexandrabernard/",
            },
          ]}
        />
        <Card
          title="Un Trone poursuivi"
          projectImage={project6}
          projectLink="https://github.com/Soliman-Halaby/Un-trone-poursuivi"
          phoneColor="redColor"
          computerColor="greenColor"
          cardDescription="Mise en place d'un jeu avec une interface graphique en Python en utilisant la librairie pycharm. Plusieurs features disponibles."
          projectDate="Livré le 30/01/2021"
          gradeProject="Note : "
          projectGrade="17"
          madeForWho="Fait pour :"
          madeFor={[
            {
              name: "Loïc Janin",
              url: "https://www.linkedin.com/in/lo%C3%AFc-janin-827b4391/",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Alexandra",
              url: "https://www.linkedin.com/in/alexandrabernard/",
            },
            {
              name: "Inès",
              url: "https://www.linkedin.com/in/in%C3%A8s-richard-60b775194/",
            },
          ]}
        />
        <Card
          title="Game Boy"
          projectImage={project5}
          projectLink="https://soliman-halaby.github.io/gameBoy/"
          phoneColor="redColor"
          computerColor="greenColor"
          cardDescription="Seul, vous devez réaliser un Game Boy en HTML / CSS /JS. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code."
          projectDate="Livré le 15/06/2020"
          gradeProject="Note : "
          projectGrade="18"
          madeForWho="Fait pour :"
          madeFor={[
            {
              name: "Bruno Simon",
              url: "https://github.com/brunosimon",
            },
          ]}
          bottomCard=""
          mates={[
            {
              name: "",
              url: "",
            },
          ]}
        />
        <Card
          title="Drum Pad"
          projectImage={project3}
          projectLink="https://soliman-halaby.github.io/drumPad/"
          phoneColor="greenColor"
          computerColor="greenColor"
          cardDescription="Seul, réaliser un Drum Pad en JS. Avoir plusieurs sons et les contrôler + animations. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code."
          invisible=""
          projectDate="Livré le 12/05/2020"
          gradeProject="Note : "
          projectGrade="17"
          madeForWho="Fait pour :"
          madeFor={[
            {
              name: "Bruno Simon",
              url: "https://github.com/brunosimon",
            },
          ]}
          bottomCard=""
          mates={[
            {
              name: "",
              url: "",
            },
          ]}
        />
        <Card
          title="Savoir Magazine"
          projectImage={project4}
          projectLink="https://robinb-dev.github.io/savoir/"
          phoneColor="orangeColor"
          computerColor="greenColor"
          cardDescription="Création d'un site pour le magazine Savoir."
          invisible="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  Lorem Ipsum"
          projectDate="Livré le 19/05/2020"
          gradeProject="Note : "
          projectGrade="17"
          madeForWho="Projet Culture Générale"
          madeFor={[
            {
              name: "",
              url: "",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Robin",
              url: "https://github.com/RobinB-dev",
            },
            {
              name: "Christophe",
              url: "https://github.com/Chriiiiiss",
            },
          ]}
        />
        <Card
          title="Mille Boards"
          projectImage={project2}
          projectLink="https://robinb-dev.github.io/milleBoards/"
          phoneColor="redColor"
          computerColor="greenColor"
          cardDescription="Création en groupe d'un jeu en JavaScript."
          invisible="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
          projectDate="Livré le 24/04/2020 (non abouti)"
          gradeProject="Note : "
          projectGrade="12"
          madeForWho="Semaine intensive"
          madeFor={[
            {
              name: "",
              url: "",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Robin",
              url: "https://github.com/RobinB-dev",
            },
            {
              name: "Alexandra",
              url: "https://github.com/alexandrabernard",
            },
            {
              name: "Paul",
              url: "https://github.com/Umb3rs",
            },
            {
              name: "Philippe",
              url: "https://github.com/Chompy0067",
            },
          ]}
        />
        <Card
          title="Dice Roller"
          projectImage={project1}
          projectLink="https://soliman-halaby.github.io/diceRoller/"
          phoneColor="redColor"
          computerColor="greenColor"
          cardDescription="Seul, réaliser un lanceur de dés (dice roller) en JS. Pouvoir lancer au minimum un dé. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code."
          invisible=""
          projectDate="Livré le 12/04/2020"
          gradeProject="Note : "
          projectGrade="19.25"
          madeForWho="Fait pour :"
          madeFor={[
            {
              name: "Bruno Simon",
              url: "https://github.com/brunosimon",
            },
          ]}
          bottomCard=""
          mates={[
            {
              name: "",
              url: "",
            },
          ]}
        />
        <Card
          title="Oral B"
          projectImage={project}
          projectLink="https://soliman-halaby.github.io/oralB-io/"
          phoneColor="orangeColor"
          computerColor="orangeColor"
          cardDescription="Refonte du site OralB iO en semaine intensive."
          invisible="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          projectDate="Livré le 12/04/2020"
          gradeProject="Note : "
          projectGrade="12"
          madeForWho="Semaine intensive"
          madeFor={[
            {
              name: "",
              url: "",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Pierre",
              url: "https://github.com/Icezaucaramel",
            },
            {
              name: "Philippe",
              url: "https://github.com/Chompy0067",
            },
            {
              name: "Sarah",
              url: "",
            },
            {
              name: "Audrey",
              url: "",
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

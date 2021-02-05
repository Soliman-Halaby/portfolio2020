import React, { useState } from "react";
import Footer from "./Footer";
import Card from "./Card";
import project from "./images/oralB.png";
import project1 from "./images/diceRoller.png";
import project2 from "./images/milleBoards.png";
import project3 from "./images/drumpad.png";
import project4 from "./images/savoirMag.png";
import project5 from "./images/gameBoy.png";
import project6 from "./images/unTronePoursuivi.png";
import moonLight from "./images/iconMoon.svg";
import moonDark from "./images/iconSunDark.svg";

import "./App.css";
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="pageContainer" data-theme={isDarkMode ? "dark" : "light"}>
      <h1 className="pageTitle">Mon Portfolio</h1>
      <img
        className="pageTheme"
        src={isDarkMode ? moonDark : moonLight}
        alt="Moon Theme"
        onClick={handleDarkMode}
      ></img>
      <h4 className="madeWithReact">
        Codé avec{" "}
        <a className="reactJS" href="https://fr.reactjs.org/">
          React JS
        </a>
      </h4>
      <div className="gallerie">
        <Card
          title="Un trone poursuivi"
          projectImage={project6}
          projectLink="https://github.com/Soliman-Halaby/Un-trone-poursuivi"
          phoneColor="redColor"
          computerColor="greenColor"
          cardDescription="Mise en place d'un jeu avec une interface graphique en Python en utilisant la librairie pycharm. Plusieurs options disponibles (inventaire, niveaux)"
          projectDate="Livré le 30/01/2021"
          projectGrade="Projet"
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
            {
              name: "",
              url: "",
            },
            {
              name: "",
              url: "",
            },
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
          gradeProject="Note :"
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
          gradeProject="Note :"
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
          gradeProject="Note :"
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

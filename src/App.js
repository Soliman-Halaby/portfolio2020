import React, { useState, useRef } from "react";

import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import project from "./images/oralB.png";
import project1 from "./images/diceRoller.png";
import project2 from "./images/milleBoards.png";
import project3 from "./images/drumpad.png";
import project4 from "./images/savoirMag.png";
import project5 from "./images/gameBoy.png";
import videoProject from "./images/videoPython.mp4";
import project7 from "./images/showroom.png";
import project8 from "./images/canLinkMe.png";
import project9 from "./images/movieReactOne.png"
import project10 from "./images/agoraMuseum.png"
import project11 from "./images/eclipse.png"
import project12 from "./images/selfer.png"
import moonLight from "./images/iconMoon.svg";
import moonDark from "./images/iconSunDark.svg";

import "./App.css";
import "./components/Card/Card.css"
import "./components/Footer/Footer.css"
import "./components/Cursor/Cursor.css"


function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const cursorRef = useRef();
  const cursorInterRef = useRef();
  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  function onMouseMove(e) {
    const cursor = cursorRef.current;
    const cursorInvert = cursorInterRef.current;
    if (!cursor) return;
    if (!cursorInvert) return;

    if(cursor.style.width == '25px') {
      cursor.style.left = `${e.clientX - 10}px`
      cursor.style.top = `${e.clientY - 10}px`
    }
    else{
      cursor.style.left = `${e.clientX - 13}px`
      cursor.style.top = `${e.clientY - 13}px`
    }
    cursorInvert.style.left = `${e.clientX}px`
    cursorInvert.style.top = `${e.clientY}px`
  }

  return (
    <div onMouseMove={onMouseMove} className="pageContainer" data-theme={isDarkMode ? "dark" : "light"}>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor_interior" ref={cursorInterRef}></div>
      {/* <nav className="langSelector">
        <ul className="selectLang">
          <li className="currentLang lang">
            <a href="" title="Visiter le site français">FR</a>
          </li>
          <li className="lang otherLang">
            <a href="" title="Visit English version" >EN</a>
          </li>
        </ul>
      </nav> */}
      <h1 className="pageTitle">Soliman Al Halaby</h1>
      <span className="myRole">Développeur front-end</span>
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
          title="Selfer"
          projectImage={project12}
          projectLink="http://selfer.fr/"
          phoneColor="orangeColor"
          computerColor="greenColor"
          cardDescription="La Web App Selfer permet d’éditer et mettre à jour du contenu en récupérant les éléments via l’API Notion."
          projectDate="Livré le 10/12/2021"
          gradeProject="Note : "
          projectGrade="15"
          invisible=""
          madeForWho="Pour :"
          madeFor={[
            {
              name: "Paul Gabriel",
              url: "https://www.linkedin.com/in/pagbrl/",
            },
            // {
            //   name: "Adrien Rivierre",
            //   url: "https://www.linkedin.com/in/adrienrivierre/",
            // },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Robin",
              url: "https://www.linkedin.com/in/robin-bourachot-b2b8331a4/",
            },
            {
              name: "Valentin",
              url: "https://www.linkedin.com/in/valentin-houplain-bb5b691ba/",
            },
            {
              name: "Leo",
              url: "https://www.linkedin.com/in/leo-largillet/",
            },
            {
              name: "Louise",
              url: "https://www.linkedin.com/in/louise-supplisson-390ab3154/",
            },
            {
              name: "Théo",
              url: "https://www.linkedin.com/in/théo-sciancalepore-638527206/",
            },
          ]}
          cursorRef={cursorRef}
        />
        <Card
          title="Eclipse"
          projectImage={project11}
          projectLink="https://eclipse-one.vercel.app/"
          phoneColor="orangeColor"
          computerColor="greenColor"
          cardDescription="Site présentant un produit mis en place lors d'un project de Design Fiction."
          projectDate="Livré le 07/06/2021"
          gradeProject="Note : "
          projectGrade="20"
          invisible=""
          madeForWho="Pour :"
          madeFor={[
            {
              name: "Grégoire Charrassin",
              url: "https://www.linkedin.com/in/gcharrassin/",
            },
            // {
            //   name: "Adrien Rivierre",
            //   url: "https://www.linkedin.com/in/adrienrivierre/",
            // },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Robin",
              url: "https://www.linkedin.com/in/robin-bourachot-b2b8331a4/",
            },
            {
              name: "Valentin",
              url: "https://www.linkedin.com/in/valentin-houplain-bb5b691ba/",
            },
            {
              name: "Inès",
              url: "https://www.linkedin.com/in/in%C3%A8srichard/",
            },
            {
              name: "Amine",
              url: "https://www.linkedin.com/in/zeamine/",
            },
            {
              name: "Patxi",
              url: "https://www.linkedin.com/in/patxi-manzano/",
            },
          ]}
          cursorRef={cursorRef}
        />
        <Card
          title="Agora Museum"
          projectImage={project10}
          projectLink="https://museum.canlink.me/"
          phoneColor="greenColor"
          computerColor="greenColor"
          cardDescription="Création d'un site en Wordpress en utilisant les custom post type ainsi que les pages templates."
          projectDate="Livré le 07/06/2021"
          gradeProject="Note : "
          projectGrade="16"
          invisible=""
          madeForWho="Pour :"
          madeFor={[
            {
              name: "J-F Di Rienzo",
              url: "https://www.linkedin.com/in/jean-francois-di-rienzo/",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Robin",
              url: "https://www.linkedin.com/in/robin-bourachot-b2b8331a4/",
            },
            {
              name: "Valentin",
              url: "https://www.linkedin.com/in/valentin-houplain-bb5b691ba/",
            },
            {
              name: "Chris",
              url: "https://www.linkedin.com/in/christophe-francisco-a758061a9/",
            },
            {
              name: "Patxi",
              url: "https://www.linkedin.com/in/patxi-manzano/",
            },
          ]}
          cursorRef={cursorRef}
        />
        <Card
          title="canLINK Me"
          projectImage={project8}
          projectLink="https://canlink.me/"
          phoneColor="greenColor"
          computerColor="greenColor"
          cardDescription="Création d'un raccourcisseur d'URL en PHP avec une gestion d'URL + du compte utilisateur. Connexion avec Google API."
          projectDate="Livré le 31/03/2021"
          gradeProject="Note : "
          projectGrade="18.5"
          invisible=""
          madeForWho="Pour :"
          madeFor={[
            {
              name: "Renaud Berthier",
              url: "https://www.linkedin.com/in/renaud-berthier/",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Robin",
              url: "https://www.linkedin.com/in/robin-bourachot-b2b8331a4/",
            },
            {
              name: "Valentin",
              url: "https://www.linkedin.com/in/valentin-houplain-bb5b691ba/",
            },
            {
              name: "Alexandre",
              url: "https://www.linkedin.com/in/alexandre-hoyau-a40711191/",
            },
          ]}
          cursorRef={cursorRef}
        />
                <Card
          title="Movie React"
          projectImage={project9}
          projectLink="https://soliman-halaby.github.io/moviereact/#/"
          phoneColor="orangeColor"
          computerColor="greenColor"
          cardDescription="Plateforme d'expositions de différents types de films en utilisant l'API TMDB. Casting, durée et note sont disponibles !"
          projectDate="Livré le 25/03/2021"
          gradeProject="Note : "
          projectGrade="16"
          invisible=""
          madeForWho="Pour :"
          madeFor={[
            {
              name: "Tony Cabaye",
              url: "https://www.linkedin.com/in/tony-cabaye-b19720164/",
            },
          ]}
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Chris",
              url: "https://www.linkedin.com/in/christophe-francisco-a758061a9/",
            },
            {
              name: "Robin",
              url: "https://www.linkedin.com/in/robin-bourachot-b2b8331a4/",
            },
            {
              name: "Valentin",
              url: "https://www.linkedin.com/in/valentin-houplain-bb5b691ba/",
            },
            {
              name: "Patxi",
              url: "https://www.linkedin.com/in/patxi-manzano/",
            },
            {
              name: "Grégoire",
              url: "https://www.linkedin.com/in/gr%C3%A9goire-richard-a744561a8/",
            },
          ]}
          cursorRef={cursorRef}
        />
        <Card
          title="Showroom D'Dalos"
          projectImage={project7}
          projectLink="https://ddalos.vercel.app/"
          phoneColor="redColor"
          computerColor="greenColor"
          cardDescription="Présentation Three JS de modèles 3D réalisés sur Blender."
          projectDate="Livré le 05/02/2021"
          projectGrade="Projet"
          invisible="Lorem Lorem Lorem Lorem Lorem"
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
          cursorRef={cursorRef}
        />
        <Card
          title="Un Trone poursuivi"
          projectLink="https://github.com/Soliman-Halaby/Un-trone-poursuivi"
          phoneColor="redColor"
          projectImg={<video className="videoPlayer"   
          onMouseOver={event => event.target.play()}
          onMouseOut={event => event.target.pause()}
          src={videoProject} muted playsInline>
          </video>}

          computerColor="greenColor"
          cardDescription="Mise en place d'un jeu avec une interface graphique en Python en utilisant la librairie PyGame. Plusieurs features disponibles."
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
          cursorRef={cursorRef}
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
          cursorRef={cursorRef}
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
          cursorRef={cursorRef}
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
          cursorRef={cursorRef}
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
          cursorRef={cursorRef}
        />
        <Card
          title="Dice Roller"
          projectImage={project1}
          projectLink="https://soliman-halaby.github.io/diceRoller/"
          phoneColor="greenColor"
          computerColor="greenColor"
          cardDescription="Réaliser un dice roller en JS. Pouvoir lancer au minimum un dé. Noté sur l'aspect, les features, la qualité et téchnicité du code."
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
          bottomCard="Réalisé avec :"
          mates={[
            {
              name: "Inès",
              url: "https://www.linkedin.com/in/in%C3%A8s-richard-60b775194/",
            },
          ]}
          cursorRef={cursorRef}
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
          cursorRef={cursorRef}
        />
      </div>
      <Footer />
    </div >
  );
}

export default App;

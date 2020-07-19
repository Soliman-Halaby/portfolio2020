import React from 'react';
import Footer from './Footer'
import Card from './Card'
import project from './images/oralB.png'
import project1 from './images/diceRoller.png'
import project2 from './images/milleBoards.png'
import project3 from './images/drumpad.png'
import project4 from './images/savoirMag.png'
import project5 from './images/gameBoy.png'

import './App.css'

function App() {
  return (
  <div className="pageContainer">
    <div className="gallerie">
      <Card 
        title="Oral B"
        projectImage={project}
        projectLink="https://soliman-halaby.github.io/oralB-io/"

        phoneColor="orangeColor"
        computerColor="orangeColor"
        cardDescription="Refonte du site OralB iO en semaine intensive."
        projectDate="Conçu pour le 12/04/2020"
        projectGrade="12"
        madeForWho='Semaine intensive'
        madeFor={[
          {
            name:'',
            url:''
          }
        ]}
        bottomCard='Réalisé avec :'
        mates={[
          {
            name: 'Je sais plus',
            url: '',
          }
        ]}
      />
      <Card 
        title="Dice Roller"
        projectImage={project1}
        projectLink="https://soliman-halaby.github.io/diceRoller/"

        phoneColor="redColor"
        computerColor="greenColor"
        cardDescription="Seul, réaliser un lanceur de dés (dice roller) en JS. Pouvoir lancer au minimum un dé. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code."
        projectDate="Conçu pour le 12/04/2020"
        projectGrade="19.25"
        madeForWho='Fait pour :'
        madeFor={[
          {
            name:'Bruno Simon',
            url:'https://github.com/brunosimon'
          }
        ]}
        bottomCard=''
        mates={[
          {
            name: '',
            url: '',
          }
        ]}
      />
      <Card 
        title="Mille Boards"
        projectImage={project2}
        projectLink="https://robinb-dev.github.io/milleBoards/"
        phoneColor="redColor"
        computerColor="greenColor"
        cardDescription="Création en groupe d'un jeu en JavaScript"
        projectDate="Conçu pour le 24/04/2020"
        projectGrade="12"
        madeForWho='Semaine intensive'
        madeFor={[
          {
            name:'',
            url:''
          }
        ]}
        bottomCard='Réalisé avec :'
        mates={[
          {
            name:'Robin',
            url:'https://github.com/RobinB-dev'
          },
          {
            name:'Alexandra',
            url:'https://github.com/alexandrabernard'
          },
          {
            name:'Paul',
            url:'https://github.com/Umb3rs'
          },
          {
            name:'Philippe',
            url:'https://github.com/Chompy0067'
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
        projectDate="Conçu pour le 12/05/2020"
        projectGrade="17"
        madeForWho='Fait pour :'
        madeFor={[
          {
            name:'Bruno Simon',
            url:'https://github.com/brunosimon'
          }
        ]}
        bottomCard=''
        mates={[
          {
            name:'',
            url:''
          },
          {
            name:'',
            url:''
          },
          {
            name:'',
            url:''
          },
          {
            name:'',
            url:''
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
        projectDate="Conçu pour le 19/05/2020"
        projectGrade="17"
        madeForWho='Projet de Culture Générale'
        madeFor={[
          {
            name:'',
            url:''
          }
        ]}
        bottomCard='Réalisé avec :'
        mates={[
          {
            name:'Robin',
            url:'https://github.com/RobinB-dev'
          },
          {
            name:'Christophe',
            url:'https://github.com/Chriiiiiss'
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
        projectDate="Conçu pour le 15/06/2020"
        projectGrade="18"
        madeForWho='Fait pour :'
        madeFor={[
          {
            name:'Bruno Simon',
            url:'https://github.com/brunosimon'
          }
        ]}
        bottomCard=''
        mates={[
          {
            name:'',
            url:''
          },
        ]}
      />
    </div>
    <Footer/>
$  </div>
  );
}

export default App;



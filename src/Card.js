import React from 'react';
import phone from './images/phone.svg'
import computer from './images/computer.svg'

function Card(props) {
    const { 
      title, projectImage, projectLink, mates, phoneColor, computerColor, cardDescription, projectDate, projectGrade, madeFor, bottomCard, madeForWho, invisible, gradeProject
    } = props;

    return (
        <div class="cardContainer">
        <div className="card">
          <a class="projectLink" href={projectLink} target="_blank" >
            <img className="projectImg" src={projectImage} alt="Project representation"/>
          </a>
          <div className="cardTitle">
            <img className="responsivePhone" id={phoneColor} src={phone} alt="Phone responsive"></img>
            <img className="responsiveComputer" id={computerColor} src={computer} alt="Computer responsive"></img>
            <a class="projectTitle" href={projectLink} target="_blank">{title}</a>
          </div>
          <div className="cardDate">{projectDate}</div>
          <div className="cardDescription">{cardDescription}<span className="invisible">{invisible}</span></div>
          <div className="cardBottom">
            <div className="containerDetail">
              <div className="oneThird">
                <div className="cardGrade">{gradeProject}<span class="grade">{projectGrade}</span></div>
              </div>
              <div className="twoThird">
                <div className="madeFor">
                    {madeForWho}
                    {madeFor.map(madeFor => <a className="name" href={madeFor.url} target="_blank">{madeFor.name}</a>)}
                </div>
              </div>
            </div>
            <div className="containerBottom">
                <div className="madeWith">{bottomCard}</div>
                {mates.map(mate => <a className="participant" target="_blank" href={mate.url} key={mate.name}>{mate.name}</a>)}
            </div>
          </div> 
        </div>   
      </div>
    )
}

export default Card
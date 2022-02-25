import React from "react";
import phone from "../../images/phone.svg";
import computer from "../../images/computer.svg";

function Card(props) {
    const {
        title,
        projectImage,
        projectImg,
        projectLink,
        mates,
        phoneColor,
        computerColor,
        cardDescription,
        projectDate,
        projectGrade,
        madeFor,
        bottomCard,
        madeForWho,
        invisible,
        gradeProject,
        cursorRef,
    } = props;

    
    function updateCursor(e) {
        console.log(cursorRef.current)
        cursorRef.current.style.width = "30px";
        cursorRef.current.style.height = "30px";
    }

    function resetCursor(e) {
        cursorRef.current.style.width = "25px";
        cursorRef.current.style.height = "25px";
    }

    return (
        <div onMouseEnter={updateCursor} onMouseLeave={resetCursor} className="cardContainer">
            <div className="card">
                <a className="projectLink" rel="noopener noreferrer" href={projectLink} target="_blank">
                    {projectImg || <img className="projectImg"
                        src={projectImage}
                        alt="Project representation" />}
                </a>
                <div className="cardTitle">
                    <img
                        className="responsivePhone"
                        id={phoneColor}
                        src={phone}
                        alt="Phone responsive"
                    ></img>
                    <img
                        className="responsiveComputer"
                        id={computerColor}
                        src={computer}
                        alt="Computer responsive"
                    ></img>
                    <a className="projectTitle" rel="noopener noreferrer" href={projectLink} target="_blank">
                        {title}
                    </a>
                </div>
                <div className="cardDate">{projectDate}</div>
                <div className="cardDescription">
                    {cardDescription}
                    <span className="invisible">{invisible}</span>
                </div>
                <div className="cardBottom">
                    <div className="containerDetail">
                        <div className="oneThird">
                            <div className="cardGrade">
                                {gradeProject}
                                <span className="grade">{projectGrade}</span>
                            </div>
                        </div>
                        <div className="twoThird">
                            <div className="madeFor">
                                {madeForWho}
                                {madeFor.map((madeFor) => (
                                    <a key={madeFor.name} className="name" rel="noopener noreferrer" href={madeFor.url} target="_blank">
                                        {madeFor.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="containerBottom">
                        <div className="madeWith">{bottomCard}</div>
                        {mates.map((mate) => (
                            <a
                                className="participant"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={mate.url}
                                key={mate.name}
                            >
                                {mate.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

import React from "react"


function Skills(){
    return (
        <div className="skills-page">
            <h1 className="skill-title">Tech stack & skills</h1>
            <div className="logos">
                <img className="logo-img" alt="html" src="./images/HTML.png" />
                <img className="logo-img" alt="css" src="./images/CSS.png" />
                <img className="logo-img"  alt="javascript" src="./images/JS.png" />
                <img className="logo-img"  alt="react" src="./images/REACT.png" />
                
                <p className="logo-text html" > HTML </p>
                <p className="logo-text css" > CSS</p>
                <p className="logo-text js" > JAVA<br/>SCRIPT </p>
                <p className="logo-text react" > REACT</p>
                
                
                
                <img className="logo-img" alt="python" src="../images/PYTHON.png" />
                <img className="logo-img"  alt="github" src="../images/GITHUB.png"  />
                <img className="logo-img"  alt="canva" src="../images/CANVA.png" />
                <img className="logo-img"  alt="figma" src="../images/FIGMA.png" />
                <p className="logo-text-py" >PYTHON </p>
                <p className="logo-text-git" > Github</p>
                <p className="logo-text-canva" >CANVA </p>
                <p className="logo-text-figma" > FIGMA</p>
            </div>
        </div>
    )
}
export default Skills
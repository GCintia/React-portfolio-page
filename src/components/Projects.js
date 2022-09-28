import React from "react"


function Projects(){
    return (
        <div className="projects-page">
            <h1 className="proj-title">Projects</h1>
            <section className="projects">
                <div className="project-item">
                   <a className="repo-link" href="https://rawcdn.githack.com/GCintia/Dice-Game-/6e63c40b7e8012769e5b54ecdd12d8e9d1b1137a/index.html" rel="noreferrer"target="_blank">
                    <img className="project-img img-first" alt="project"src="./images/BBALL.PNG" /></a>
                    <p className="project-titles">Dice Game</p>
                    <p className="project-description text-first" >
                    Roll the dice with the button to increase your and your opponents score. 
                    The game displays whose turn it is, how much you rolled, and the winner 
                    who is the first one to score 21.
                    </p>
                </div>
                <div className="project-item">
                   <a className="repo-link"  href="https://rawcdn.githack.com/GCintia/DASHBOARD-PROJECT/102829085aa1e3d3c2836232e7bf881548f31d3c/index.html" rel="noreferrer" target="_blank">
                   <img className="project-img img-second" alt="project" src="./images/DASHY.PNG" /></a>
                     <p className="project-titles">Dashboard</p>
                    <p className="project-description text-second">
                    Dashboard displaying a picture, the current time 
                    and weather at your location, and some crypto rates using APIs to get the data.
                    The project is deployed as a google extension.</p>
                </div>
                <div className="project-item">
                   <a className="repo-link"  href="https://rawcdn.githack.com/GCintia/Javascript-Color-scheme-Generator/c5f6bdc33ef8341108d92fb5a71184605ea50202/index.html" rel="noreferrer" target="_blank">
                    <img className="project-img img-third" alt="project" src="./images/COLORSCHEME.PNG"  /></a>
                    <p className="project-titles">Color Scheme Generator</p>
                    <p className="project-description text-third">
                    Choose a color you like and get complementing palettes for your design.
                    The generator uses the color API. </p>
                </div>
                   <div className="project-item">
                   <p className="soon-project">Coming soon...</p>
                    <img className="project-img img-fourth"  alt="project" src="./images/watchlistProj.PNG"  />
                     <p className="project-titles soon">Movie watchlist</p>
                    <p className="project-description text-fourth">
                    With the open movie database API you can search for a movie
                    you would like to watch and add it to or remove it 
                    from your watchlist. The added movies are saved in local storage.</p>
                </div>
            </section>
            <p className="click">Click on the image to see live or check out my Github profile
             <a href="https://github.com/GCintia" rel="noreferrer" target="_blank"> <img className="link-img footer-link" alt="github" src="./images/GITHUB.png" /></a>
             </p>
        </div>
    )
}

export default Projects
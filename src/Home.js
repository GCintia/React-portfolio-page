import React from "react"


function Home(){
    return (
        <main className="flex homepage">
            <div className="personal-info">
                <img className="profile-pic" alt="profile" src="./images/profile.jpeg"/>
                <h2 className="name"> &lt;CINTIA GÉCZI&gt; </h2>
                <h3 className="occup">Frontend Developer</h3>
                <a href="mailto: cintia.g1998@gmail.com"><button className="email-btn">Email me</button></a>
                <section className="links">
                    <a href="https://hu.linkedin.com/in/cintia-g%C3%A9czi-01b01924b" rel="noreferrer" target="_blank"> <img className="link-img" alt="linkedin"src="./images/LINKEDIN.png" /></a>
                    <a href="https://github.com/GCintia" rel="noreferrer" target="_blank"> <img className="link-img" alt="github" src="./images/GITHUB.png" /></a>
                </section>
            </div>
            <div className="about">
                <h2 className="about-title">&lt;About me&gt;</h2>
                <p className="about-sec">Enthusiastic self-taught Software Developer with 1 year of studying experience. <span>Looking for an entry level or junior front-end developer role.</span> A few years ago I was a teacher and I still love that side of me, although about year ago I decided I want to change my path and start to belong in the tech world.  I enjoy spending my free-time with learning new skills in tech, staying up-to-date, discovering new tools. Also loving the sweat when I have to solve a new coding challenge! Working my way through these challenges keep me motivated.</p>
                <a href="https://www.canva.com/design/DAFM4KjYIns/M4zMLdYbmL0xd29J1l-yGA/view?utm_content=DAFM4KjYIns&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" rel="noreferrer" target="_blank"><button className="resume-btn">Resume</button></a>
            </div>
        </main>
    )
}

export default Home
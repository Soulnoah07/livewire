import React from "react";
import Html from '../assets/images/HTML5.png'
import Css from '../assets/images/Css3.png'
import Javascript from '../assets/images/JavaScript.png'
import MangoDB from '../assets/images/MongoDB.png'
import MySql from '../assets/images/MySQL.png'
import Node from '../assets/images/Node.js.png'
import ReactIcon from '../assets/images/React.png'
import Java from '../assets/images/java.png'
import Git from '../assets/images/Git.png'
import Express from '../assets/images/Express.png'

function Skills() {
  return (
   <>
    <section class="skills" id="Skills">
        <div class="skill-container">
            <h2>Technologies I whork with</h2>
            <div class="skill-images">
                <div><img src={Html} alt="" />
                    <h1>HTML</h1>
                </div>          
                    <div><img src={Css} alt="" />
                    <h1>CSS</h1>
                </div>
                <div><img src={Javascript} alt="" />
                    <h1>JavaScript</h1>
                </div>
                <div><img src={ReactIcon} alt="" />
                    <h1>React</h1>
                </div>
                <div><img src={Node} alt="" />
                    <h1>Node</h1>
                </div>
                <div><img src={Express} alt="" />
                    <h1>Express</h1>
                </div>
                <div><img src={MangoDB} alt="" />
                    <h1>MongoDB</h1>
                </div>
                <div><img src={Git} alt="" />
                    <h1>Git&Github</h1>
                </div>
                <div><img src={Java} alt="" />
                    <h1>Java</h1>
                </div>
                <div><img src={MySql} alt="" />
                    <h1>MySQL</h1>
                </div>

            </div>
        </div>
        
    </section>
   </>
  );
}

export default Skills;

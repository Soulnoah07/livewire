import React from 'react'
import My from '../assets/images/My.jpeg'


function Home() {
  return (
    <section>
         <article class="full-content">
            <section class="main-content">
                <h2>Hello,I'm <h1 class="myname"> MUTHEESWARAN</h1></h2>
                <h1>You can call me <span class="nickname">NOAH </span></h1>
                <h2 class="domain">MERN STACK DEVELOPER</h2>
                <h2>I build thing for web.</h2>
                <p>I'm a passinoate developer who  loves turning ideas into  clean, modern and user-friendly websites</p>
            </section>
        </article>
{/* <!-- --------------about section --------------------------------> */}
            <article class="about-container" id="about">
                <section class="full-about">
                <div class="about-container1">
                <h2>ABOUT ME</h2>
                <h2>GET TO KNOW MORE!</h2>
                <p>I'm a passinoate full stack developer who loves  turning ideas into real-world applications. I enjoy solving problems. learning new technologies, and building clean, efficient codes.</p>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>MUTHEESWARAN G</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>developer.learnsgood@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>:</td>
                        <td>Salem,Tamilnadu</td>
                    </tr>
                    <tr>
                        <td>Experience</td>
                        <td>:</td>
                        <td>Fresher</td>
                    </tr>
                    <tr>
                        <td>Availability</td>
                        <td>:</td>
                        <td>Open to Work</td>
                    </tr>
                </table>
            <a href="./images/Mutheeswaran CV.pdf" download="mutheeswaran.pdf">Download CV</a>
            </div>
            <div class="about-container2">
                 <img src={My} alt="mutheeswaran-photo" />
                <div class="about-container4">
                    <div class="card">
                        <div class="con2">
                            <h1>0+</h1>
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <div class="card">
                            <div class="con2">
                                <h1>5+</h1>
                                <p>Projects Completed</p>
                            </div>
                    </div>
                    <div class="card">
                        <div class="con2">
                        <h1>100%</h1>
                        <p>Dedication</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </article>
    </section>
  )
}

export default Home

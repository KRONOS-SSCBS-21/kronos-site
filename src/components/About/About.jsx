import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <div>
      <section id="about-us">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 abt-img">
                    <Image class="abt-us-img" data-aos="zoom-in-right" data-aos-duration="900" src={"/assets/images/team_pic.jpg"} alt="vector" height={300} width={300} />
                </div>
                <div class="col-lg-5 abt-us">
                    <h2 class="abt-us-heading" data-aos="zoom-in" data-aos-duration="900">About Us</h2>
                    <p class="a">At  <span style={{color:"#2d81b3", fontWeight:"bold"}}>Kronos,</span> we work on honing our problem solving skills, with a technical knack to it. Our goal is to impart knowledge in the field of IT. We work together to promote
                        a technology-focused mindset and an urge to dive deeper into the developments in the sector that affect our daily lives.</p>
                    <p class="a">We also organise <span style={{color:"#2d81b3", fontWeight:"bold"}}>speaker sessions and workshops,</span> led by industry professionals who enlighten the students about the actual scenario out there in the world.</p>
                    <p class="a">Finally, we organise  <span style={{color:"#2d81b3", fontWeight:"bold"}}>India’s biggest student run hackathon - hackCBS,</span> which is highly renowned among some of the best tech communities all around! hackCBS presents an
                        astounding opportunity to strengthen one’s sense of responsibility and management skills.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

import React from 'react'

const HackCBS = () => {

  return (
    <div>
      <section id="hackCBS">
        <div>
            <h2 className="hackCBS_heading">hackCBS - India's Largest Student Run Hackathon</h2>
        </div>
        <div className="hackCBS-container">
            <div className="hackCBS-image-container logo-desktop">
                <img className="hackCBS-logo" src="assets/images/hackcbs5.0.png" alt="hackCBS logo"/>
            </div>
            <div className="hackCBS-image-container logo-mobile">
                <img className="hackCBS-logo" src="assets/images/hackCBS.png" alt="hackCBS logo"/>
            </div>
            <div className="hackCBS-content">
                <p>Established in 2012, with the motto - “Let it emerge”, Kronos - The Tech Society of SSCBS, is a community accommodating like-minded individuals with a passion for technology and the flexibility to keep evolving with it.
                    <br /><br /> hackCBS, our annual flagship event has not only created its place in the DU circuit but has also created its reach beyond the national boundaries. We frequently organize abundant knowledge sharing sessions like PyDelhi meetup,
                    workshops by coding blocks, coding ninjas and many more also focusing on overall personality development. Kronos eye at providing a healthy environment to enhance our skillset by interacting with the prominent performers with the help
                    of workshops and lectures.
                    <br /><br /> Our individuality in unity helps us to arise as a team and still exercise an area of expertise, prevailing over others.
                </p>
            </div>
        </div>
        <div id="events">
            <div className="container-fluid">
                <div className="events-con">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="caro-pic" src="assets/images/HackCbs/01.jpg" alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic" src="assets/images/HackCbs/02.jpg" alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/03.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/04.jpg"  alt="..." width="929" height="429"/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/05.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/06.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/07.jpg" alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/08.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/09.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/10.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/11.jpg" alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/12.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/13.jpg"  alt="..."/>
                            </div>

                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/14.jpg"  alt="..." width="929" height="429"/>
                            </div>
                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/15.jpg"  alt="..."/>
                            </div>
                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/16.jpg"  alt="..."/>
                            </div>
                            <div className="carousel-item 2ndcarousel-item">
                                <img className="caro-pic " src="assets/images/HackCbs/17.jpg"  alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>

        {/* <div>
            <center>
                <div className="container stat_icons">
                    <div className="row clr-white">
                        <div className="col-lg-2 col-xs-4 stats">
                            <div className="stat-icons">
                                <lord-icon trigger="hover" src="https://cdn.lordicon.com/dxjqoygy.json" colors="primary:#0a2e5c,secondary:#66a1ee" style={{width:"120px",height:"120px"}}>
                                </lord-icon>
                            </div>
                           
                            <div className="stat-counts" data-count="2500">8652</div>
                            <h5>Registrations</h5>
                        </div>
                        <div className="col-lg-2 col-xs-4 stats">
                            <div className="stat-icons">
                                <lord-icon src="https://cdn.lordicon.com/nobciafz.json" trigger="hover" colors="primary:#121331,secondary:#66a1ee" style={{width:"120px",height:"120px"}}>
                                </lord-icon>

                            </div>
                           
                            <div className="stat-counts" data-count="750">3479</div>
                            <h5>Attendees</h5>
                        </div>
                        <div className="col-lg-2 col-xs-4 stats">
                            <div className="stat-icons">
                                <lord-icon src="https://cdn.lordicon.com/jjjmlddk.json" trigger="hover" colors="primary:#121331,secondary:#66a1ee" style={{width:"120px",height:"120px"}}>
                                </lord-icon>
                            </div>
                            <div className="stat-counts" data-count="392">692</div>
                            <h5>Colleges</h5>
                        </div>
                        <div className="col-lg-2 col-xs-4 stats">
                            <div className="stat-icons">
                                <lord-icon src="https://cdn.lordicon.com/zzcjjxew.json" trigger="hover" colors="primary:#121331,secondary:#66a1ee" style={{width:"120px",height:"120px"}}>
                                </lord-icon>
                            </div>
                            <div className="stat-counts" data-count="600">439</div>
                            <h5>Cities</h5>
                        </div>
                        <div className="col-lg-2 col-xs-4 stats">
                            <div className="stat-icons">
                                <lord-icon src="https://cdn.lordicon.com/gqzfzudq.json" trigger="hover" colors="primary:#121331,secondary:#66a1ee" style={{width:"120px",height:"120px"}}>
                                </lord-icon>
                            </div>
                            <div className="stat-counts" data-count="20">20</div>
                            <h5>Countries</h5>
                        </div>
                        <div className="col-lg-2 col-xs-4 stats">
                            <div className="stat-icons">
                                <lord-icon src="https://cdn.lordicon.com/tdxypxgp.json" trigger="hover" colors="primary:#121331,secondary:#66a1ee" style={{width:"120px",height:"120px"}}>
                                </lord-icon>
                            </div>
                            <div className="stat-counts" data-count="10000">20000+</div>
                            <h5>YouTube Views</h5>
                        </div>
                    </div>
                </div>
                <br />
            </center>
        </div> */}
    </section>
    </div>
  )
}

export default HackCBS;

import React from 'react'

const Events = () => {
  return (
    <div>
    <div id="kronos-events-cards" className="kronos-events-cards">
        <div className="kronos-event-heading">Events</div>
        <div className="row row-cols-1 row-cols-md-3 cards row-cards">
            <div className="col mb-4 col-card" data-aos="zoom-in-right">
                <div className="card h-100 Event-Card">
                    <img src={"/assets/images/Events/cyber_hygiene.png"}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="card1-heading">Cyber Hygiene Awareness</h5>
                        <p className="card-text kronos-clamp-desc">A webinar on Cyber Hygiene Awareness by Mr. Nayan Das where he talked about maintaining Cyber Security and Hygiene. </p>
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="kronos-modal">Read more..</button>
                    </div>
                </div>
            </div>
            <div className="col mb-4 col-card" data-aos="zoom-in">
                <div className="card h-100 Event-Card">
                    <img src="assets/images/Events/shantanu-session.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="card2-heading">Intro to DS & Algorithms</h5>
                        <p className="card-text kronos-clamp-desc">A webinar on Intro to DS & Algo by Mr.Shantanu Shubham where he discussed how Data Structures and Algorithms play a vital role in solving problems and also explained what exactly is it, and why is it so important?</p>
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="kronos-modal">Read more..</button>
                    </div>
                </div>
            </div>
            <div className="col mb-4 col-card" data-aos="zoom-in-left">
                <div className="card h-100 Event-Card">
                    <img src={"/assets/images/Events/kunal-session.jpg" }className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="card3-heading">Web Dev Roadmap</h5>
                        <p className="card-text kronos-clamp-desc">A webinar on Web Development roadmap by Mr. Kunal Relan where he discussed the timeframes,resources, and levels of effort required to put in place various ideas, requests, and new functionality.</p>
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="kronos-modal">Read more..</button>
                    </div>
                </div>
            </div>
            <div className="col mb-4 col-card" data-aos="zoom-in-right">
                <div className="card h-100 Event-Card">
                    <img src={"/assets/images/Events/shashank-session.jpg" }className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="card4-heading">Data Analysis Roadmap</h5>
                        <p className="card-text kronos-clamp-desc">A webinar on a complete roadmap to data analysis by Mr. Shashank Mishra where he explained outlines how to implement the strategy’s key initiatives, what skills you need, what kind of people you want, what the timeframe is etc.</p>
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="kronos-modal">Read more..</button>
                    </div>
                </div>
            </div>
            <div className="col mb-4 col-card" data-aos="zoom-in">
                <div className="card h-100 Event-Card">
                    <img src={"/assets/images/Events/ayon-session.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="card5-heading">Introduction to AI & ML</h5>
                        <p className="card-text kronos-clamp-desc">A webinar on Machine Learning and Artificial Intelligence by Mr. Ayon Roy where he explained ML and AI from scratch and how one can excel in this field.
                        </p>
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="kronos-modal">Read more..</button>
                    </div>
                </div>
            </div>
            <div className="col mb-4 col-card" data-aos="zoom-in-left">
                <div className="card h-100 Event-Card">
                    <img src={"/assets/images/Events/github-session.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" id="card6-heading">Code Collab with Github</h5>
                        <p className="card-text kronos-clamp-desc">A webinar on code collaboration with github where we discussed what github is, why we use it, and how to use it </p>
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="kronos-modal">Read more..</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Events

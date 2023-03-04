import React from 'react'
import Image from 'next/image'

export const Landingpage = () => {
  return (
    <div>
      
   
    <div class="modal fade" id="kronos-modal" tabindex="-1" role="dialog" aria-labelledby="kronos-modal-title" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="kronos-modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
            </div>
        </div>
    </div>

    <div class="kronos-top-block-container" id="top-main">

        <div class="navbar fixed-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="kronos-logo" src={"assets/images/kronos-logo.png"} />
                </a>
                <button class="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon">
                    <svg viewBox="0 0 100 80" width="30" height="30">
                      <rect width="100" height="20"></rect>
                      <rect y="30" width="100" height="20"></rect>
                      <rect y="60" width="100" height="20"></rect>
                    </svg>
                  </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#about-us" tabindex="-1" aria-disabled="true">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#events">Latest</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#kronos-events-cards">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="teampage.html">Our Team</a>
                        </li>
                    </ul>
                    <a href="#footer">
                        <button class="btn nav-button btn-outline-light">Contact Us</button>
                    </a>
                  
                </div>
            </div>
        </div>
        <div class="kronos-block-container">
            <div class="kronos-block-inner-container">
                <img class="kronos-banner-section-help" src={"/assets/images/team-building.png"} />
                <div class="kronos-heading-block">
                    <img class="kronos-banner-logo" src={"/assets/images/kronos-logo.png"}/>
                    <h1 class="kronos-h1">THE TECH SOCIETY</h1>
                    <h1 class="kronos-h1">OF SSCBS</h1>
                </div>
              
            </div>
        </div>
    </div>

    <div class="take-up-arrow">
        <a href="#top-main"><img class="arrow-up hide-arrow" src={"assets/images/up-arrow.png"} alt="up-arrow"/></a>
    </div>

    </div>
  )
}
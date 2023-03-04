import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div id="footer">
        <footer className="page-footer">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-3 col-md-3 logo_container align-center">
                        <div className='footer-logo'>
                            <Image src={"/assets/images/Kronos_Black.png"} width={100} height={100} alt="sscbs logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 align-center">
                        <h5 className="text-uppercase font-weight-bold">Links</h5>
                        <hr className="hr-bg mt-0 d-inline-block" style={{width: "70px", height: "3px"}} />
                        <ul className="list-unstyled">
                            <li className="mt-2"><a href="#">Home</a></li>
                            <li className="mt-2"><a href="#">About</a></li>
                            <li className="mt-2"><a href="#">Events</a></li>
                            <li className="mt-2"><a href="#">Our Team</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-2 align-center">
                        <h5 className="text-uppercase font-weight-bold">Archives</h5>
                        <hr className="hr-bg mt-0 d-inline-block" style={{width: "82px", height: "3px"} }/>

                        <ul className="list-unstyled">
                            <li className="my-2">
                                <a href="#"></a>
                            </li>

                            <li className="my-2"><a href="https://hackcbs.tech/">hackCBS 5.0</a></li>
                            <li className="my-2"><a href="https://v4.hackcbs.tech/">hackCBS 4.0</a></li>
                            <li className="my-2"><a href="https://v3.hackcbs.tech/">hackCBS 3.0</a></li>
                            <li className="my-2"><a href="https://v2.hackcbs.tech/">hackCBS 2.0</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-5 col-md-5 align-center" style={{padding: "0 35px"}}>
                        <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
                        <hr className="hr-bg mt-0 d-inline-block" style={{width: "133px", height: "3px"}} />

                        <ul className="list-unstyled">
                            <li className="my-2">
                                <a href="#" className="kronos-footer-link-column">
                                    <i className="fas fa-home"></i> Shaheed Sukhdev College of Business Studies Dr. K.N. Katju Marg Rohini Sector 16, PSP Area IV New Delhi, Delhi 110089
                                </a>
                            </li>
                            <li className="my-2">
                                <div className="kronos-footer-link-column">
                                    <i className="fa fa-phone mr-2"></i>
                                    <a href="tel:8920361039">+91 8920361039
                      <br /> Manya Sajwan
                    </a>
                                </div>
                            </li>
                            <li className="my-2">
                                <div className="kronos-footer-link-column">
                                    <i className="fa fa-phone mr-2"></i>
                                    <a href="tel: 8756399739">+91  8756399739
                      <br /> Vaibhav Srivastava
                    </a>
                                </div>
                            </li>
                            <li className="my-2">
                                <a href="https://forms.gle/XPi3rHKLhDZkGd3i7" id="footer-query">Tell us your Query</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="back">
                <div className="container">
                    <div className="row mt-0 d-flex">
                        <div className="col-md-12 text-center">
                            <a href="https://www.instagram.com/kronos.cbs" target="_blank"><i className="fab fa-instagram "></i></a>
                            <a href="https://in.linkedin.com/company/kronosscbs"><i className="fab fa-linkedin-in "></i></a>
                            <a href="https://twitter.com/cbskronos"><i className="fab fa-twitter "></i></a>
                            <a href="#"><i className="fab fa-youtube "></i></a>
                            <a href="https://www.facebook.com/kronos.sscbs/"><i className="fab fa-facebook-f "></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="kronos-copyright-text" style={{width:"100%"}}>
                <div className="end-container" style={{width:"100%"}}>
                    <h6 ><br />Designed with
                        <i className="fas fa-heart" style={{color:"rgb(255, 0, 0);"}}></i> by Team Kronos</h6>
                </div>
            </div>
            
        </footer>
        </div>

  )
}
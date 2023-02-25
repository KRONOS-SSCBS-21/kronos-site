import Image from "next/image";
const Page = () => {
    return(
   
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

<div class="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img class="kronos-logo" src="/assets/images/kronos-logo.png" />
            <img class="kronos-logo sticky" src="assets/images/kronos-logo-black.png"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
                <svg viewBox="0 0 100 80" width="30" height="30">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </span>
        </button>
        <div class="navbar-collapse collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html#about-us" tabindex="-1" aria-disabled="true">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html#events">Latest</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html#kronos-events-cards">Events</a>
                </li>
            </ul>
            <a href="#footer">
                <button class="btn nav-button btn-outline-light">Contact Us</button>
            </a>
            
        </div>
    </div>
</div>

    <div class="kronos-page-container" id="top-team-pg">
        <h1 class="heading">Meet <span style={{color: "#014FC6"}}>Our</span> Team</h1>

        <div class="team-cards-responsive">
            <div class="members-cards-year3">
                <div class="card h-70 PORs-Card">
                    <img src="/assets/images/team_members/acs_2022/Rishabh1.jpeg" class="member-images-year3" alt="President"/>

                    <div class="member-card-body">
                        <h5 class="card-title">Rishabh Sharma<br/>(President)</h5>
                        <div class="member-social-media">
                            <a href="https://www.instagram.com/rs_the_wanderer/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/rishabhsharma2023"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://mobile.twitter.com/RishabhXWebD"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year3">
                <div class="card h-70 PORs-Card">
                    <Image src={"/assets/images/team_members/acs_2022/Shyaamal.jpg"} width={100} height={100} class="member-images-year3" alt="Vice-President"/>

                    <div class="member-card-body ">
                        <h5 class="card-title">Shyaamal Tripathi<br/>(Vice-President)</h5>
                        <div class="member-social-media">
                            <a href="https://www.instagram.com/shyaamaltripathi/"><i class="fab fa-instagram"></i></a>
                            <a href="linkedin.com/in/shyaamal-tripathi-a389051b3"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/ShyaamalTripat2?t=-0YQZejDaB85WQjPRe6ddQ&s=09"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="take-up-arrow">
            <a href="#top-team-pg"><img class="arrow-up" src="assets/images/up-arrow.png" alt="up-arrow"/></a>
        </div>
        <div>
            <h3 class="team-heading" id="team_heading_ac"><span style={{color: "#014FC6"}}>Advisory Committee</span> Members</h3>
        </div>
        <div class="team-cards-oc">

            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/Ayush_Gupta.jpg" class="member-images" alt="Organising"/>
                    <div class="member-card-body">
                        <h5 class="card-title">Ayush Gupta</h5>
                        <div class="member-social-media-oc">
                            <a href="https://www.instagram.com/i.ayush.gupta/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ayush-gupta-274445200/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/Chinmay.jpeg" class="member-images" alt="Organising"/>
                    <div class="member-card-body">
                        <h5 class="card-title">Chinmay Pant</h5>
                        <div class="member-social-media-oc">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/chinmay-pant-565277200/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/Dimple.png" class="member-images" alt="Organising"/>
                    <div class="member-card-body">
                        <h5 class="card-title">Dimple kalal</h5>
                        <div class="member-social-media-oc">
                            <a href="https://www.instagram.com/dimpi_369/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/dimple-kalal-29ba97201"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/Divyanshi.jpg" class="member-images" alt="Organising"/>
                    <div class="member-card-body">
                        <h5 class="card-title">Divyanshi Kapoor</h5>
                        <div class="member-social-media-oc">
                            <a href="https://www.instagram.com/divyanshi_kapoor/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/divyanshi-kapoor-680785207"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/lakshay.jpg" class="member-images" alt="Organising"/>
                    <div class="member-card-body">
                        <h5 class="card-title">Lakshya Rawat</h5>
                        <div class="member-social-media-oc">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/lakshya-r-155773195/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/mukul.JPG" class="member-images" alt="Organising"/>
                    <div class="member-card-body">
                        <h5 class="card-title">Mukul Bisht</h5>
                        <div class="member-social-media-oc">
                            <a href="https://www.instagram.com/mukulwho/"><i class="fab fa-instagram"></i></a>
                            <a href="http://www.linkedin.com/in/mukul-bisht-099781206"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/Pankaj.png" class="member-images" alt="Organising"/>
                    <div class="member-card-body">
                        <h5 class="card-title">Pankaj Prajapati</h5>
                        <div class="member-social-media-oc">
                            <a href="https://www.instagram.com/paprajapati9/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/pankaj-prajapati-668982163"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards">
                <div class="card h-70">
                    <img src="assets/images/team_members/acs_2022/Pooja.jpg" class="member-images" alt="Organising"/>

                    <div class="member-card-body">
                        <h5 class="card-title">Pooja Goyal</h5>
                        <div class="member-social-media-oc">
                            <a href="https://www.instagram.com/_its_.pooja_/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/pooja-925850202"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h3 class="team-heading" id="team_heading_cc"><span style={{color:" #014FC6"}}>Core Committee</span> Members</h3>
        </div>
        <div class="team-cards">
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Ajay.jpg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Ajay Kumar</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/ajaykum_r_/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ajay-kumar-091b2a188/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Allen_Pandey.jpg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body"  style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Allen Pandey</h5>
                        <div class="member-social-media-cc">
                            <a href="https://instagram.com/allen.pandey?igshid=YmMyMTA2M2Y="><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/allen-pandey-22b148229"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Aryan.png" class="member-images-year2" alt="ARYAN SETHI"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Aryan Sethi</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/_._aryannnn_._/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/aryan-sethi-54785a1a9/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.twitter.com/AryanSe73817078"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Aryan_Pratap.png" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Aryan Pratap</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/stern_aryan/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/aryan-pratap-singh-arya-01184922a/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://mobile.twitter.com/Stern_Aryan"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/bhavika.jpeg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Bhavika Malhotra</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/bhavikamalhotraa/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/bhavika-malhotra-208123235/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Divjot_Singh.JPEG" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Divjot Singh</h5>
                        <div class="member-social-media-cc">
                            <a href="https://instagram.com/21divjot?igshid=YmMyMTA2M2Y="><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/divjot-singh-4ba43622a/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/divjot21?s=11"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Manya.png" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Manya Sajwan</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/yoooits_manu/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/manya-sajwan-a9a575234/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Piyush.jpg" class="member-images-year2" alt="Piyush"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Piyush Upadhyay</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/its7_piyush/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/piyush-upadhyay-86610022a/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Saksham.jpg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Saksham Duhan</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/major_f_/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/saksham-duhan-48a536229/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Sarthak Krishna.jpg" class="member-images-year2" alt="Sarthak"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Sarthak Krishna</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/sarthakrishna1/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/sarthak-krishna-849147238/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/Sarthak_925?t=wC_seho_O-js8U7ykqOs4Q&s=09"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
        
            </div>
           
           
            <div class="members-cards-year2 lastfour team">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Sruti.jpg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Sruti Kumari</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/i_sruti.sinha/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/sruti-kumari-010063212/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Vaibhav.jpg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Vaibhav Srivastava</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/invites/contact/?i=1s8x8wsivx0jk&utm_content=2cbl7w2"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/vaibhav-srivastava-8673591ba"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/Vaibhav15315177"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
           
            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Vibhor.jpeg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Vibhor Mathur</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/vibhor._mathur/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/vibhor-mathur-3019b9223/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://mobile.twitter.com/Vibhor2112"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="members-cards-year2">
                <div class="card h-70">
                    <img src="assets/images/team_members/ccs_2022/Yashmeet.jpg" class="member-images-year2" alt="Core"/>

                    <div class="member-card-body" style={{paddingTop:"80px"}}>
                        <h5 class="card-title">Yashmeet Singh</h5>
                        <div class="member-social-media-cc">
                            <a href="https://www.instagram.com/_yashmeet_/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/yashmeet-singh-978762222/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    


        <div class="take-up-arrow">
            <a href="#top-team-pg"><img class="arrow-up" src="assets/images/up-arrow.png" alt="up-arrow"/></a>
        </div>


 
                <div id="footer">
                    <div class="page-footer">  
                    <div class="container">
                    <div class="row justify-content-around">
                        <div class="col-lg-3 col-md-3 logo_container align-center">
                            <div  class='footer-logo'>
                                <img src="./assets/images/Kronos_Black.png" alt="sscbs logo"/>
                            </div>
                        </div>    
                        <div class="col-lg-2 col-md-2 align-center">
                        <h5 class="text-uppercase font-weight-bold">Links</h5>
                        <hr class="hr-bg mt-0 d-inline-block" style={{width: "70px", height: "3px"}} />
                        <ul class="list-unstyled">
                            <li class="mt-2"><a href="#">Home</a></li>
                            <li class="mt-2"><a href="#">About</a></li>
                            <li class="mt-2"><a href="#">Events</a></li>
                            <li class="mt-2"><a href="#">Our Team</a></li>
                        </ul>
                        </div>

                        <div class="col-lg-2 col-md-2 align-center">
                        <h5 class="text-uppercase font-weight-bold">Archives</h5>
                        <hr class="hr-bg mt-0 d-inline-block" style={{width: "82px", height: "3px"}}/>

                        <ul class="list-unstyled">
                            <li class="my-2"><a href="https://www.hackcbs.tech/">hackCBS 5.0</a></li>
                            <li class="my-2"><a href="https://hackcbs.tech/">hackCBS 4.0</a></li>
                            <li class="my-2"><a href="https://v3.hackcbs.tech/">hackCBS 3.0</a></li>
                            <li class="my-2"><a href="https://v2.hackcbs.tech/">hackCBS 2.0</a></li>
                        </ul>
                        </div>

                        <div class="col-lg-5 col-md-5 align-center" style={{padding: "0 35px"}}>
                            <h5 class="text-uppercase font-weight-bold">Contact Us</h5>
                            <hr class="hr-bg mt-0 d-inline-block" style={{width: "133px", height: "3px"}}/>

                            <ul class="list-unstyled">
                            <li class="my-2"><a href="#" class="kronos-footer-link-column">
                                <i class="fas fa-home"></i> 
                                Shaheed Sukhdev College of Business Studies
                                Dr. K.N. Katju Marg
                                Rohini Sector 16, PSP Area IV
                                New Delhi, Delhi 110089
                            </a></li>
                            <li class="my-2">
                                <div class="kronos-footer-link-column">
                                <i class="fa fa-phone mr-2"></i>
                                <a href="tel:8960043482">+91 8920361039
                                    <br/> Manya Sajwan
                                </a>
                                </div>
                            </li>
                            <li class="my-2">
                                <div class="kronos-footer-link-column">
                                <i class="fa fa-phone mr-2"></i>
                                <a href="tel:8800455690">+91 8756399739
                                    <br/> Vaibhav Srivastava
                                </a>
                                </div>
                            </li>
                            <li class="my-2">
                                <a href="https://forms.gle/XPi3rHKLhDZkGd3i7" id="footer-query">Tell us your Query</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div class="back">
                        <div class="container">
                            <div class="row mt-0 d-flex">
                                <div class="col-md-12 text-center">
                                    <a href="https://www.instagram.com/kronos.cbs" target="_blank"><i class="fab fa-instagram "></i></a>
                                    <a href="https://in.linkedin.com/company/kronosscbs"><i class="fab fa-linkedin-in "></i></a>
                                    <a href="https://twitter.com/cbskronos"><i class="fab fa-twitter "></i></a>
                                    <a href="#"><i class="fab fa-youtube "></i></a>
                                    <a href="https://www.facebook.com/kronos.sscbs/"><i class="fab fa-facebook-f "></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="kronos-copyright-text" style={{width:"100%"}}>
                        <div class="end-container" style={{width:"100%"}}>
                            <h6 style={{textAlign:"center "}}><br/>Designed with 
                                <i Class="fas fa-heart" style={{color:"#ff0000"}}></i> by Team Kronos</h6>
                        </div>
                    </div>
                    </div>
                </div>


</div>
</div>


)
  }

  export default Page;
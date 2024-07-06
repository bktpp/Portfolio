import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Bradley Padayao,</span> a Web
              Developer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              Hello! I'm a self taught web developer with a passion for learning
              and growing in this industry. My journey into web development
              started as a hobby which quickly turned into pursuing this
              professionally. I've spent countless hours honing my skills and I
              bring this commitment to every project I take on.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              My goal is to create user-friendly interfaces that meets the needs
              of the business as well as their customers. I believe the key to
              success is continous learning and I'm excited about the
              opportunites to further my skills and contribute to the tech
              industry.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Bradley Padayao
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:bktp@protonmail.ch">bktp@protonmail.ch</a>
                </li>
                {/* <li>
                           <span className="fw-600 me-2">Age:</span>35
                        </li> */}
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Kapolei, Hawaii
                </li>
              </ul>
              <a
                // href="about"
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* <div
               className={
                  "brands-grid separator-border mt-5 " + (darkTheme ? "separator-border-light" : "")
               }
            >
               <div className="row">
                  <div className="col-6 col-md-3">
                     <div className="featured-box text-center">
                        <h4
                           className={
                              "text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")
                           }
                        >
                           <span>10</span>+
                        </h4>
                        <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                           Years Experiance
                        </p>
                     </div>
                  </div>
                  <div className="col-6 col-md-3">
                     <div className="featured-box text-center">
                        <h4
                           className={
                              "text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")
                           }
                        >
                           <span>250</span>+
                        </h4>
                        <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>Happy Clients</p>
                     </div>
                  </div>
                  <div className="col-6 col-md-3">
                     <div className="featured-box text-center">
                        <h4
                           className={
                              "text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")
                           }
                        >
                           <span>650</span>+
                        </h4>
                        <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>Projects Done</p>
                     </div>
                  </div>
                  <div className="col-6 col-md-3">
                     <div className="featured-box text-center">
                        <h4
                           className={
                              "text-12  mb-0 " + (darkTheme ? "text-white-50" : "text-muted")
                           }
                        >
                           <span>38</span>
                        </h4>
                        <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>Get Awards</p>
                     </div>
                  </div>
               </div>
            </div> */}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;

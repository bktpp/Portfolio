import React from "react";
import resumeFile from "../documents/resume.pdf";
import imgHtml from "../img/html5.png";
import imgCss from "../img/css3.png";
import imgJs from "../img/javascript.png";
import imgSass from "../img/sass.png";
import imgReact from "../img/react.png";
import imgGit from "../img/git.png";

const Resume = ({ classicHeader, darkTheme }) => {
   const educationDetails = [
      {
         yearRange: "2002 - 2006",
         title: "Business Academy",
         place: "Kapolei High School",
         desc: "High School Diploma, Cum Laude.",
      },
      // {
      //    yearRange: "2006 - 2007",
      //    title: "Bachelors Degree",
      //    place: "University of California",
      //    desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      // },
      // {
      //    yearRange: "2009 - 2012",
      //    title: "Master Degree",
      //    place: "Harvard University",
      //    desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      // },
   ];

   const experienceDetails = [
      {
         yearRange: "2018 - current",
         title: "Network Success Expert",
         place: "Asurion",
         desc: "Providing support for field techs and coaches in various markets.",
      },
      {
         yearRange: "2017 - 2018",
         title: "PSE Clerk",
         place: "USPS",
         desc: "Sort mail and packages to proper routes for delivery.",
      },
      {
         yearRange: "2016 - 2017",
         title: "Head Tech",
         place: "Batteries Plus Bulbs",
         desc: "Perform cell phone repairs, install vehicle batteries and train other technicians.",
      },
   ];

   const skills = [
      {
         name: "HTML",
         percent: 65,
         img: imgHtml,
      },
      {
         name: "CSS",
         percent: 95,
         img: imgCss,
      },
      {
         name: "JavaScript",
         percent: 80,
         img: imgJs,
      },
      {
         name: "Sass",
         percent: 70,
         img: imgSass,
      },
      {
         name: "React",
         percent: 60,
         img: imgReact,
      },
      {
         name: "Git",
         percent: 99,
         img: imgGit,
      },
   ];

   return (
      <section id="resume" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
         <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
            {/* Heading */}
            <div className="position-relative d-flex text-center mb-5">
               <h2
                  className={
                     "text-24  text-uppercase fw-600 w-100 mb-0 " +
                     (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
                  }
               >
                  Summary
               </h2>
               <p
                  className={
                     "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                     (darkTheme ? "text-white" : "text-dark")
                  }
               >
                  {" "}
                  Resume
                  <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
               </p>
            </div>
            {/* Heading end*/}
            <div className="row gx-5">
               {/* My Education */}
               <div className="col-md-6">
                  <h2 className={"text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")}>
                     My Education
                  </h2>
                  {educationDetails.length > 0 &&
                     educationDetails.map((value, index) => (
                        <div
                           key={index}
                           className={
                              "bg-white  rounded p-4 mb-4 " +
                              (darkTheme ? "bg-dark" : "bg-white border")
                           }
                        >
                           <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                           <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                              {value.title}
                           </h3>
                           <p className={darkTheme ? "text-primary" : "text-danger"}>
                              {value.place}
                           </p>
                           <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                              {value.desc}
                           </p>
                        </div>
                     ))}
               </div>
               {/* My Experience */}
               <div className="col-md-6">
                  <h2 className={"text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")}>
                     My Experience
                  </h2>
                  {experienceDetails.length > 0 &&
                     experienceDetails.map((value, index) => (
                        <div
                           key={index}
                           className={
                              "bg-white  rounded p-4 mb-4 " +
                              (darkTheme ? "bg-dark" : "bg-white border")
                           }
                        >
                           <p className="badge bg-primary text-2 fw-400">{value.yearRange}</p>
                           <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                              {value.title}
                           </h3>
                           <p className={darkTheme ? "text-primary" : "text-danger"}>
                              {value.place}
                           </p>
                           <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                              {value.desc}
                           </p>
                        </div>
                     ))}
               </div>
            </div>
            {/* My Skills */}
            <h2 className={"text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")}>
               My Skills
            </h2>
            {/* className="row gx-5" took out div below */}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
               {skills.length > 0 &&
                  skills.map((skill, index) => (
                     // className="col-md-6" took out div below
                     <div key={index} style={{ padding: "0 2rem" }}>
                        {/* <p
                           className={
                              " fw-500 text-start mb-2 " + (darkTheme ? "text-light" : "text-dark")
                           }
                        >
                           {skill.name} <span className="float-end">{skill.percent}%</span>
                        </p> */}
                        <img src={skill.img} alt={skill.name} style={{ width: "3rem" }} />
                        {/* <div
                           className={"progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")}
                        > */}
                        {/* <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.percent + "%" }}
                              aria-valuenow={skill.percent}
                              aria-valuemin={0}
                              aria-valuemax={100}
                           /> */}
                        {/* </div> */}
                     </div>
                  ))}
            </div>
            <div className="text-center mt-5">
               <a
                  className="btn btn-outline-secondary rounded-pill shadow-none"
                  // href="about"
                  href={resumeFile}
                  download
               >
                  Download CV
                  <span className="ms-1">
                     <i className="fas fa-download" />
                  </span>
               </a>
            </div>
         </div>
      </section>
   );
};

export default Resume;

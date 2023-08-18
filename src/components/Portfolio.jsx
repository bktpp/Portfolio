import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
   // init one ref to store the future isotope object
   const isotope = useRef();
   // store the filter keyword in a state
   const [filterKey, setFilterKey] = useState("*");
   const [imagesLoaded, setimagesLoaded] = useState(0);
   const [selectedProjectDetails, setSelectedProjectDetails] = useState();

   const filters = {
      WEBPAGE: "Webpage",
      TRANSACTIONAL: "Transactional",
      PROMO: "Promotional",
      NEWSLETTER: "Newsletter",
   };

   const projectsData = [
      {
         title: "Apple.com clone",
         projectInfo:
            "This project is a reconstruction of Apple's homepage, demonstrating my understanding of modern web development and design principles. It's a testament to my skills in responsive design, and the ability to accurately replicate complex websites.",
         //  client: "Ruby Clinton",
         technologies: "HTML, CSS, SASS",
         date: "July 16, 2019",
         url: {
            name: "bktpp.github.io/Apple-clone",
            link: "https://bktpp.github.io/Apple-clone/",
         },
         code: {
            name: "github.com/bktpp/Apple-clone",
            link: "https://github.com/bktpp/Apple-clone",
         },
         socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
         },
         thumbImage: "images/projects/apple-landing.png",
         sliderImages: [
            "images/projects/apple-landing-2.png",
            "images/projects/apple-landing-3.png",
         ],
         categories: [filters.WEBPAGE],
         type: "Landing Page",
      },
      {
         title: "Google Play clone",
         projectInfo:
            "I have created a cloned Google Play transactional email receipt. It accurately replicates the format and content of a genuine Google Play email receipt, including the order number, purchase details, and payment information. The purpose of this clone is to showcase my ability to recreate and design transactional emails with attention to detail and accuracy.",
         client: "Ruby Clinton",
         technologies: "HTML, CSS",
         industry: "Art & Design",
         date: "July 16, 2019",
         url: {
            name: "bktpp.github.io/googleplay-receipt-demo",
            link: "https://bktpp.github.io/googleplay-receipt-demo/",
         },
         code: {
            name: "github.com/bktpp/googleplay-receipt-demo",
            link: "https://github.com/bktpp/googleplay-receipt-demo",
         },
         socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
         },
         thumbImage: "images/projects/gp-email.png",
         // sliderImages: ["images/projects/gp-email-2.png"],
         categories: [filters.TRANSACTIONAL],
         type: "Transactional email",
      },
      {
         title: "Techpro Autoglass",
         projectInfo:
            "Here is webpage I've built for TechPro AutoGlass, utilizing HTML, Sass, and JavaScript. This project demonstrates my ability to construct responsive webpages that are user-friendly and visually appealing. Through the use of Sass, I've created a streamlined and efficient design process, while JavaScript has allowed me to implement dynamic features, enhancing the overall user experience.",
         client: "Ruby Clinton",
         technologies: "HTML, SASS, JAVASCRIPT",
         industry: "Art & Design",
         date: "July 16, 2019",
         url: {
            name: "bktpp.github.io/techpro-autoglass/",
            link: "https://bktpp.github.io/techpro-autoglass/",
         },
         code: {
            name: "github.com/bktpp/techpro-autoglass",
            link: "https://github.com/bktpp/techpro-autoglass",
         },
         socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
         },
         thumbImage: "images/projects/tpa.png",
         sliderImages: ["images/projects/tpa-2.png", "images/projects/tpa-3.png"],
         categories: [filters.WEBPAGE],
         type: "Landing page",
      },
      {
         title: "Spectrum clone",
         projectInfo:
            "This project showcases my ability to design and code HTML emails that are visually appealing, responsive, and effective in achieving marketing goals. It mirrors the structure and content of an original Spectrum promotional email.",
         client: "Ruby Clinton",
         technologies: "HTML, CSS",
         industry: "Art & Design",
         date: "July 16, 2019",
         url: {
            name: "bktpp.github.io/demo-spectrum-promo/",
            link: "https://bktpp.github.io/demo-spectrum-promo/",
         },
         code: {
            name: "github.com/bktpp/demo-spectrum-promo",
            link: "https://github.com/bktpp/demo-spectrum-promo",
         },
         socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
         },
         thumbImage: "images/projects/spectrum-email.png",
         sliderImages: ["images/projects/spectrum-email-2.png"],
         categories: [filters.PROMO],
         type: "Promotional email",
      },
      {
         title: "Netlify clone",
         projectInfo:
            "Built with HTML and CSS, This project not only demonstrates my proficiency in these languages but also my ability to replicate real-world marketing materials.",
         client: "Ruby Clinton",
         technologies: "HTML, CSS",
         industry: "Art & Design",
         date: "July 16, 2019",
         url: {
            name: "bktpp.github.io/Netlify-newletter-demo/",
            link: "https://bktpp.github.io/Netlify-newletter-demo/",
         },
         code: {
            name: "github.com/bktpp/Netlify-newletter-demo",
            link: "https://github.com/bktpp/Netlify-newletter-demo",
         },
         socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
         },
         thumbImage: "images/projects/netlify-email.png",
         sliderImages: ["images/projects/netlify-email-2.png"],
         categories: [filters.NEWSLETTER],
         type: "Newsletter email",
      },
      {
         title: "Best Buy clone",
         projectInfo:
            "The purpose of this project is to showcase my ability to recreate and design transactional emails with an emphasis on detail and accuracy. Demonstrating my understanding of the importance of transactional emails in maintaining customer relationships and driving repeat business.",
         client: "Ruby Clinton",
         technologies: "HTML, CSS",
         industry: "Art & Design",
         date: "July 16, 2019",
         url: {
            name: "bktpp.github.io/demo-bestbuy-receipt/",
            link: "https://bktpp.github.io/demo-bestbuy-receipt/",
         },
         code: {
            name: "github.com/bktpp/demo-bestbuy-receipt",
            link: "https://github.com/bktpp/demo-bestbuy-receipt",
         },
         socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
         },
         thumbImage: "images/projects/bestbuy.png",
         sliderImages: ["images/projects/bestbuy-2.png"],
         categories: [filters.TRANSACTIONAL],
         type: "Transactional email",
      },
      {
         title: "Bath & Body Works clone",
         projectInfo:
            "This project mirrors the structure and content of an original Bath & Body Works promotional email. It shows my ability to recreate the precise layout and content while adhering to best practices in email development.",
         client: "Ruby Clinton",
         technologies: "HTML, CSS",
         industry: "Art & Design",
         date: "July 16, 2019",
         url: {
            name: "bktpp.github.io/bath-body-works-demo/",
            link: "https://bktpp.github.io/bath-body-works-demo/",
         },
         code: {
            name: "github.com/bktpp/bath-body-works-demo",
            link: "https://github.com/bktpp/bath-body-works-demo",
         },
         socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
         },
         thumbImage: "images/projects/bbw.png",
         sliderImages: ["images/projects/bbw-2.png", "images/projects/bbw-3.png"],
         categories: [filters.PROMO],
         type: "Promotional email",
      },
   ];

   // initialize an Isotope object with configs
   useEffect(() => {
      isotope.current = new Isotope(".portfolio-filter", {
         itemSelector: ".filter-item",
         layoutMode: "masonry",
      });

      // cleanup
      return () => {
         isotope.current.destroy();
      };
   }, []);

   // handling filter key change
   useEffect(() => {
      if (imagesLoaded) {
         filterKey === "*"
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
      }
   }, [filterKey, imagesLoaded]);

   const handleFilterKeyChange = (key) => () => setFilterKey(key);

   return (
      <>
         <section id="portfolio" className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}>
            <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
               {/* Heading */}
               <div className="position-relative d-flex text-center mb-5">
                  <h2
                     className={
                        "text-24  text-uppercase fw-600 w-100 mb-0 " +
                        (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
                     }
                  >
                     Portfolio
                  </h2>
                  <p
                     className={
                        "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                        (darkTheme ? "text-white" : "text-dark")
                     }
                  >
                     {" "}
                     My Work
                     <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                  </p>
               </div>
               {/* Heading end*/}
               {/* Filter Menu */}
               <ul
                  className={
                     "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
                     (darkTheme ? "nav-light" : "")
                  }
               >
                  <li className="nav-item">
                     <button
                        className={"nav-link " + (filterKey === "*" ? "active" : "")}
                        onClick={handleFilterKeyChange("*")}
                     >
                        All
                     </button>
                  </li>
                  {Object.keys(filters).map((oneKey, i) => (
                     <li className="nav-item" key={i}>
                        <button
                           className={"nav-link " + (filterKey === filters[oneKey] ? "active" : "")}
                           onClick={handleFilterKeyChange(filters[oneKey])}
                        >
                           {filters[oneKey]}
                        </button>
                     </li>
                  ))}
               </ul>
               {/* Filter Menu end */}
               <div className="portfolio popup-ajax-gallery">
                  <div className="row portfolio-filter filter-container g-4">
                     {projectsData.length > 0 &&
                        projectsData.map((project, index) => (
                           <div
                              className={
                                 "col-sm-6 col-lg-4 filter-item " + project.categories.join(" ")
                              }
                              key={index}
                           >
                              <div className="portfolio-box rounded">
                                 <div className="portfolio-img rounded">
                                    <img
                                       onLoad={() => {
                                          setimagesLoaded(imagesLoaded + 1);
                                       }}
                                       className="img-fluid d-block portfolio-image"
                                       src={project.thumbImage}
                                       alt="Apple clone webpage"
                                    />
                                    <div className="portfolio-overlay">
                                       {/* eslint-disable-next-line */}
                                       <a
                                          className="popup-ajax stretched-link"
                                          href="about"
                                          onClick={() => {
                                             setSelectedProjectDetails(projectsData[index]);
                                          }}
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                          aria-label="Project details"
                                       />
                                       <div className="portfolio-overlay-details">
                                          <h5 className="text-white fw-400">{project.title}</h5>
                                          <span className="text-light">{project.type}</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                  </div>
               </div>
            </div>
         </section>
         <div className="project-details-modal">
            {/* Modal */}
            <ProjectDetailsModal
               projectDetails={selectedProjectDetails}
               darkTheme={darkTheme}
            ></ProjectDetailsModal>
         </div>
      </>
   );
};

export default Portfolio;

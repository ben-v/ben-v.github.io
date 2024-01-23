import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-briefcase" />Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Solution Architect - </span>Resideo
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2022 - 2023
          </span>
          <p>
            Key member of architectural team advocating model-first approach, engineering innovation, and process optimization, enhancing product development and architectural efficiency.
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Software Engineer - </span>Infinetix
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2019 - 2022
          </span>
          <p>
            Developed .NET applications for real-time data visualization and IoT integrations in agriculture, and evaluated OpenFMB/MQTT-SN protocol efficiency.
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Senior Engineer II - </span>Nordstrom
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2017 - 2019
          </span>
          <p>
            Created a modern, service-oriented architectural plan for {`Nordstrom's`} private label, enhancing UX and business growth.
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Director of Engineering - </span>Schedulicity
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2016 - 2017
          </span>
          <p>
            Restructured engineering team for 250% productivity gain, established on-call protocols, centralized documentation and notifications, and architected vendor integration using modern technologies.
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Senior Staff Engineer - </span>Nordstrom
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2006 - 2015
          </span>
          <p>
            Led technical initiatives focused on business growth through developer productivity, streamlined process improvements and creating highly motivated and collaborative team environemnts.
          </p>
        </div>
        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-graduation-cap" />Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Computer Science, Italian Studies - </span>Gonzaga University
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 1990 - 1995
          </span>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            Gonzaga in Florence - Florence, Italy
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 1993 - 1994
          </span>
        </div>
        {/* Single Education Ends */}
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-star" />Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">html</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">javascript</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">css</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">php</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star-o" />{" "}
                <i className="fa-solid fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">jquery</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">angular js</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star-o" />{" "}
                <i className="fa-solid fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">wordpress</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">joomla</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star-half-empty" />{" "}
                <i className="fa-solid fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">magento</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">drupal</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Adobe Photoshop</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Adobe illustrator</h6>
              <p>
                <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star" />{" "}
                <i className="fa-solid fa-star-half-empty" />{" "}
                <i className="fa-solid fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();
  
  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: "About", last: "ME" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container infos">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-address-card" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <picture>
                <img
                  src="images/bio-pic.jpg"
                  className="responsive-img my-picture"
                  alt="My Photo"
                />
              </picture>
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <span><i className="fa-solid fa-user" /></span>Personal Info
              </h6>
              <div className="col m12 l12 xl12 p-none">
                <p className="second-font">
                  I specialize in building highly productive and effective
                  engineering teams for small to medium-sized businesses. My
                  approach is rooted in the belief that the best solutions
                  emerge from diverse minds working together. I am driven by a
                  combination of customer focus, collaborative teamwork, and
                  creative thinking. This blend is essential in creating
                  organizations that harness such energy. My methodology is
                  anchored in constantly challenging the status quo, asking{" "}
                  {`'why'`} and {`'how'`}, envisioning future-ready solutions,
                  and guiding projects from ideation to realization. This
                  approach enables me to craft solutions that not only address{" "}
                  {`today's`} challenges but also anticipate {`tomorrow's`}{" "}
                  needs.
                </p>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-1">
                  <li>
                    <span><i className="fa-regular fa-flag"></i></span><div className="font-weight-700">Nationality:</div>US
                  </li>
                  <li>
                    <span><i className="fa-regular fa-handshake"></i></span><div className="font-weight-700">Open To: </div>Freelance/1099, W-2
                  </li>
                </ul>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span><i className="fa-solid fa-globe"></i></span><div className="font-weight-700">Langages: </div>English, Italian (Intermediate)
                  </li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              {/* <div>
                <a href="#" className="btn font-weight-700">
                  Download Resume <i className="fa-solid fa-file-pdf-o" />
                </a>
                <Link href={`/blog-dark`}>
                  <a className="btn font-weight-700">
                    My Blog <i className="fa-solid fa-edit" />
                  </a>
                </Link>
                <Link href={`/blog-dark`}>
                <a className="btn font-weight-700">
                  Get In Touch <i className="fa-solid fa-send" />
                </a>
              </Link>              
              </div> */}
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: "none" }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                <div
                  className={`resume-list-item ${activeState.active === 0 ? "is-active" : ""
                    }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span><i className="fa-solid fa-briefcase" /></span>Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${activeState.active === 1 ? "is-active" : ""
                    }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span><i className="fa-solid fa-graduation-cap" /></span>Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${activeState.active === 2 ? "is-active" : ""
                    }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span><i className="fa-solid fa-star" /></span>Skills
                    </h6>
                  </div>
                </div>
                {/* Divider Starts */}
                <div className="divider center-align">
                  <span className="outer-line" />
                  <span className="fa fa-download" aria-hidden="true" />
                  <span className="outer-line" />
                </div>
                {/* Divider Ends */}
                <div className="resume-list-item is-active">
                  <div
                    className="resume-list-item-inner"
                    onClick={() => alert("click download")}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <span><i className="fa-solid fa-file-pdf" /></span>Resume
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience Starts */}
                    <div
                      className={`resume-card resume-card-0 ${activeState.active == 0
                          ? "front"
                          : activeState.active == 2
                            ? "back"
                            : "back-back"
                        }`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={`resume-card resume-card-1 ${active == 1
                          ? "front"
                          : active == 0
                            ? "back"
                            : "back-back"
                        }`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={`resume-card resume-card-2 ${active == 2
                          ? "front"
                          : active == 1
                            ? "back"
                            : "back-back"
                        }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);

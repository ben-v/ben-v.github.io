import Link from "next/link";
import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa-solid fa-briefcase heading-icon-spacer" />Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Web Designer - </span>Envato
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2015 - 2023
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Web Developer - </span>Google
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2011 - 2015
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Community Manager - </span>Adobe
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2007 - 2011
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
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
        <i className="fa-solid fa-graduation-cap heading-icon-spacer" />Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Engineering Diploma - </span>Oxford University
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2015 - 2023
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Masters Degree - </span>Paris University
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2011 - 2015
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Bachelor Degree - </span>Berlin Higher Institute
          </h6>
          <span className="date">
            <i className="fa-regular fa-calendar"></i> 2007 - 2011
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
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
        <i className="fa-solid fa-star heading-icon-spacer" />Skills
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
                <i className="fa-solid fa-user heading-icon-spacer" />Personal Info
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
                    <span className="font-weight-700"><i className="fa-regular fa-flag heading-icon-spacer"></i>Nationality: </span>
                    US
                  </li>
                  <li>
                    <span className="font-weight-700"><i className="fa-regular fa-handshake heading-icon-spacer"></i>Available For: </span>
                    Freelance, C2H, W2
                  </li>
                </ul>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span className="font-weight-700"><i className="fa-solid fa-globe heading-icon-spacer"></i>Langages: </span>
                    English, Italian (Intermediate)
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
                  className={`resume-list-item ${
                    activeState.active === 0 ? "is-active" : ""
                  }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa-solid fa-briefcase heading-icon-spacer" />Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? "is-active" : ""
                  }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa-solid fa-graduation-cap heading-icon-spacer" />Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? "is-active" : ""
                  }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa-solid fa-star heading-icon-spacer" />Skills
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
                      <i className="fa-solid fa-file-pdf heading-icon-spacer" />Resume
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
                      className={`resume-card resume-card-0 ${
                        activeState.active == 0
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
                      className={`resume-card resume-card-1 ${
                        active == 1
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
                      className={`resume-card resume-card-2 ${
                        active == 2
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

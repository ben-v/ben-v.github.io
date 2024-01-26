import { memo, useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
// import { LocalVideo } from "./ItemDetailsContent";

import dynamic from "next/dynamic";

const ProjectSlider = dynamic(() => import("./ItemDetailsContent"), {
  ssr: false,
});

const ProjectDetails = () => {
  const {
    activeProject,
    showProject,
    showProjectFunction,
    activeProjectFunction,
  } = useContext(Context);
  const [length, setLength] = useState(null);
  useEffect(() => {
    setLength(document.querySelectorAll("#bl-panel-work-items>div").length);
  }, []);

  return (
    <div
      className={`bl-panel-items ${showProject ? "bl-panel-items-show" : ""}`}
      id="bl-panel-work-items"
    >
      {/* Project Starts */}
      <div
        data-panel="panel-1"
        className={activeProject == 1 ? "bl-show-work" : ""}
      >
        <div className="col">
          <div className="row">
            {/* Project Main Content Starts */}
            <div className="col s12 m6 l6 xl6 section-padding section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-1-d.png"
                  alt="Project"
                />
              </picture>
            </div>
            {/* Project Main Content Ends */}
            {/* Project Details Starts */}
            <div className="col s12 l6 xl6">
              <div className="row section-padding">
                <h3 className="font-weight-700 uppercase">
                  <span>
                    <i className="fa-solid fa-briefcase" />
                  </span>
                  Buy Planner
                </h3>
              </div>
              <div className="row section-padding">
                <p className="second-font">
                  Merchandise buy planning application. In production since 2013 and processed $50+ billion in orders.
                </p>
              </div>
              <div className="row section-padding second-font">
                <ul>
                  <li>.NET</li>
                  <li>C#</li>
                  <li>WCF</li>
                  <li>Winforms</li>
                  <li>DevExpress</li>
                  <li>Oracle/RMS</li>
                  <li>Git</li>
                  <li>Jenkins</li>
                </ul>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-2"
        className={activeProject == 2 ? "bl-show-work" : ""}
      >
        <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-2-d.png"
                  alt="Project"
                />
              </picture>
            </div>
            {/* Project Pic Ends */}
            {/* Project Content Starts */}
            <div className="col s12 m6 l6 xl6">
              <h3 className="uppercase">
                <span>
                  <i className="fa-solid fa-briefcase" />
                </span>
                Position Modeler
              </h3>
              <div className="col p-none">
                <p className="second-font">
                  The trading (stock, crypto, etc.) position modeler is a single
                  page web application. This application models buys/sells given
                  the various buy/sell increments (i.e. buy at x% decrease or
                  sell at y% increase until a certain % goal is reached).
                </p>
              </div>
              <div className="col sub-text-font">
                  <ul>
                    <li>.NET Core</li>
                    <li>C#</li>
                    <li>TypeScript</li>
                    <li>Angular</li>
                    <li>Angular Material</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
          </div>
          {/* Project Content Ends */}
          {/* Project Information Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-3"
        className={activeProject == 3 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <picture>
              <img
                className="responsive-img project-detail-panel-image"
                src="images/projects/project-3-d.png"
                alt="Project"
              />
            </picture>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Agile Pilot</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700 uppercase">Summary:</span>
                <span className="font-weight-400">
                  One of two engineers selected from across Nordstrom IT to lead
                  the introduction of Agile to Nordstrom. The project had a
                  threefold purpose; first, determine the business viability of
                  a designer label virtual shopping experience, second,
                  introduce Agile to Nordstrom, and third, provide guidance on
                  enterprise adoption Agile moving forward.
                </span>
              </li>
            </ul>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-4"
        className={activeProject == 4 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <picture>
              <img
                className="responsive-img project-detail-panel-image"
                src="images/projects/project-4-d.png"
                alt="Project"
              />
            </picture>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">
              Semi-truck Control Systems
            </h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700 uppercase">Summary:</span>
                <span className="font-weight-400">
                  Semi-truck controls application (built with C#, WinForms, XML,
                  and serial comms) used to program {`truck's`} dashboard
                  various signal lights at manufacturing plant.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-gears"></i>
                <span className="font-weight-700 uppercase">Technologies:</span>
                <span className="font-weight-400">
                  .NET, C#, WinForms, XML, and RS-232
                </span>
              </li>
            </ul>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-5"
        className={activeProject == 5 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <picture>
              <img
                className="responsive-img project-detail-panel-image"
                src="images/projects/project-5-d.png"
                alt="Project"
              />
            </picture>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">
              Pipe Integrity Analysis
            </h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700 uppercase">Summary:</span>
                <span className="font-weight-400">
                  Pipe integrity analysis application processing/graphing up to
                  four channels of streaming data simultaneously.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-gears"></i>
                <span className="font-weight-700 uppercase">Technologies:</span>
                <span className="font-weight-400">
                  .NET, C#, WinForms, RS-232, open source graphing library
                </span>
              </li>
            </ul>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-6"
        className={activeProject == 6 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <picture>
              <img
                className="responsive-img project-detail-panel-image"
                src="images/projects/project-6-d.png"
                alt="Project"
              />
            </picture>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Order Optimization</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700 uppercase">Summary:</span>
                <span className="font-weight-400">
                  Web-base excel like application to optimize the merchandise
                  quantities in {`"case pack"`} orders.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-gears"></i>
                <span className="font-weight-700 uppercase">Technologies:</span>
                <span className="font-weight-400">
                  .NET, C#, WCF and jQuery
                </span>
              </li>
            </ul>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-7"
        className={activeProject == 7 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <picture>
              <img
                className="responsive-img project-detail-panel-image"
                src="images/projects/project-7-d.png"
                alt="project" />
            </picture>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Agriculture IoT</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700 uppercase">Summary:</span>
                <span className="font-weight-400">
                  POC for agricultural environmental controls with IoT devices
                  logging to cloud datastore with companion dashboard to
                  interpret logged data.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-gears"></i>
                <span className="font-weight-700 uppercase">Technologies:</span>
                <span className="font-weight-400">
                  .NET Core, Cosmos DB, Angular and Angular Material
                </span>
              </li>
            </ul>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-8"
        className={activeProject == 8 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <picture>
              <img
                className="responsive-img project-detail-panel-image"
                src="images/projects/project-8-d.png"
                alt="project" />
            </picture>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">OpenFMB/MQTT-SN</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700 uppercase">Summary:</span>
                <span className="font-weight-400">
                  POC to evaluate the OpenFMB {`protocol's`} compatibility and
                  efficiency working with MQTT/MQTT-SN.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-gears"></i>
                <span className="font-weight-700 uppercase">Technologies:</span>
                <span className="font-weight-400">Go, BeagleBone Black</span>
              </li>
            </ul>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-9"
        className={activeProject == 9 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <picture>
              <img
                className="responsive-img project-detail-panel-image"
                src="images/projects/project-9-d.png"
                alt="project" />
            </picture>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">{`Let's`} Talk</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700 uppercase">Summary:</span>
                <span className="font-weight-400">
                  Have a project to dig into and could use some help? Please reach out, {`I'm`} happy to dig into the scope of work to help you!!
                </span>
              </li>
            </ul>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Portfolio Navigation Starts */}
      <nav>
        {/* Previous Work Icon Starts */}
        <span
          className="control-button bl-previous-work"
          onClick={() =>
            activeProjectFunction(activeProject == 1 ? 1 : activeProject - 1)
          }
        >
          <i className="fa-solid fa-angle-left"></i>
        </span>
        {/* Previous Work Icon Ends */}
        {/* Close Work Icon Starts */}
        <picture>
          <img
            alt="close"
            src="images/close-button.png"
            className="control-button bl-icon-close"
            onClick={() => {
              showProjectFunction();
              activeProjectFunction(null);
            }}
          />
        </picture>
        {/* Close Work Icon Ends */}
        {/* Next Work Icon Starts */}
        <span
          className="control-button bl-next-work"
          onClick={() =>
            activeProjectFunction(
              activeProject == length ? 1 : activeProject + 1
            )
          }
        >
          <i className="fa-solid fa-angle-right"></i>
        </span>
        {/* Previous Work Icon Ends */}
      </nav>
      {/* Portfolio Navigation Ends */}
    </div>
  );
};
export default memo(ProjectDetails);

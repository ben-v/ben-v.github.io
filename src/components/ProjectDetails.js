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
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-1-d.png"
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
                Market Buy Planner
              </h3>
              <div className="col p-none">
                <p className="second-font">
                  Merchandise buy planning application. In production since 2013 and processed $50+ billion in orders.
                </p>
              </div>
              <div className="col sub-text-font">
                <ul>
                  <li>.NET</li>
                  <li>C#</li>
                  <li>WCF</li>
                  <li>Winforms</li>
                  <li>DevExpress</li>
                  <li>Oracle/RMS</li>
                  <li>Jenkins</li>
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
                  <li>GitHub Actions</li>
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
        <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-3-d.png"
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
                Agile Pilot
              </h3>
              <div className="col p-none">
                <p className="second-font">
                  One of two engineers selected from across Nordstrom IT to lead
                  the introduction of Agile to Nordstrom. The project had a
                  threefold purpose; first, determine the business viability of
                  a designer label virtual shopping experience, second,
                  introduce Agile to Nordstrom, and third, provide guidance on
                  enterprise adoption Agile moving forward.
                </p>
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
        data-panel="panel-4"
        className={activeProject == 4 ? "bl-show-work" : ""}
      >
       <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-4-d.png"
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
                Control Systems
              </h3>
              <div className="col p-none">
                <p className="second-font">
                Semi-truck controls application (built with C#, WinForms, XML,
                  and serial comms) used to program {`truck's`} dashboard
                  various signal lights at manufacturing plant.
                </p>
              </div>
              <div className="col sub-text-font">
                <ul>
                  <li>.NET</li>
                  <li>C#</li>
                  <li>WinForms</li>
                  <li>XML</li>
                  <li>RS-232</li>
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
        data-panel="panel-5"
        className={activeProject == 5 ? "bl-show-work" : ""}
      >
        <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-5-d.png"
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
                PIPE INTEGRITY ANALYzer
              </h3>
              <div className="col p-none">
                <p className="second-font">
                Pipe integrity analysis application processing/graphing up to
                  four channels of streaming data simultaneously.
                </p>
              </div>
              <div className="col sub-text-font">
                <ul>
                  <li>.NET</li>
                  <li>C#</li>
                  <li>WinForms</li>
                  <li>RS-232</li>
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
        data-panel="panel-6"
        className={activeProject == 6 ? "bl-show-work" : ""}
      >
        <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-6-d.png"
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
                ORDER OPTIMIZER
              </h3>
              <div className="col p-none">
                <p className="second-font">
                Web-base excel like application to optimize the merchandise
                  quantities in {`"case pack"`} orders.
                </p>
              </div>
              <div className="col sub-text-font">
                <ul>
                  <li>.NET</li>
                  <li>C#</li>
                  <li>WCF</li>
                  <li>jQuery</li>
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
        data-panel="panel-7"
        className={activeProject == 7 ? "bl-show-work" : ""}
      >
        <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-7-d.png"
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
                Agriculture IoT
              </h3>
              <div className="col p-none">
                <p className="second-font">
                POC for agricultural environmental controls with IoT devices
                  logging to cloud datastore with companion dashboard to
                  interpret logged data.
                </p>
              </div>
              <div className="col sub-text-font">
                <ul>
                  <li>.NET Core</li>
                  <li>C#</li>
                  <li>Cosmos DB</li>
                  <li>Angular</li>
                  <li>Angular Material</li>
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
        data-panel="panel-8"
        className={activeProject == 8 ? "bl-show-work" : ""}
      >
        <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-8-d.png"
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
                OPENFMB/MQTT-SN
              </h3>
              <div className="col p-none">
                <p className="second-font">
                POC to evaluate the OpenFMB {`protocol's`} compatibility and
                  efficiency working with MQTT/MQTT-SN.
                </p>
              </div>
              <div className="col sub-text-font">
                <ul>
                  <li>Go</li>
                  <li>BeagleBone Black</li>
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
        data-panel="panel-9"
        className={activeProject == 9 ? "bl-show-work" : ""}
      >
        <div className="col">
          {/* Project Information Starts */}
          <div className="row project-info">
            {/* Project Pic Starts */}
            <div className="col s12 m6 l6 xl6 section-padding-right-none">
              <picture>
                <img
                  className="responsive-img project-detail-panel-image"
                  src="images/projects/project-9-d.png"
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
                {`Let's`} Talk
              </h3>
              <div className="col p-none">
                <p className="second-font">
                Have a project to dig into or could use some help with your engineering team? Please reach out! {`I'm`} happy to dive into the details and assist you!
                </p>
              </div>
            </div>
          </div>
          {/* Project Content Ends */}
          {/* Project Information Ends */}
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

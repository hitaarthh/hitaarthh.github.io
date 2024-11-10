"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "react-tooltip/dist/react-tooltip.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import { useTheme } from "next-themes";
import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/ModalTwo";
import ModalThree from "./modal/ModalThree";
import ModalFour from "./modal/ModalFour";
import { Tooltip as ReactTooltip } from "react-tooltip";
// Modal.setAppElement("#__next");

const Portfolio = () => {
  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);
  const { resolvedTheme = 'dark' } = useTheme();
  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);
  const [isOpenModalThree, setIsOpenModalThree] = useState(false);
  const [isOpenModalFour, setIsOpenModalFour] = useState(false);


  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
  }
  function toggleModalThree() {
    setIsOpenModalThree(!isOpenModalThree);
  }
  function toggleModalFour() {
    setIsOpenModalFour(!isOpenModalFour);
  }

  return (
    <>
      <Gallery>
        <Tabs>
          <div className="list_wrapper">
          <TabPanel>
  <ul
    className="portfolio_list"
    data-aos="fade-right"
    data-aos-duration="1200"
  >
    {/* Project 1 */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Image
            width={300}
            height={300}
            src={resolvedTheme === "dark" ? "/img/portfolio/ruleengine_dark.png" : "/img/portfolio/ruleengine_light.png"}
            alt="Rule Engine With Ast"
            data-tip
            data-for="detail1"
            data-tooltip-id="detail1"
            onClick={toggleModalOne}
          />
          <ReactTooltip
            id="detail1"
            place="bottom"
            variant="light"
            float
            render={() => (
              <div className="tooltip-wrapper">
                <h5>Rule Engine With AST</h5>
                <span>Project Details</span>
              </div>
            )}
          />
        </div>
      </div>
    </li>

    {/* Project 2 */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Image
            width={300}
            height={300}
            src={resolvedTheme === "dark" ? "/img/portfolio/navig_dark.png" : "/img/portfolio/navig_light.png"}
            alt="NaviG"
            data-tip
            data-for="detail2"
            data-tooltip-id="detail2"
            onClick={toggleModalTwo}
          />
          <ReactTooltip
            id="detail2"
            place="bottom"
            variant="light"
            float
            render={() => (
              <div className="tooltip-wrapper">
                <h5>NaviG</h5>
                <span>Seamless Wayfinding App</span>
              </div>
            )}
          />
        </div>
      </div>
    </li>

    {/* Project 3 */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Image
            width={300}
            height={300}
            src={resolvedTheme === "dark" ? "/img/portfolio/autovaluepro_dark.png" : "/img/portfolio/autovaluepro_light.png"}
            alt="AutoValuePro"
            data-tip
            data-for="detail3"
            data-tooltip-id="detail3"
            onClick={toggleModalThree}
          />
          <ReactTooltip
            id="detail3"
            place="bottom"
            variant="light"
            float
            render={() => (
              <div className="tooltip-wrapper">
                <h5>AutoValuePro</h5>
                <span>Vehicle Valuation Wizard</span>
              </div>
            )}
          />
        </div>
      </div>
    </li>

    {/* Project 4 */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Image
            width={300}
            height={300}
            src={resolvedTheme === "dark" ? "/img/portfolio/weatherapi_dark.png" : "/img/portfolio/weatherapi_light.png"}
            alt="Modal Four"
            data-tip
            data-for="detail4"
            data-tooltip-id="detail4"
            onClick={toggleModalFour}
          />
          <ReactTooltip
            id="detail4"
            place="bottom"
            variant="light"
            float
            render={() => (
              <div className="tooltip-wrapper">
                <h5>Weather Monitoring With Rollups and Aggregates</h5>
                <span>Project Details</span>
              </div>
            )}
          />
        </div>
      </div>
    </li>
  </ul>
</TabPanel>

          </div>
        </Tabs>
      </Gallery>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalOne}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalOne />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalTwo}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalTwo />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalThree}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalThree />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpenModalFour}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalFour />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;

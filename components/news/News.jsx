"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import newsData from "../../data/newsData";
import ShareSocial from "../social-share/ShareSocial";

// Modal.setAppElement("#__next");

const News = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleblogsData = (id) => {
    const find = newsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleblogsData(id);
  };

  return (
    <>
      <ul>
        {newsData.map((item) => (
          <li key={item.id}>
            <div className="list_inner" onClick={() => handleModle(item?.id)}>
              <div className="image">
                <div
                  className="main "
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    <span>{item.date}</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title">{item.title}</h3>
                <div className="tokyo_tm_read_more">
                  <div className="read-more">
                    <span>Read More</span>
                  </div>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}
            </div>
          </li>
        ))}

        {/* END SINGLE BLOG */}
      </ul>
      {/* START MODAL */}
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* END CLOSE ICON */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.img})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    <a href="#">{singleData?.poster}</a>
                    <span>{singleData?.date}</span>
                  </p>
                </div>
                <h3 className="title">{singleData?.title}</h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                {singleData?.descriptions}
                {/* END DESCRIPTION */}
                <div className="news_share">
                  <span>Share:</span>
                  <ShareSocial />
                  {/* END SOCIAL SHARE */}
                </div>
                {/* END NEWS SHARE */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}
    </>
  );
};

export default News;

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ShareSocial from "../social-share/ShareSocial";
import { getMediumPosts } from "../../utilis/mediumFetch";

const News = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to clean up Medium content
  const cleanMediumContent = (content) => {
    if (!content) return '';
    
    // Create a temporary div to parse the HTML
    const temp = document.createElement('div');
    temp.innerHTML = content;

    // Remove the first figure/image
    const firstFigure = temp.querySelector('figure');
    if (firstFigure) {
      firstFigure.remove();
    }

    // Remove medium's subtitle which usually comes after h1
    const subtitle = temp.querySelector('h4');
    if (subtitle) {
      subtitle.remove();
    }

    // Clean up empty paragraphs
    const emptyParagraphs = temp.querySelectorAll('p:empty');
    emptyParagraphs.forEach(p => p.remove());

    return temp.innerHTML;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getMediumPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleblogsData = (id) => {
    const find = posts.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleblogsData(id);
  };

  if (loading) {
    return (
      <div className="tokyo_tm_news">
        <div className="loading_state">
          <div className="loading_text">Loading blogs...</div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="tokyo_tm_news">
        <div className="error_state">
          <div className="error_text">No blogs found. Please try again later.</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <div className="list_inner" onClick={() => handleModle(item?.id)}>
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="details">
                <div className="extra">
                  <p className="date">
                    {item.location}
                    <span>{item.date}</span>
                  </p>
                </div>
                <h3 className="title">{item.title}</h3>
                <div className="tokyo_tm_read_more">
                  <div className="read-more">
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Blog post"
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
          
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              <div className="details">
                <div className="extra">
                  <p className="date">
                    {singleData?.location}
                    <a href={singleData?.link} target="_blank" rel="noopener noreferrer">
                      {' '}Read on Medium
                    </a>
                    <span>{singleData?.date}</span>
                  </p>
                </div>
                <h3 className="title">{singleData?.title}</h3>
              </div>
              <div className="main_content">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: cleanMediumContent(singleData?.descriptions) 
                  }} 
                />
                <div className="news_share">
                  <span>Share:</span>
                  <ShareSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default News;
"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TumblrShareButton,
  TumblrIcon,
} from "next-share";

const ShareSocial = () => {
  return (
    <div className="social-share">
      <FacebookShareButton
        url={"https://www.facebook.com/"}
        quote={
          "Check out this insightful blog post from Hitarth Anand Rohra, covering software engineering, technology, and personal experiences."
        }
        hashtag={"#hitaarthh"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <PinterestShareButton
        url={"https://www.hitaarthh.com/news"}
        media={
          "Check out this insightful blog post from Hitarth Anand Rohra, covering software engineering, technology, and personal experiences."
        }
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <TwitterShareButton
        url={"https://www.hitaarthh.com/news"}
        title={
          "Check out this insightful blog post from Hitarth Anand Rohra, covering software engineering, technology, and personal experiences."
        }
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={"https://www.linkedin.com/in/hitarth-rohra/"}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TumblrShareButton
        url={"https://www.hitaarthh.com/news"}
        title={
          "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies."
        }
      >
        <TumblrIcon size={32} round />
      </TumblrShareButton>
    </div>
  );
};

export default ShareSocial;

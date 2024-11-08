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
        url={"https://www.facebook.com/ibthemes/"}
        quote={
          "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies."
        }
        hashtag={"#ibthemes"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <PinterestShareButton
        url={"https://www.pinterest.com/"}
        media={
          "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies."
        }
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <TwitterShareButton
        url={"https://twitter.com/ib_themes"}
        title={
          "We are ib-themes, a quality and dedicated group of individuals who love modern trend like React, Vue and Angular JS Web Templates. We are growing with Modern Web Technologies."
        }
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={"https://www.linkedin.com/in/ib-themes-company-469408207/"}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TumblrShareButton
        url={"https://www.tumblr.com/"}
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

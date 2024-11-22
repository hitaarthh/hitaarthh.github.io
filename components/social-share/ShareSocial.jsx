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

const ShareSocial = ({ blogData }) => {
  // Default content if no blog data is passed
  const shareUrl = blogData?.link || "https://hitaarthh.github.io";
  const shareTitle = blogData?.title || "Hitarth's Blog";
  const shareDescription = blogData?.descriptions
    ? blogData.descriptions.replace(/<[^>]*>/g, '').slice(0, 200) + '...'
    : "Check out this insightful blog post from Hitarth Anand Rohra, covering software engineering, technology, and personal experiences.";

  return (
    <div className="social-share">
      <FacebookShareButton
        url={shareUrl}
        quote={shareDescription}
        hashtag={"#TechBlog"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <PinterestShareButton
        url={shareUrl}
        media={blogData?.img || "https://hitaarthh.github.io/img/logo/logo.png"}
        description={shareTitle}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={shareTitle}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={shareUrl}
        title={shareTitle}
        summary={shareDescription}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TumblrShareButton
        url={shareUrl}
        title={shareTitle}
        caption={shareDescription}
        tags={["technology", "programming", "engineering"]}
      >
        <TumblrIcon size={32} round />
      </TumblrShareButton>
    </div>
  );
};

export default ShareSocial;
import React from "react";







const Resource = ({ resource }) => {
 // DR: This is a function that will dynamically make either an iframe for the video
 //   or a image, & also a link incase the iframe dosent work.
 const {link, title, datePublished, videoLength, categories, summary, resourceAuthor} = resource;

  const getResourceVideoOrNot = () => {
    if (link.includes("playlist")) {
      console.log(
        "rendered a playlist",
        link.replace("playlist", "embed/videoseries")
      );
      return (
        <div>
          <iframe
            src={link.replace("playlist", "embed/videoseries")}
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
      );
    } else if (link.includes("watch")) {
      console.log("rendered a video", link.replace("watch", "embed"));
      return (
        <div>
          <iframe
            src={link.replace("watch", "embed")}
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
      );
    }
  };


  return (
    <div className={"box"}>
      {getResourceVideoOrNot()}
      <br /> 
      <a className="link" href={link}>
            {" "}
            <br /> {title}
          </a>
      <p>{resourceAuthor}</p>
      <hr />
      <p>{Date(datePublished)}</p>
      {videoLength ? (
        <p>Length: {videoLength} minutes</p>
      ) : null}
      <p>
        Categories: <br /> {categories}
      </p>
        <p>{summary}</p>
    </div>
  );
};

export default Resource;

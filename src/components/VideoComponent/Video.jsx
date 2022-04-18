import React from "react";
import PropTypes from "prop-types";
import "./Video.css";

const Video = ({ link }) => (
  <div className="video-responsive">
    <iframe
      width="741.21"
      height="557"
      src={`${link}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Video;

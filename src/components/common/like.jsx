import React from "react";
import PropTypes from "prop-types";

function Like({ isLiked, onLike }) {
  let classes = "fa fa-heart";
  if (!isLiked) classes += "-o";

  return (
    <div onClick={onLike} style={{ cursor: "pointer" }}>
      <i className={classes} aria-hidden="true"></i>
    </div>
  );
}

Like.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Like;

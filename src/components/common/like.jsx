import React from "react";

function Like({ isLiked, onLike }) {
  let classes = "fa fa-heart";
  if (!isLiked) classes += "-o";

  return (
    <div onClick={onLike} style={{ cursor: "pointer" }}>
      <i className={classes} aria-hidden="true"></i>
    </div>
  );
}

export default Like;

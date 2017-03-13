import React, { PropTypes } from 'react';


const LikeDislike = (props) => {
  const { handleLikeClick, handleDislikeClick } = props;

  return (
    <div className="likeDislikeButtons">
      <button className="dislikeButton" onClick={() => { handleDislikeClick() } }>DISLIKE</button>
      <button className="likeButton" onClick={() => { handleLikeClick() } }>LIKE</button>
    </div>
  )
};

LikeDislike.propTypes = {
  handleDislikeClick: PropTypes.func.isRequired,
  handleLikeClick: PropTypes.func.isRequired
}

export default LikeDislike;
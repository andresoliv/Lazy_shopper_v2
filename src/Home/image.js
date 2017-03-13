import React, { PropTypes } from 'react';

const Image = (props) => {
  const { index, currentImage } = props;

  return (
    <img className="productImage" src={currentImage}></img>
  );
};

Image.propTypes = {
  index: PropTypes.number.isRequired,
  currentImage: PropTypes.string.isRequired
}

export default Image;
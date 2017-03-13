import React, { PropTypes } from 'react';

const Price = (props) => {
  const {index, currentPrice} = props;

  return (
    <div className = "productPrice">{currentPrice}</div>
  )
}

Price.propTypes = {
  index: PropTypes.number.isRequired,
  currentPrice: PropTypes.string.isRequired
}

export default Price;
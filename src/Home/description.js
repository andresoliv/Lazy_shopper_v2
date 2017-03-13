import React, { PropTypes } from 'react';

const Description = (props) => {
  const {index, currentDesc, currentLink} = props;

  return (
    <a className="productDescription" href={currentLink}>{currentDesc}</a>
  )
}

Description.propTypes = {
  index: PropTypes.number.isRequired,
  currentDesc: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired
}

export default Description;
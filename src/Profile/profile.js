import React, { PropTypes } from 'react';

const Profile = (props) => {
  const { index, scrapedData } = props;

  return (
    <div>
      <h2>$hopping: "Liked Products"</h2>
      <div className="row"> 
        <div className="center-block">{image1}</div>
      </div>
      <div className="row">
        <div className="center-block">{description1}</div>
      </div>
      <div className="row">
        <div className="center-block">{price1}</div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  
}

export default Profile;
import React, { PropTypes } from 'react';
import LikeDislike from './likeDislike';
import Description from './description';
import Image from './image';
import Price from './price';
import {Router, Route, browserHistory } from 'react-router';


const LazyShopPage = (props) => {
  const { index, handleLikeClick, handleDislikeClick, currentProduct } = props;


  const image = <Image index={index} currentImage={currentProduct.image} />;
  const description = <Description index={index} currentDesc={currentProduct.description} currentLink={currentProduct.link} />;
  const price = <Price index={index} currentPrice={currentProduct.price} />;
  const likeDislike = <LikeDislike handleLikeClick={handleLikeClick} handleDislikeClick={handleDislikeClick} />;

  const proceed = (event) => {
    event.preventDefault();
    browserHistory.push('/Profile');
  }

  return (  
    <div className="container center-text">
      <form onSubmit={proceed}>
        <button type="submit">Profile</button>
      </form>
      <h2>$hopping: "As Seen on TV BestSellers"</h2>
      <div className="row"> 
        <div className="center-block">{image}</div>
      </div>
      <div className="row">
        <div className="center-block">{description}</div>
      </div>
      <div className="row">
        <div className="center-block">{price}</div>
      </div>
      <div className="row">
        <div className="center-block">{likeDislike}</div>
      </div>
    </div>
  )
}  

LazyShopPage.propTypes = {
  handleDislikeClick: PropTypes.func.isRequired,
  handleLikeClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  currentProduct: PropTypes.object.isRequired
}

export default LazyShopPage;

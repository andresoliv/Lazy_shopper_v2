import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import LazyShopPage from './lazyShopPage';

const cheerio = require('cheerio');
const request = require('request');

function getInitialState() {
  return {
    scrapedData: {
      productImages: ['image'],
      productDescriptions: ['desc'],
      productPrices: ['price'],
      productLinks: ['link']
    },
    scrapedLength: this.scrapedData.productImages.length,
    index: 0,
    currentProduct: {
      image: this.scrapedData.productImages[this.index],
      description: this.scrapedData.productDescriptions[this.index],
      price: this.scrapedData.productPrices[this.index],
      link: this.scrapedData.productLinks[this.index],
    },
    savedProducts: []
  }
}

class Home extends Component { 
  constructor(props) {
    super();
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDislikeClick = this.handleDislikeClick.bind(this);
    this.state = getInitialState();
  }
  handleLikeClick() {
    let { index, savedProducts, currentProduct, scrapedLength } = this.state;
    savedProducts.push(currentProduct);
    index = index + 1 >= scrapedLength ? 0 : index + 1;
    this.setState({ index: index, savedProducts: savedProducts });
  }

  handleDislikeClick() {
    let { index } = this.state;
    index = index + 1 >= scrapedLength ? 0 : index + 1;
    this.setState({ index: index });
  }

  render() {
    const { index, currentProduct } = this.state;
    const handleDislikeClick = this.handleDislikeClick;
    const handleLikeClick = this.handleLikeClick;
    const lazyShopPage = <LazyShopPage index={index} handleDislikeClick={handleDislikeClick} handleLikeClick={handleLikeClick} currentProduct={currentProduct} />;
    return (
      <div className="App">
        <div>{lazyShopPage}</div>
      </div>
    );
  }

  componentWillMount() {
    let scraperData = new Promise((resolve, reject) => {
      let asSeenData = {};
      let url = 'https://www.overstock.com/As-Seen-on-TV/Top-Rated,/top__rated,/40/store.html?TID=SN:sto40:::refinements-4-2:';

      request(url, (error, response, html) => {
        let $ = cheerio.load(html);
        if (error) throw new Error(error);

        let productImagesArr = $('img.img-responsive.product-img').map(function (i, el) {
          return $(this).attr('src');
        });
        // productImagesArr = productImagesArr.slice(9);

        let productDescArr = $('div.product-title').map(function (i, el) {
          return $(this).text();
        });

        let productPriceArr = $('div.product-price').map(function (i, el) {
          return $(this).text();
        });

        let productLinkArr = $('div.product-info').children('a').map(function (i, el) {
          return $(this).attr('href');
        });

        asSeenData['productImages'] = productImagesArr;
        asSeenData['productDescriptions'] = productDescArr;
        asSeenData['productPrices'] = productPriceArr;
        asSeenData['productLinks'] = productLinkArr;

        resolve(asSeenData);
        reject('error!!!!');
      })
    });
    scraperData.then((asSeenData) => {
      this.setState({ scrapedData: asSeenData});
    }).catch(function (reason) {
      console.log('Failed because', reason);
    })
  }

}

export default Home;

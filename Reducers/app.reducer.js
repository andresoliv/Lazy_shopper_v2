import * as constants from '../Constants/app.constants';

const cloneDeep = require('lodash.clonedeep');

const initialAppState = {
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

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    
    case constants.HANDLE_LIKE: {
      const newState = cloneDeep(state);

      newState.savedProducts.push(newState.currentProduct);
      newState.index = newState.index + 1 >= scrapedLength ? 0 : newState.index + 1;

      return newState;
    }

    case constants.HANDLE_DISLIKE: {
      const newState = cloneDeep(state);

      newState.index = newState.index + 1 >= scrapedLength ? 0 : newState.index + 1;

      return newState;
    }  
  }
}
export default appReducer;
import * as constants from '../Constants/app.constants';

const initialAppState = {
  scrapedData: {
    productImages: [null],
    productDescriptions: [null],
    productPrices: [null],
    productLinks: [null]
  },
  index: 0,
  image: 'Choose the products you would like to Lazy Browse',
  description: '',
  savedProducts: []
}


import * as constants from '../Constants/app.constants';

const initialAppState = {
  scrapedData: {
    productImages: ['image'],
    productDescriptions: ['desc'],
    productPrices: ['price'],
    productLinks: ['link']
  },
  index: 0,
  image: 'nothing here',
  description: 'nothing here',
  savedProducts: []
}
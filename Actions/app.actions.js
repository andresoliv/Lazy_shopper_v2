import * as constants from '../Constants/app.constants';

export function handleLike() {
  return {
    type: constants.HANDLE_LIKE
  };
} 

export function handleDislike() {
  return {
    type: constants.HANDLE_DISLIKE
  };
} 
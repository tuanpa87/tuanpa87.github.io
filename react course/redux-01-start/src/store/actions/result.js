import * as actionTypes from "./actionTypes";

export const saveResult = res => {
  //you can add more logic here before return
  
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};
export const storeResult = res => dispatch => {
  setTimeout(() => dispatch(saveResult(res)), 2000);
};
export const deleteResult = resID => ({
  type: actionTypes.DELETE_RESULT,
  resultElId: resID
});

// import fetch from 'isomorphic-fetch';

import { destroy, initialize } from 'redux-form';

// function createRemoteFridgeItem(payload) {
//   return (dispach) => {
//     return {
//       type: 'CREATE_REMOTE_FRIDGE_ITEM',
//       payload
//     };
//   };
// }

// function createFridgeItemRemote (data) {
//   return fetch('/users', {
//     method: 'post',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
// }

export function loadAllFridgeItems () {
  return (dispatch) => {
    Promise.resolve([{product: '123', expiration: 'haha', id: 0}])
      .then((payload) => {
        dispatch({
          type: 'SET_ALL_FRIDGE_ITEMS',
          payload,
        });
      });
  };
}

export function toggleModifyFridgeItemModal (modify = false) {
  return (dispatch) => {
    dispatch({
      type: 'TOGGLE_MODIFY_FRIDGE_MODAL',
      modify,
    });
    if (!modify) {
      dispatch(destroy('fridgeModifyItem'));
    } else {
      dispatch(initialize('fridgeModifyItem', modify, ['product', 'expiration', 'id']));
    }
  };
}

export function createFridgeItem (payload) {
  return (dispatch) => {
    dispatch({
      type: 'CREATE_FRIDGE_ITEM',
      payload,
    });
    dispatch(toggleModifyFridgeItemModal());
  };
}

export function modifyFridgeItem (payload) {
  return (dispatch) => {
    dispatch({
      type: 'MODIFY_FRIDGE_ITEM',
      payload,
    });
    dispatch(toggleModifyFridgeItemModal());
  };
}

export function deleteFridgeItem (payload) {
  return (dispatch) => dispatch({
    type: 'DELETE_FRIDGE_ITEM',
    payload,
  });
}

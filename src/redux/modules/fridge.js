export function items (state = [], action) {
  switch (action.type) {
    case 'CREATE_FRIDGE_ITEM':
      return [
        ...state,
        {
          ...action.payload,
          id: Date.now(),
        },
      ];
    case 'SET_ALL_FRIDGE_ITEMS':
      return action.payload;
    case 'MODIFY_FRIDGE_ITEM':
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    case 'DELETE_FRIDGE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const initUiState = {
  toggleModifyFridge: false,
};

export const uiActions = (state = initUiState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODIFY_FRIDGE_MODAL':
      return {
        ...state,
        toggleModifyFridge: !state.toggleModifyFridge,
        modifyFridgeItem: action.modify || false,
      };
    default:
      return state;
  }
};

export default function fridge (state = {}, action) {
  return {
    items: items(state.items, action),
    ui: uiActions(state.ui, action),
  };
};

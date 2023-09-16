// Create a file named icons.js
// This is where you define your Redux actions and reducers related to icons

import { createStore } from 'redux';

// Action types
export const SET_SELECTED_ICON = 'SET_SELECTED_ICON';

// Initial state
const initialState = {
  selectedIcon: null, // Initially, no icon is selected
};

// Reducer
const iconsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ICON:
      return {
        ...state,
        selectedIcon: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const setSelectedIcon = (icon) => ({
  type: SET_SELECTED_ICON,
  payload: icon,
});

// Create and export the Redux store
export const iconsStore = createStore(iconsReducer);

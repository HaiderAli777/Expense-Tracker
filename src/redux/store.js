import { createSlice, configureStore } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const slice = createSlice({
  name: "tracker",
  initialState: {
    totalValue: 0,
    profit: 0,
    expense: 0,
    addData: false,
    radioChecked: "",
    data: [],
    radioCheck: false,
    alertform: 0,
    ch: false,
  },
  reducers: {
    addValueToData(state, action) {
      if (state.radioChecked == "income") {
        state.alertform = 1;
        state.data.push(action.payload);
        state.profit += action.payload.amount;
        state.totalValue += action.payload.amount;
      } else {
        const t = state.totalValue - action.payload.amount;
        if (t <= 0) {
          state.alertform = 3;
          return;
        }
        state.alertform = 1;
        state.data.push(action.payload);
        state.expense += action.payload.amount;
        state.totalValue -= action.payload.amount;
      }
    },
    chol(state, action) {
      state.ch = action.payload;
    },
    toggleModal(state, action) {
      state.addData = action.payload;
    },
    setRadio(state, action) {
      state.radioCheck = action.payload;
    },
    setRadioChecked(state, action) {
      state.radioChecked = action.payload;
    },
    setalter(state, action) {
      state.alertform = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    track: slice.reducer,
  },
});

export default store;
export const trackActions = slice.actions;

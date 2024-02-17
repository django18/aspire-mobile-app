import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  activeCard: 0,
  data: [
    {
      id: 1,
      name: "Ashok Kumar",
      card_number: "1545 1245 2541 3652",
      cvv: "356",
      expiry: "11/26",
      showCardNumber: false,
    },
    {
      id: 2,
      name: "Ashok Kumars",
      card_number: "1545 1245 2541 3652",
      cvv: "356",
      expiry: "11/26",
      showCardNumber: false,
    },
    {
      id: 3,
      name: "Ashok Kumarss",
      card_number: "1545 1245 2541 3652",
      cvv: "356",
      expiry: "11/26",
      showCardNumber: false,
    },
    {
      id: 4,
      name: "Ashok Kumarsss",
      card_number: "1545 1245 2541 3652",
      cvv: "356",
      expiry: "11/26",
      showCardNumber: false,
    },
  ],
};

const counterSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: {
      reducer: (state, action) => {
        return {
          ...state,
          data: [action.payload, ...state.data],
        };
      },
      prepare: (name) => {
        const id = nanoid();
        const newCard = {
          id,
          name,
          card_number: "1545 1245 2541 3652",
          cvv: "356",
          expiry: "11/26",
          showCardNumber: false,
        };
        return { payload: newCard };
      },
    },
    setActiveCard: {
      reducer: (state, action) => {
        return (state = {
          ...state,
          activeCard: action.payload,
        });
      },
    },
    updateCards: {
      reducer: (state, action) => {
        return {
          ...state,
          data: action.payload,
        };
      },
    },
  },
});

export const { addCard, setActiveCard, updateCards } = counterSlice.actions;
export default counterSlice.reducer;

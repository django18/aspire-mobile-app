import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  activeCard: 0,
  data: [
    {
      id: 1,
      name: "Ashok Kumar",
      cardNumber: "1545124525413652",
      cvv: "356",
      expiry: "11/26",
      showCardNumber: false,
    },
    {
      id: 2,
      name: "Ashok Kumars",
      cardNumber: "1545124525413652",
      cvv: "356",
      expiry: "11/26",
      showCardNumber: false,
    },
    {
      id: 3,
      name: "Ashok Kumarss",
      cardNumber: "1545124525413652",
      cvv: "356",
      expiry: "11/26",
      showCardNumber: false,
    },
    {
      id: 4,
      name: "Ashok Kumarsss",
      cardNumber: "1545124525413652",
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
          cardNumber: "1545124525413652",
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

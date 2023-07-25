import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../utils/consts";
import axios from "axios";

const toyContext = createContext();
export function useToyContext() {
  return useContext(toyContext);
}
const init = {
  toys: [],
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.toys:
      return { ...state, toys: action.payload };

    default:
      return state;
  }
}
const ToyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  async function addToy(newToy) {
    try {
      await axios.post(API, newToy);
    } catch (e) {
      console.log(e);
    }
  }
  const value = { addToy };
  return <toyContext.Provider value={value}>{children}</toyContext.Provider>;
};

export default ToyContext;

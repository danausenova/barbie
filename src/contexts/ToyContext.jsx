import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API } from "../utils/consts";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const toyContext = createContext();

export function useToyContext() {
  return useContext(toyContext);
}

const init = {
  toys: [],
  toy: null,
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, init);
  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  async function addToy(newToy) {
    try {
      await axios.post(API, newToy);
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    toys: state.toys,
    toy: state.toy,
    addToy,
    page,
    setPage,
    searchParams,
    setSearchParams,
  };

  return <toyContext.Provider value={value}>{children}</toyContext.Provider>;
};

export default ToyContext;

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTIONS, API } from "../utils/consts";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

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
  async function getToys() {
    try {
      const { data, headers } = await axios.get(
        `${API}${window.location.search}`
      );

      dispatch({
        type: ACTIONS.toys,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async function addToy(newToy) {
    try {
      await axios.post(API, newToy);
    } catch (e) {
      console.log(e);
    }
  }
  async function deleteToy(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getToys();
    } catch (e) {
      console.log(e);
    }
  }

  async function editToy(id, newToy) {
    try {
      await axios.patch(`${API}/${id}`, newToy);
    } catch (e) {
      console.log(e);
    }
  }
  const value = {
    toys: state.toys,
    getToys,
    addToy,
    deleteToy,
    editToy,
  };
  return <toyContext.Provider value={value}>{children}</toyContext.Provider>;
};

export default ToyContext;

import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API, LIMIT } from "../utils/consts";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const toyContext = createContext();
export function useToyContext() {
  return useContext(toyContext);
}
const init = {
  toys: [],
  toy: null,
  pageTotalCount: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.toys:
      return { ...state, toys: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}
const ToyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  async function getToys() {
    try {
      const { data, headers } = await axios.get(
        `${API}${window.location.search}`,
        {
          params: {
            q: state.search,
            _page: page,
            _limit: LIMIT,
          },
        }
      );

      dispatch({
        type: ACTIONS.toys,
        payload: data,
      });

      const totalCount = Math.ceil(headers["x-total-count"] / LIMIT);

      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalCount,
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
    searchParams,
    setSearchParams,
    pageTotalCount: state.pageTotalCount,
    page,
    getToys,
    addToy,
    deleteToy,
    editToy,
    setPage,
  };
  return <toyContext.Provider value={value}>{children}</toyContext.Provider>;
};

export default ToyContext;

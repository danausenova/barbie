import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTIONS, API, LIMIT } from "../utils/consts";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { async } from "q";
import { notify } from "../components/Toastify";

const toyContext = createContext();
export function useToyContext() {
  return useContext(toyContext);
}

const init = {
  toys: [],
  pageTotalCount: 1,
  toy: {},
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.toys:
      return { ...state, toys: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    case ACTIONS.toy:
      return { ...state, toy: action.payload };

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
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function addToy(newToy) {
    try {
      await axios.post(API, newToy);
      notify("Toy added successfully");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }
  async function deleteToy(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getToys();
      notify("Successfully deleted");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function getOneToy(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);

      dispatch({
        type: ACTIONS.toy,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function editToy(id, newToy) {
    try {
      await axios.patch(`${API}/${id}`, newToy);
      notify("Successfully saved changes");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }
  const value = {
    toys: state.toys,
    searchParams,
    setSearchParams,
    pageTotalCount: state.pageTotalCount,
    page,
    toy: state.toy,
    getOneToy,
    getToys,
    addToy,
    deleteToy,
    editToy,
    setPage,
  };
  return <toyContext.Provider value={value}>{children}</toyContext.Provider>;
};

export default ToyContext;

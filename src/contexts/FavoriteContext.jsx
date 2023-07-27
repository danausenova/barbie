import React, { createContext, useContext, useState } from "react";

const favoriteContext = createContext();
export function useFavoriteContext() {
  return useContext(favoriteContext);
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("favorite")) || [];
  return data;
}
const FavoriteContext = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  function getFav() {
    try {
      const data = getDataFromLS();
      setFavorite(data);
    } catch (e) {
      console.log(e);
    }
  }

  function addToyToFav(toy) {
    const data = getDataFromLS();
    data.push(toy);
    localStorage.setItem("favorite", JSON.stringify(data));
    getFav();
  }

  function deleteToyFromFav(id) {
    let data = getDataFromLS();
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(data));
    getFav();
  }

  const value = {
    favorite,
    getFav,
    addToyToFav,
    deleteToyFromFav,
  };
  return (
    <favoriteContext.Provider value={value}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContext;

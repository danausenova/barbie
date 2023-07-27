import React, { useEffect } from "react";
import { useFavoriteContext } from "../contexts/FavoriteContext";
import FavoriteItem from "../components/FavoriteItem";

const FavoritePage = () => {
  const { favorite, getFav } = useFavoriteContext();
  useEffect(() => {
    getFav();
    document.body.classList.add("body-favorite");
    return () => {
      document.body.classList.remove("body-favorite");
    };
  }, []);

  if (favorite.length <= 0) {
    return <h1>Пусто</h1>;
  }
  return (
    <div
      style={{
        marginTop: "2%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "20px",
      }}
    >
      {favorite.map((item) => (
        <FavoriteItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FavoritePage;

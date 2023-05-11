import React, { useEffect, useState } from "react";
import Dish from "./Dish";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    fetch("https://chef-server-iamshihabpro.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="my-container">
      <h2 className=" mb-4 font-sans text-4xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none flex justify-center">
        Our Special Recipes
      </h2>
      <hr className=" border-2 border-red-500 w-48 mx-auto items-center" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
        {dishes.slice(0, showAll ? 12 : 6).map((dish) => (
          <Dish key={dish._id} dish={dish}>
            {" "}
          </Dish>
        ))}
      </div>
      <div className="flex mx-auto items-center justify-center">
        <button onClick={handleShowAll} className="btn bg-sky-800 mt-10">
          Show all
        </button>
      </div>
    </div>
  );
};

export default Dishes;

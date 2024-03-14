import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [rescipes, setRescipes] = useState([]);
  const [load, setLoad] = useState(false);
  const [receipeDetails, setReceipeDetails] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  function handlefav(currentitem) {
    const cpyfav = [...favouritesList];
    const index = cpyfav.findIndex((item) => item.id === currentitem.id);
    console.log(index);
    if (index === -1) {
      cpyfav.push(currentitem);
    } else {
      cpyfav.splice(index);
    }

    setFavouritesList(cpyfav);
  }
console.log(favouritesList)
  async function handlesearch(event) {
    event.preventDefault();
    try {
      setLoad(true);
      const resp = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await resp.json();
      if (data?.data?.recipes) {
        setLoad(false);
        setRescipes(data?.data?.recipes);
        setSearch("");
      }
    } catch (e) {
      console.log(e);
      setLoad(false);
      setSearch("");
    }
  }
  console.log(rescipes);
  return (
    <div>
      <GlobalContext.Provider
        value={{
          search,
          setSearch,
          rescipes,
          handlefav,
          load,
          handlesearch,
          receipeDetails,
          setReceipeDetails,
          favouritesList,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
}

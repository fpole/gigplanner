import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Heart } from "lucide-react";

function FavouriteIconComponent({ favId }: { favId: string }) {
  const [items, setItems] = useState(getStorageList()); //
  //main helper function to get data from the storage or set it
  function getStorageList() {
    const list = localStorage.getItem("favourites");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  //on item change in the list save it to the state and localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(items));
  }, [items]);
  //checking if the item is already in the list or not
  const Favorites = items === null ? false : items.includes(favId);
  const handleToggleFavourite = () => {
    if (Favorites) {
      console.log("remove item");
      const currentList = getStorageList();
      const removeItemId = favId;
      for (var i = 0; i < currentList.length; i++) {
        if (currentList[i] === removeItemId) {
          currentList.splice(i, 1);
        }
        setItems(currentList);
      }
    } else {
      console.log("add item");
      const currentList = getStorageList();
      const newList = [...currentList, favId];
      setItems(newList);
    }
  };

  //rendering different icons if its favorite
  return (
    <>
      {Favorites ? (
        <Heart
          onClick={handleToggleFavourite}
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute right-1 top-1.5 fill-white`}
        />
      ) : (
        <Heart
          onClick={handleToggleFavourite}
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute right-1 top-1.5`}
        />
      )}
    </>
  );
}

//this is important because we have to render the component
// only in browser side, either component will through error
// because it will look for the local storage in the serverSide
const FavouriteIcon = dynamic(() => Promise.resolve(FavouriteIconComponent), {
  ssr: false,
});

export default FavouriteIcon;

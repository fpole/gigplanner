import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Heart } from "lucide-react";
import { Event } from "@/lib/interfaces";

function FavouriteIconComponent({
  favId,
  gigData,
}: {
  favId: string;
  gigData?: Event;
}) {
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

  // on item change in the list save it to the state and localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("favoritesUpdated"));
  }, [items]);

  // checking if the item is already in the list or not
  const Favourites =
    items === null ? false : items.some((item: Event) => item.id === favId);

  const handleToggleFavourite = () => {
    if (Favourites) {
      console.log("remove item");
      const currentList = getStorageList();
      const filteredList = currentList.filter(
        (item: Event) => item.id !== favId
      );
      setItems(filteredList);
    } else {
      console.log("add item");
      if (gigData) {
        const currentList = getStorageList();
        const newList = [...currentList, gigData];
        setItems(newList);
      }
    }
  };

  // rendering different icons if its favourite
  return (
    <>
      {Favourites ? (
        <Heart
          onClick={handleToggleFavourite}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute right-1 top-1.5 fill-red-500 text-red-500 hover:fill-red-600 hover:text-red-600"
        />
      ) : (
        <Heart
          onClick={handleToggleFavourite}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute right-1 top-1.5 text-muted-foreground hover:text-red-500 hover:fill-transparent"
        />
      )}
    </>
  );
}

// this is important because we have to render the component
// only in browser side, either component will through error
// because it will look for the local storage in the serverSide
const FavouriteIcon = dynamic(() => Promise.resolve(FavouriteIconComponent), {
  ssr: false,
});

export default FavouriteIcon;

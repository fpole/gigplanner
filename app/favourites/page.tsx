"use client";
import { Nav } from "@/components/Nav";
import { useEffect, useState } from "react";
import { Event } from "@/lib/interfaces";
import GigsCard from "@/components/GigsCard";

export default function Saved() {
  const [favourites, setFavourites] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadFavourites = () => {
    const savedFavourites = localStorage.getItem("favourites");
    if (savedFavourites) {
      try {
        const parsedFavourites = JSON.parse(savedFavourites);
        setFavourites(parsedFavourites);
      } catch (error) {
        console.error("Error parsing favourites from localStorage:", error);
        setFavourites([]);
      }
    } else {
      setFavourites([]);
    }
  };

  useEffect(() => {
    loadFavourites();
    setIsLoading(false);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "favourites") {
        loadFavourites();
      }
    };

    const handleFavoritesUpdate = () => {
      loadFavourites();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <Nav />
        <div className="container mx-auto p-4">
          <h1 className="text-xl mb-4">Your Saved Gigs</h1>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-xl mb-6">Your Saved Gigs</h1>
        {favourites.length === 0 ? (
          <div className="text-center py-8">
            <p className="dark:text-white text-md">No saved gigs yet!</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {favourites.map((gig) => (
              <GigsCard key={gig.id} gigs={gig} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

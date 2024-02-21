"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ArtistSearch from "../components/ArtistSearch";
import { useState, useEffect } from "react";

export default function Home() {
  const [artistSearch, setArtistSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [pagePopulated, setPagePopulated] = useState(false);

  async function handleSubmit() {
    //function to take input value and save variable artistSearch
    let artistName = (
      document.getElementById("searchInput") as HTMLInputElement
    ).value;
    setArtistSearch(artistName);

    let cityName = (
      document.getElementById("searchInputCity") as HTMLInputElement
    ).value;
    setCitySearch(cityName);

    if (artistName === "" && cityName != "") {
      alert("Please enter an artist name");
    }

    let reset = ((
      document.getElementById("searchInput") as HTMLInputElement
    ).value = "");
    let resetCity = ((
      document.getElementById("searchInputCity") as HTMLInputElement
    ).value = "");

    setPagePopulated(true);
  }

  return (
    <>
      <div className="flex m-3 justify-center items-center space-x-2">
        <Input id="searchInput" type="search" placeholder="Search Artist" />
        <Input id="searchInputCity" type="search" placeholder="Search City" />
        <Button type="submit" onClick={handleSubmit}>
          Get Gigs!
        </Button>
      </div>
      <div
        className={`flex ${
          pagePopulated ? "invisible h-0" : "visible"
        } items-center justify-center w-full`}
      >
        <p className="text-md text-center">
          Search for an artist to find their upcoming gigs! You can also add a
          city to narrow down the search.
        </p>
      </div>
      <ArtistSearch artistSearch={artistSearch} citySearch={citySearch} />
    </>
  );
}

"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ArtistSearch from "../components/ArtistSearch";
import GigSearch from "../components/GigSearch";
import { useState, useEffect } from "react";

export default function Home() {
  const [artistSearch, setArtistSearch] = useState("");
  const [pagePopulated, setPagePopulated] = useState(false);

  async function handleSubmit() {
    //function to take input value and save variable artistSearch
    let artistName = (
      document.getElementById("searchInput") as HTMLInputElement
    ).value;
    setArtistSearch(artistName);
    let reset = ((
      document.getElementById("searchInput") as HTMLInputElement
    ).value = "");
    setPagePopulated(true);
  }

  return (
    <>
      <div
        className={`flex ${
          pagePopulated ? "" : "h-screen"
        } items-center justify-center w-full`}
      >
        <div className="flex max-w-md m-3 justify-center items-center space-x-2">
          <Input id="searchInput" type="search" placeholder="Search Artist" />
          <Button type="submit" onClick={handleSubmit}>
            Get Gigs!
          </Button>
        </div>
      </div>
      <ArtistSearch artistSearch={artistSearch} />
      {/* <GigSearch /> */}
    </>
  );
}

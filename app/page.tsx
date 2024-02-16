"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ArtistSearch from "../components/ArtistSearch";
import GigSearch from "../components/GigSearch";
import { useState, useEffect } from "react";

export default function Home() {
  const [artistSearch, setArtistSearch] = useState("");

  async function handleSubmit() {
    //function to take input value and save variable artistSearch
    let artistName = (
      document.getElementById("searchInput") as HTMLInputElement
    ).value;
    setArtistSearch(artistName);
  }

  return (
    <>
      <div className="flex w-full max-w-sm m-3 items-center space-x-2">
        <Input id="searchInput" type="search" placeholder="Search Artist" />
        <Button type="submit" onClick={handleSubmit}>
          Get Gigs!
        </Button>
      </div>
      <ArtistSearch artistSearch={artistSearch} />
      {/* <GigSearch /> */}
    </>
  );
}

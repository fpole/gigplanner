"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ArtistSearch from "../components/ArtistSearch";
import { useState } from "react";
import { Nav } from "../components/Nav";
import { Suspense } from "react";

export default function Home() {
  const [artistInput, setArtistInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [artistSearch, setArtistSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [pagePopulated, setPagePopulated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit() {
    // Clear any previous error
    setErrorMessage("");

    if (artistInput === "" && cityInput !== "") {
      setErrorMessage("Please enter an artist name when searching by city");
      return;
    }

    if (artistInput === "") {
      setErrorMessage("Please enter an artist name to search for gigs");
      return;
    }

    setArtistSearch(artistInput);
    setCitySearch(cityInput);
    setArtistInput("");
    setCityInput("");
    setPagePopulated(true);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <>
      <Nav />
      <div className="flex m-3 justify-center items-center space-x-2">
        <Input
          type="search"
          placeholder="Search Artist"
          value={artistInput}
          onChange={(e) => setArtistInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Input
          type="search"
          placeholder="Search City"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button type="submit" onClick={handleSubmit}>
          Get Gigs!
        </Button>
      </div>
      {errorMessage && (
        <div className="flex justify-center mb-4">
          <div className="bg-red-500 border border-red-500 text-white px-4 py-2 rounded-md text-sm max-w-md text-center dark:red-500 dark:border-red-500 dark:text-white">
            {errorMessage}
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <div
          className={`inline-flex ${
            pagePopulated
              ? "invisible h-0"
              : "visible px-3 py-2 m-6 rounded-md border"
          } items-center justify-center text-md text-center`}
        >
          <p>
            Search for an artist to find their upcoming gigs! <br /> You can
            also add a city to narrow down the search.
          </p>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ArtistSearch artistSearch={artistSearch} citySearch={citySearch} />
      </Suspense>
    </>
  );
}

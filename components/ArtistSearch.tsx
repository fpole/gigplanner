"use client";
import { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import GigsCard from "./GigsCard";
import { Artist, ArtistSearchProps, Event } from "../lib/interfaces";

const ArtistSearch = ({ artistSearch, citySearch }: ArtistSearchProps) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [gigs, setGigs] = useState<Event[]>([]);

  useEffect(() => {
    setSearchTerm(artistSearch);
  }, [artistSearch]);

  useEffect(() => {
    if (searchTerm === "") return; // Prevents initial fetch when component mounts

    const fetchArtists = async () => {
      try {
        const response = await fetch(
          `/api/artists/?artistSearch=${searchTerm}`
        );
        const data = await response.json();
        setArtists(data.fetchedArtists);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, [searchTerm]);

  useEffect(() => {
    const id = artists.map((artist) => artist.id).join(",");

    if (citySearch != "") {
      const fetchGigCity = async () => {
        try {
          const response = await fetch(
            `/api/andCity/?id=${id}&city=${citySearch}`
          );
          const data = await response.json();
          setGigs(data.fetchedGigs);
        } catch (error) {
          console.error("Error fetching gigs:", error);
        }
      };
      fetchGigCity();
    } else {
      const fetchGigs = async () => {
        try {
          const response = await fetch(`/api/gigs/?id=${id}`);
          const data = await response.json();
          setGigs(data.fetchedGigs);
        } catch (error) {
          console.error("Error fetching gigs:", error);
        }
      };
      fetchGigs();
    }
  }, [artists, citySearch]);

  return (
    <div>
      <ul>
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </ul>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3  md:grid-cols-2 gap-3 px-3">
        {gigs.map((gig, index) => (
          <GigsCard key={index} gigs={gig} />
        ))}
        {searchTerm != "" && gigs.length === 0 && (
          <div className="px-3 py-2 m-6 rounded-md border text-md text-center">
            Sorry, no gigs were found for this artist! <br /> Try removing the
            city if you added one or try another artist.
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistSearch;

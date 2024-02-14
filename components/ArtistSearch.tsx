"use client";
import React, { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";

interface Artist {
  name: string;
  id: string;
}

const ArtistSearch = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(`/api/artists`);
        const data = await response.json();

        // console.log(data);

        // console.log(data.fetchedArtists);
        setArtists(data.fetchedArtists);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div>
      <h2>Artists:</h2>
      <ul>
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </ul>
    </div>
  );
};

export default ArtistSearch;

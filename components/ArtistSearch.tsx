"use client";
import { useState, useEffect } from "react";
import ArtistCard from "./ArtistCard";
import GigsCard from "./GigsCard";

interface Artist {
  name: string;
  id: string;
}

interface ArtistSearchProps {
  artistSearch: string;
}

interface Event {
  name: string;
  id: string;
  url: string;
  _embedded: {
    attractions: [
      {
        name: string;
      }
    ];
    venues: [
      {
        name: string;
        city: {
          name: string;
        };
        country: {
          name: string;
        };
      }
    ];
  };
  dates: {
    start: {
      localDate: string;
    };
  };
}

const ArtistSearch = ({ artistSearch }: ArtistSearchProps) => {
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
    const fetchGigs = async () => {
      try {
        const response = await fetch(`/api/gigs/?id=${id}`);
        const data = await response.json();

        // console.log(data.fetchedGigs);
        setGigs(data.fetchedGigs);
      } catch (error) {
        console.error("Error fetching gigs:", error);
      }
    };

    fetchGigs();
  }, [artists]);

  return (
    <div>
      {/* <h2>Artists:</h2> */}
      <ul>
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </ul>
      <div className="giggroup">
        {gigs.map((gig, index) => (
          <GigsCard key={index} gigs={gig} />
        ))}
      </div>
    </div>
  );
};

export default ArtistSearch;

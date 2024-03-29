"use client";
import React, { useState, useEffect } from "react";
import GigsCard from "./GigsCard";
import { Event } from "../lib/interfaces";

const GigSearch = () => {
  const [gigs, setGigs] = useState<Event[]>([]);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await fetch(`/api/gigs`);
        const data = await response.json();

        // console.log(data.fetchedGigs);
        setGigs(data.fetchedGigs);
      } catch (error) {
        console.error("Error fetching gigs:", error);
      }
    };

    fetchGigs();
  }, []);

  return (
    <div>
      <h2>Gigs: </h2>
      <div className="giggroup">
        {gigs.map((gig, index) => (
          <GigsCard key={index} gigs={gig} />
        ))}
      </div>
    </div>
  );
};

export default GigSearch;

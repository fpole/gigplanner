import React from "react";
import { GigsCardProps } from "../lib/interfaces";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import FavIcon from "@/components/FavIcon";

const GigsCard: React.FC<GigsCardProps> = ({ gigs }) => {
  const eventName = gigs.name;
  const eventId = gigs.id;
  const artistName = gigs._embedded.attractions[0].name;
  const venue = gigs._embedded.venues[0].name;
  const city = gigs._embedded.venues[0].city.name;
  const country = gigs._embedded.venues[0].country.name;
  const date = gigs.dates.start.localDate;
  const url = gigs.url;

  // const [isFav, setIsFav] = useState(false);
  // function handleFav() {
  //   setIsFav(!isFav);
  // }

  return (
    <div className="gig">
      <div className="cursor-pointer relative">
        <FavIcon favId={eventId} />
        {/* <Heart
          onClick={handleFav}
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all absolute right-1 top-1.5 ${
            isFav ? "fill-white" : ""
          }`}
        /> */}
      </div>
      {/* <h2>Artist: {artistName}</h2> */}
      {/* <p>ID: {eventId}</p> */}
      <p>Event: {eventName}</p>
      <p>Date: {date}</p>
      <p>Venue: {venue}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>

      {/* <a href={url} className="text-decoration: underline" target="_blank">
        Link
      </a> */}

      <Button asChild variant="secondary">
        <Link href={url} target="_blank">
          Click here for tickets!
        </Link>
      </Button>
    </div>
  );
};

export default GigsCard;

import React from "react";
import { GigsCardProps } from "../lib/interfaces";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FavIcon from "@/components/FavIcon";

const GigsCard: React.FC<GigsCardProps> = ({ gigs }) => {
  const eventName = gigs.name || "";
  const eventId = gigs.id;
  const artistName = gigs._embedded?.attractions?.[0]?.name || "";
  const venue = gigs._embedded?.venues?.[0]?.name || "";
  const city = gigs._embedded?.venues?.[0]?.city?.name || "";
  const country = gigs._embedded?.venues?.[0]?.country?.name || "";
  const date = gigs.dates?.start?.localDate || "Date TBA";
  const url = gigs.url || "#";

  if (!eventId || !gigs._embedded?.venues?.[0]) {
    return null;
  }

  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg p-4 shadow-sm transition-all duration-200 hover:bg-accent/50 w-full">
      <div className="cursor-pointer relative">
        <FavIcon favId={eventId} gigData={gigs} />
      </div>
      {/* <h2>Artist: {artistName}</h2> */}
      {/* <p>ID: {eventId}</p> */}
      <div className="space-y-2 mt-2">
        <h3
          className="font-semibold text-lg text-foreground truncate"
          title={eventName}
        >
          {eventName}
        </h3>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Date:</span> {date}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Venue:</span> {venue}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Location:</span> {city},{" "}
          {country}
        </p>
      </div>

      {/* <a href={url} className="text-decoration: underline" target="_blank">
        Link
      </a> */}

      <div className="mt-4">
        <Button asChild variant="secondary" className="w-full">
          <Link href={url} target="_blank">
            Click here for tickets!
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default GigsCard;

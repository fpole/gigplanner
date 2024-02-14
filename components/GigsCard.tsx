import React from "react";

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

interface GigsCardProps {
  gigs: Event;
}

const GigsCard: React.FC<GigsCardProps> = ({ gigs }) => {
  const eventName = gigs.name;
  const eventId = gigs.id;
  const artistName = gigs._embedded.attractions[0].name;
  const venue = gigs._embedded.venues[0].name;
  const city = gigs._embedded.venues[0].city.name;
  const country = gigs._embedded.venues[0].country.name;
  const date = gigs.dates.start.localDate;
  const url = gigs.url;

  return (
    <div className="gig">
      <h2>{artistName}</h2>
      {/* <p>ID: {eventId}</p> */}
      <p>Event: {eventName}</p>
      <p>Date: {date}</p>
      <p>Venue: {venue}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <a href={url} className="text-decoration: underline">
        Link
      </a>
    </div>
  );
};

export default GigsCard;

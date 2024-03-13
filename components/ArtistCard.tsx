import React from "react";
import { ArtistCardProps } from "../lib/interfaces";
import Image from "next/image";

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const { name, id } = artist;
  const image = artist.images[0].url;

  return (
    <>
      <div className="artist">
        <h1>{name}</h1>
        {/* <p>ID: {id}</p> */}
      </div>
      <div className="artistimage">
        <img src={image} alt={name} className="max-h-56" />
      </div>
    </>
  );
};

export default ArtistCard;

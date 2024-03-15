import React from "react";
import { ArtistCardProps } from "../lib/interfaces";
import Image from "next/image";

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const { name, id } = artist;
  const image = artist.images[1].url;

  return (
    <>
      <div className="artist">
        <h1>{name}</h1>
        {/* <p>ID: {id}</p> */}
      </div>
      <div className="artistimage">
        <img src={image} alt={name} className="max-h-52" />
      </div>
    </>
  );
};

export default ArtistCard;

import React from "react";

interface Artist {
  name: string;
  id: string;
}

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const { name, id } = artist;

  return (
    <div>
      <h2>Aritst: {name}</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default ArtistCard;

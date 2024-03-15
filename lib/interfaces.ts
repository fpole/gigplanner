export interface Artist {
  name: string;
  id: string;
  images: {
    url: string;
  }[];
}

export interface ArtistCardProps {
  artist: Artist;
}

export interface ArtistSearchProps {
  artistSearch: string;
  citySearch: string;
}

export interface Event {
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

export interface GigsCardProps {
  gigs: Event;
}

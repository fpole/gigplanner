import { Input } from "@/components/ui/input";
import ArtistSearch from "../components/ArtistSearch";
import GigSearch from "../components/GigSearch";

export default function Home() {
  return (
    <>
      <ArtistSearch />
      <GigSearch />
    </>
  );
}

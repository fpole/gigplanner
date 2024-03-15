"use client";
import { Nav } from "@/components/Nav";

export default function Saved() {
  let favourites = JSON.parse(localStorage.getItem("favourites") as string);
  console.log(favourites);

  return (
    <>
      <Nav></Nav>
    </>
  );
}

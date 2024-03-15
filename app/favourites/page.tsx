"use client";
import { Nav } from "@/components/Nav";
import { useEffect } from "react";

export default function Saved() {
  useEffect(() => {
    let favourites = JSON.parse(localStorage.getItem("favourites") as string);
    console.log(favourites);
  }, []);

  return (
    <>
      <Nav></Nav>
    </>
  );
}

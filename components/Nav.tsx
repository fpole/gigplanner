"use client";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";

export function Nav() {
  const { theme } = useTheme();
  return (
    <nav className="flex flex-col w-screen bg-gray-100 gray-100 dark:bg-[#040c21] drop-shadow-md dark:drop-shadow-2xl">
      <div className=" h-[80px] md:h-[104px] flex justify-between place-items-center p-8">
        <Image
          priority={false}
          className="dark:invert p-[2.5px]"
          height="40"
          width="40"
          alt="Gig Logo"
          src="/favicon.ico"
        />
        <div className="flex gap-4 justify-center items-center">
          <ModeToggle></ModeToggle>
        </div>
      </div>
      <div className="w-screen">
        <Separator />
      </div>
    </nav>
  );
}

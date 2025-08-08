"use client";
import { ModeToggle } from "./ModeToggle";
import { MenuDropdown } from "./MenuDropdown";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export function Nav() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <nav className="flex flex-col w-screen bg-gray-100 gray-100 dark:bg-[#040c21] dark:drop-shadow-2xl">
      <div className="h-[60px] md:h-[84px] flex justify-between place-items-center p-8">
        <div className="flex cursor-pointer" onClick={handleLogoClick}>
          <Image
            priority={false}
            className="dark:invert p-[2.5px]"
            height="40"
            width="40"
            alt="Gig Logo"
            src="/favicon.ico"
          />
          <h1 className="text-xl pt-1.5 font-mono">Search</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <ModeToggle></ModeToggle>
          <MenuDropdown></MenuDropdown>
        </div>
      </div>
      <div className="w-screen">
        <Separator />
      </div>
    </nav>
  );
}

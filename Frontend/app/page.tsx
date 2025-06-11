import HomeClient from "@/components/HomeClient";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <Image
            src="/hero.png"
            alt="Hero Banner"
            width={400}
            height={400}
            priority={true}
          ></Image>
          <h1>
            Find <span className="text-gradient">Movies</span> You&apos;ll Love
            with Ease
          </h1>
        </header>
        <HomeClient />
      </div>
    </main>
  );
}

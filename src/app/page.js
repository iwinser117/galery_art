import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Footer from "./Footer";
import AnimatedTitle from "./AnimatedTitle";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ThemeSwitcher />
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          className="dark:invert"
          src="https://iwinsersanchez.netlify.app/4e1f6738ca0a8e6ae4e8.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
<div className="flex">
        <AnimatedTitle />
      </div>
      </main>
      
      <Footer />
    </div>
  );
}

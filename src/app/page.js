import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Footer from "./Footer";
import AnimatedTitle from "./AnimatedTitle";
import GalleryPreview from "./GalleryPreview";
import GalleryNews from "./GalleryNews";
import ComplexGallery from "./ComplexGallery ";
import AuthorSignature from "./AuthorSignature ";
export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen w-full snap-start flex flex-col items-center justify-between p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ThemeSwitcher className="self-end" />

        <main className="flex flex-col gap-8 items-center sm:items-center">
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

        <div className="animate-bounce">
          ↓ Desliza hacia abajo ↓
        </div>
      </section>

      <section className="w-full snap-start overflow-y-auto">
        <GalleryPreview />
      </section>
      <section className="w-full snap-start overflow-y-auto">
        <GalleryNews />
      </section>

      <section className="w-full snap-start overflow-y-auto">
        <ComplexGallery />
      </section>

      <section className="w-full snap-start overflow-y-auto">
        <AuthorSignature />
      </section>


      <section className="fixed bottom-4 left-0 right-0">
        <Footer />
      </section>
    </div>
  );
}
import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Gallery from "./components/gallery";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 cursor-default">
      <Hero />
      <Gallery />
      <Timeline />
      <Projects />
      {/* <Footer /> */}
    </main>
  );
}

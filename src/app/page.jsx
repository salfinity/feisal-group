import Businesses from "@/components/Businesses";
import CallToAction from "@/components/CallToAction";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Businesses />
      <CallToAction />
      <Reviews />
    </main>
  );
}

import Businesses from "@/components/Businesses";
import CallToAction from "@/components/CallToAction";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import CeoIntroAndMessage from "@/components/CeoIntroAndMessage";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Businesses />
      <CeoIntroAndMessage />
      <CallToAction />
      <Reviews />
    </main>
  );
}

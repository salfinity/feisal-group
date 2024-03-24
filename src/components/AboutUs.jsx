import React from "react";
import Container from "./Container";
import Title from "./Title";
import DesktopFeature, { FeatureMobile } from "./DesktopFeature";

const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      aria-label="Features for investing all your money"
      className="bg-[#990099] py-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
          <Title title="About Feisal Group:" className="text-white text-2xl" />
          <p className="mt-2 text-lg text-gray-400">
            Feisal Group stands as a testament to the vision, resilience, and
            entrepreneurial spirit that define Kenya&apos;s vibrant business
            landscape. Established in the 1990s by the late Cllr. Hussein
            Swaleh, and further developed by his son Feisal Hussein Swaleh,
            Feisal Group has evolved into a multifaceted conglomerate comprising
            several dynamic companies.
          </p>
        </div>
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default AboutUs;

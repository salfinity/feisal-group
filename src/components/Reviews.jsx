import React from "react";
import Container from "./Container";
import Title from "./Title";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <Title
          title="Everyone is changing their life with Feisal-group."
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        />
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have doubled their potential in the last 30 days.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
};

export default Reviews;

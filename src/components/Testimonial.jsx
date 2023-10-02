import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Sachin Singh"}
          feedback={"great skills"}
        />

        <TestimonialCard
          name={"Rohan"}
          feedback={
            "nice projects"
          }
        />

        <TestimonialCard
          name={"Code Clause"}
          feedback={"resposible and dedicated to learn"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
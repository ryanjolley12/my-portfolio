import React from 'react';

import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
      <h1 id="about">Ryan Jolley</h1>
      <h2 id="about"> Full Stack Developer</h2>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;
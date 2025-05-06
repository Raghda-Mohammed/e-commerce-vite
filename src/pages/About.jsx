import React from "react";
import OurStory from "../components/About/OurStory";
import Archievements from "../components/About/Archievements";
import Persons from "../components/About/Persons";
import Services from "../components/About/Services";


const About = () => {
  return (
    <div>
      <OurStory />
      <Archievements />
      <Persons />
      <Services />
    </div>
  );
};

export default About;

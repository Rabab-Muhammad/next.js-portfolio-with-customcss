import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';

const data = [
  {
    id: 0,
    title: "Countdown Timer",
    desc: "Next.js & Typescript powered website to track time with an interactive countdown feature",
    img: "/countdown_timer.png",
    tags: ["Next.js", "Node", "Css", "Typescript"],
  },
  {
    id: 1,
    title: "Weather Widget",
    desc: "Next.js & Typescript tool for fetching and displaying real time data",
    img: "/weather-widget.png",
    tags: ["Next.js", "Node", "Css", "Typescript"],
  },
  {
    id: 2,
    title: "Static Interactive Resume",
    desc: "A Typescript-based interactive resume built with HTML & CSS, allowing user to showcase their skills",
    img: "/resume.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Project = () => {
  return (
    <div id="projects" className="projects-div">
      <Heading title="My Projects" />
      <div className="projects-grid projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

import { useState, useEffect } from "react";

import {
  getFrontpageText,
  getSocietyGoals,
  getEvents,
  getProjects,
  getTechnologiesUsed,
  getPostHolders
} from "./../getters";

import CircularLogoAndText from "./../components/Sections/CircularLogoAndText";
import CardsSection from "./../components/Sections/CardsSection";
import TechnologiesSection from "./../components/Sections/TechnologiesSection";

import SocietyGoalCard from "./../components/Cards/SocietyGoalCard";
import ProjectsCard from "./../components/Cards/ProjectsCard";
import TechnologyCard from "./../components/Cards/TechnologyCard";
import PostHolderCard from "./../components/Cards/PostHolderCard";

import "./css/HomePage.css";

export default function HomePage() {
  const [fpText, setFpText] = useState({});
  const [goals, setGoals] = useState([]);
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [postHolders, setPostHolders] = useState([]);

  useEffect(_ => {
    setFpText(getFrontpageText());
    setGoals(getSocietyGoals());
    setEvents(getEvents());
    setProjects(getProjects());
    setTechnologies(getTechnologiesUsed());
    setPostHolders(getPostHolders());
  }, []);

  return (
    <>
      <CircularLogoAndText
        title={fpText.title}
        subtitle={fpText.subtitle}
        logoPath="/images/site-logo.png"
        logoAlt="ladsjfladjfa"
        />

      <CardsSection
        title={"Society Goals"}
        cards={
          goals.map((i, id) =>
            <SocietyGoalCard
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

      <CardsSection
        title={"Events"}
        cards={
          events.map((i, id) =>
            <SocietyGoalCard
              key={`event-${id}`}
              img={i.img}
              alt={`${i.title} Poster`}
              title={i.title}
              subtitle={i.description}
              />
          )
        }
        />

      <CardsSection
        title={"Projects"}
        cards={
          projects.map((i, id) =>
            <ProjectsCard
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

      <CardsSection
        title={"Technologies"}
        cards={
          technologies.map((i, id) =>
            <TechnologyCard
              key={id}
              img={i.img}
              title={i.title}
              subtitle={i.subtitle}
              />
          )
        }
        />

      <CardsSection
        title={"Post Holders"}
        cards={
          postHolders.map((i, id) =>
            <PostHolderCard
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />
    </>
  );
}

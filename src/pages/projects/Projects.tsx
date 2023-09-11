import React from "react";
import { Container, Row } from "react-bootstrap";

import { Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

const KData = [
  {
    name: "Ambient Spotify",
    id: "ambientspotify",
    img: "src/img/ambientspotify.PNG",
    text: "An ambient now-playing screen",
  },
  {
    name: "Simple Stats V2",
    id: "simplestats",
    img: "src/img/simplestats.PNG",
    text: "An elegant PC stats monitor",
  },
  {
    name: "People Planner",
    id: "peopleplanner",
    img: "src/img/peopleplanner.PNG",
    text: "A simple planning tool for groups",
  },
  {
    name: "Minimal Mini Spotify",
    id: "minimalminispotify",
    img: "src/img/minimalminispotify.PNG",
    text: "A mini Spotify player using Electron",
  },
];

const KParallax = () => {
  return (
    <Swiper
      className="container parallax__container"
      modules={[Pagination, Parallax]}
      spaceBetween={10}
      slidesPerView={2}
      pagination={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {KData.map(({ name, id, text }, index) => {
        return (
          <SwiperSlide key={index} className="projects">
            <div className="project-card" id={id}>
              <div className="project-text ">
                <h4 className="project-title">{name}</h4>
                <small className="project-info">{text}</small>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const Projects = () => {
  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-1">
          <Row>
            <h2>Projects</h2>
            <h5>
              You can find these on my{" "}
              <a href="https://github.com/kishanmanoharan">Github</a>
            </h5>
          </Row>
        </Container>
        <Container className="title-pad-0">
          <Row>
            <KParallax />
          </Row>
        </Container>
      </Container>
    </>
  );
};

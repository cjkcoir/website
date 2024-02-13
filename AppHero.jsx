import React from "react";
import Carousel from "react-bootstrap/Carousel";

function AppHero() {
  var heroData = [
    {
      id: 1,
      image: require("./assets/images/img-hero1.jpg").default,
      title: "The Perfect design for your Website",
      description: "lorem25",
      link: "https://www.google.com",
    },

    {
      id: 1,
      image: require("./assets/images/img-hero2.jpg").default,
      title: "The Perfect design for your Website",
      description: "lorem25",
      link: "https://www.google.com",
    },

    {
      id: 1,
      image: require("./assets/images/img-hero3.jpg").default,
      title: "The Perfect design for your Website",
      description: "lorem25",
      link: "https://www.google.com",
    },
  ];

  return (
    <>
      <section id="home" className="hero-block">
        <Carousel data-bs-theme="dark">
          {heroData.map((hero) => {
            return (
              <>
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"Slide" + hero.id}
                  />
                  <Carousel.Caption>
                    <h5>{hero.title}</h5>
                    <p>{hero.description}</p>
                    <a href={hero.link} className="btn btn-primary">
                      Learn More
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              </>
            );
          })}
        </Carousel>
      </section>
    </>
  );
}

export default AppHero;

import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, accusantium?",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, accusantium?",
      },
      {
        icon: <FaShuttleVan />,
        title: "express shuttle",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, accusantium?",
      },
      {
        icon: <FaBeer />,
        title: "countless drink options",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, accusantium?",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import { RoomContext } from "../contex";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { isLoading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="feature-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {isLoading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import { RoomContext } from "../contex";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);

    return (
      <div>
        Featured Rooms
        <Loading />
      </div>
    );
  }
}

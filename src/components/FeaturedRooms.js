import React, { Component } from "react";
import { RoomContext } from "../contex";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const value = this.context;

    return <div>Featured Rooms</div>;
  }
}

import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../contex";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { isLoading, sortedRooms, rooms } = context;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      rooms container
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);

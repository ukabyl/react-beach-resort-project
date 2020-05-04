import React, { useContext } from 'react';
import { RoomsFilter } from './rooms-filter';
import { RoomsList } from './rooms-list';
import { RoomContext } from '../context';
import Loading from './loading';

export const RoomsContainer = () => {
    const context = useContext(RoomContext);
    const { loading, sortedRooms, rooms } = context;

    if ( loading ) {
        return <Loading />
    }

    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList  rooms={sortedRooms} />
        </>
    )
}

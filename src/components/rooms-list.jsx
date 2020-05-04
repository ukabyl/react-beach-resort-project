import React from 'react';
import { Room } from './room';

export const RoomsList = ({ rooms }) => {
    if ( rooms.length < 1 ) {
        return (
            <div className="empty-search">
                <h3>
                    unfortunately no rooms matched your parameters
                </h3>
            </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(room => {
                        return <Room key={room.id} room={room} />
                    })
                }    
            </div>   
        </section>
    )
}

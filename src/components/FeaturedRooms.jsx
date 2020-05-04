import React, { useContext } from 'react'

import { RoomContext } from '../context';
import Loading from './loading';
import { Room } from './room';
import Title from './title';

const FeaturedRooms = () =>{
    const data = useContext(RoomContext)
    const { loading, featuredRooms } = data;
        const rooms = featuredRooms.map(room => {
            return (
                <Room key={ room.id } room={ room } />
            );
        })
    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {
                    loading ? <Loading /> : rooms  
                }
            </div>       
        </section>
    );
}

export default FeaturedRooms;
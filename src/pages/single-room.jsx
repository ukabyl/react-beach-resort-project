import React, { useContext } from 'react'
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/styled-hero';

const SingleRoom = (props) => {
    const state = {
        slug: props.match.params.slug};
    const context = useContext(RoomContext);
    const { getRoom } = context;
    const room = getRoom(state.slug);
    if (!room) {
        return (
            <div className="error">
                <h3>no such room exists</h3>
                <Link to="/rooms/" className="btn-primary">back to rooms</Link>
            </div>
        )
    }
    const { 
        name,
        extras,
        pets,
        price,
        breakfast,
        size,
        description,
        capacity, 
        images 
    } = room;

    const [ mainImg, ...restImgs ] = images;

    return (
        <>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms/" className="btn-primary">go to rooms</Link>
                </Banner>
            </StyledHero>
             <section className="single-room">
                <div className="single-room-images">
                    {
                        restImgs.map((img , index) => <img key={index} src={img} alt={name} />)
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{ description }</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${ price }</h6>
                        <h6>size: { size } SQFT</h6>
                        <h6>max capacity: { capacity > 1 ? capacity + ' people' : '1 person' }</h6>
                        <h6> { pets ? 'pets allowed' : 'no pets allowed' }</h6>
                        <h6> { breakfast && 'free breakfast included' } </h6>

                    </article>    
                </div>   
             </section>
             <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {
                            extras.map((extra, index) => (
                                <li key={index}>
                                    - {extra}
                                </li>
                            ))
                        }
                    </ul>
             </section>
        </>
    );

}

export default SingleRoom;


import React, { Component } from 'react'

import items from './data';
const RoomContext = React.createContext();

const { Consumer: RoomContextConsumer, Provider: RoomContextProvider } = RoomContext;

class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    // Get Data
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        const maxSize = Math.max(...rooms.map(item => item.size));
        const maxPrice = Math.max(...rooms.map(item => item.price));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxSize,
            maxPrice
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {
                ...item.fields, images,
                id
            };
            return room;
        })
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        let room = tempRooms.find(room => room.slug === slug);
        return room; 
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        }, this.filterRooms);
        

    }
    
    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast,
        pets } = this.state;

        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        // by type
        if ( type !== 'all' ) {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        //by capacity
        if ( capacity !== 1 ) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        // fitler by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize );
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === breakfast );
        }
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === pets );
        }
        //change state
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContextProvider value={{ 
                    ...this.state, 
                    getRoom: this.getRoom, 
                    handleChange: this.handleChange
                }} >
                {
                    this.props.children
                }
            </RoomContextProvider>
        );
    }
}

export { RoomContextConsumer, RoomProvider, RoomContext };

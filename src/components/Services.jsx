import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './title';

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ullam.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ullam.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ullam.'
            },
            {
                icon: <FaBeer />,
                title: 'strongest beer',
                info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ullam.'
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {
                        this.state.services.map(({ icon, title, info }, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{ icon }</span>
                                    <h6>{ title }</h6>
                                    <p> { info } </p>
                                </article>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}
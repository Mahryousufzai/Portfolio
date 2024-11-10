import React from 'react';
import Heading from './Heading';
import Card from './Card';


const data = [
    {
        id: 0,
        title: "Todo list",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/todo.png",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "CountDown Timer",
        desc: "A Next.js & Typescript powered website to track time",
        img: "/countdown.jpg",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "A simple calculator",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/calculator.webp",
        tags: ["Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "ATM machine",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/atm.jpg",
        tags: ["Node", "CSS", "Typescript"],
    },
    {
        id: 4,
        title: "Currency converter",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/currency.png",
        tags: ["Node", "CSS", "Typescript"],
    },
    {
        id: 4,
        title: "Resume builder",
        desc: "A React & Typescript based app for managing and organizing",
        img: "/resume.webp",
        tags: ["Node", "CSS", "Typescript"],
    },
];
export default function Projects() {
    return (
        <div id='projects' className='container mx-auto pt-32'>
            <Heading title="My projects" />
            <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (
                    <Card 
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    );
}






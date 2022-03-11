import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './SkillDetails.css';

const SkillDetails = () => {
    const {id} = useParams()

    const skillsDetails = [
        {
            name: "Javascript",
            id: "javascript",
            intro: "I eagered to learn Js for Validation of User's Input in my php projects.I realized Js must required for better development.",
            knowledge: "I know how Js works asynchronously though Js synchronous,single thread.How Event Loop works and when function go to call stack and queue.Also I know ES6 Functionalities and methods.",
            projects: "I build some of projects which based on Dom Manupulation, Form Validation and fetch data."
        },
        {
            name: "React",
            id:"react",
            intro: "My most frequently utilized technology stack is React. It appeals to me greatly. It was the first library I ever learnt about, and I've never looked back. React is used in all of my projects, along with other technological stacks. I intend to utilize TypeScript exclusively with React in the future, rather than JavaScript.",
            knowledge: "I have a lot of knowledge! I'm familiar with the component structure and how it helps to keep our code tidy, organized, and reusable. I also know how to make a multi-page application with React Router. If we're using function-based components, I can easily simulate these methods with React hooks. I know how to centralize state with context. Lastly, I used react Functional component.",
            projects: "Every project I've worked on thus far has used React as its front-end. You can see them by visiting the project area of my portfolio."
        },
        {
            name: "Php",
            id: "php",
            intro: "I finish a Course at my University named Web Technology. Programming is not difficult so much if you understand carefully I realized and understood at that time.",
            knowledge: "I learned huge and applied that knowledge in that course projects also.How to login,register using session and cookie after that connect with mysql.and through query show all data from database. Also I used json and ajax with php.Using ajax I implemented search functionality.After Successfully finished this course and earned A+.",
            projects: "I did some of projects individually also two group projects did within Web Technology course."
        },
        {
            name: "Laravel",
            id: "laravel",
            intro: "After Learning php I decided to learn laravel.Then Taking decision I stared to learn by myself from yootube.",
            knowledge: "I know how to create router,controller and view.Since laravel follow MVC rules.Also I know how to use query builder,Object Relational Model.How to show pagination and use ajax with laravel.Also I know how to upload file in local directory and create api which can test in Postman.",
            projects: "I finished 2 of project those are not so much advance stuff I used.But Both projects were simple crud operation."
        },
        {
            name: "Node",
            id: "node",
            intro: "Node was second introduction to the world of back-end development. I started to learn node deeply,somehow I didn't finish the major stuff. but in the future, I want to learn everything.",
            knowledge: "I need time to recheck again. I hpe within som of days I can cover everything.",
            projects: "All my full-stack projects use Node and Express for their back-end. "
        },
        {
            name: "Express",
            id: "express",
            intro: "When working with Node, I always utilize the Express library. It greatly simplifies my life.",
            knowledge: "I know how to organize my back-end files and folders in a way that follows industry standards. To construct a full-fledged CRUD application, I can write a variety of routes. In addition, I construct middleware functions to run code before it reaches the final callback. Before granting access to a given route, a common middleware I use verifies that the user is even authenticated.",
            projects: "I utilize both Node and Express when I use Node. I've utilized Express in Apartment and Charitox projects so far. Go to the projects section of my website to see them."
        },
        {
            name: "MongoDB",
            id: "mongodb",
            intro: "So far, MongoDB has been my database of choice, though before using MongoDb I used Mysql.So,I can differenciate How easy to use MongoDB.",
            knowledge: "I understand how to create documents. To link documents together. I understand how to use Mongoose to perform all the necessary CRUD operations. I also know how to store and retrieve user authentication information with Mongo.",
            projects: "Check these projects out by going to the project section."
        },
        {
            name: "MySQL",
            id: "mysql",
            intro: "I've been primarily using Mysql before learning MongoDB as my database. I like the concept of organizing data in tables and then referencing them to other tables.",
            knowledge: "I understand how to create databases and tables. I am also capable of performing all the CRUD operations. I can write queries.",
            projects: "I built some of project through Mysql.I learned Mysql at My University Course and did some of University projects."
        },
        // {
            // name: "TypeScript",
            // id: "typescript",
            // intro: "",
            // knowledge: "",
            // projects: ""
        // },
        // {
        //     name: "Redux",
        //     id: "redux",
        // intro: "",
        // knowledge: "",
        // projects: ""
        // },

    ]

    return (
        <div className='details-container'>
            {
                skillsDetails.map(skill => (
                    <div key={skill.name}>
                    {skill.id === id ? <div>
                        <div className="ProjectDetails_heading">{skill.name}</div>
                        <div className="ProjectDetails_description">{skill.intro}</div>
                        <div className="ProjectDetails_sub-header">What I know</div>
                        <div className="ProjectDetails_description">{skill.knowledge}</div>
                        <div className="ProjectDetails_sub-header">Projects with {skill.name}</div>
                        <div className="ProjectDetails_description">{skill.projects}</div>
                        <Link to="/" className='go-back'>go back</Link>

                    </div> : ''}
                    </div>
                    )
                    
                )
            }
        </div>
    );
};

export default SkillDetails;
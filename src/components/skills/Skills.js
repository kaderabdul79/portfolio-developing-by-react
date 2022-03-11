import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            name: "Javascript",
            id:"javascript",
            img: "https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2020/04/javascript-960x504.png",
        },
        {
            name: "React",
            id:"react",
            img: "https://dtmvamahs40ux.cloudfront.net/gl-academy/course/course-508-reactjs.jpg",
        },
        {
            name: "Php",
            id: "php",
            img: "https://heera.it/wp-content/uploads/2013/06/php-leader.png",
        },
        {
            name: "Laravel",
            id: "laravel",
            img: "https://laravelnews.imgix.net/images/laravel-featured.png?ixlib=php-3.3.1",
        },
        {
            name: "Node",
            id: "node",
            img: "https://images8.alphacoders.com/380/380534.png",
        },
        {
            name: "Express",
            id: "express",
            img: "https://raygun.com/blog/wp-content/uploads/2015/04/express1.png",
        },
        {
            name: "MongoDB",
            id: "mongodb",
            img: "https://lh3.googleusercontent.com/iKHbqfOA22cBvWvdnGoi165ZxDy6lqWHDIrmDGORZU0NvNX_CgnexW8OgKmDVd5sQongQwCwsqsnu3SJCCPySlozJFYnJRE=s600",
        },
        {
            name: "MySQL",
            id: "mysql",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0DBkyBH8Xk41fW9jmSxidUCEHaQo0XAR_Ezr1R1LEBjkxPQwR&usqp=CAU",
        },
        // {
        //     name: "TypeScript",
        //     id: "typescript",
        //     img: "https://blog.syncfusion.com/wp-content/uploads/2018/08/ts_tile.png",
        // },
        // {
        //     name: "Redux",
        //     id: "redux",
        //     img: "https://chriscourses.com/img/blog/redux/redux.jpg",
        // },

    ]

    return (
        <div className="skills-area" id="skills">
            <div className="skills-title">MY SKILLS</div>
            <p>Okay, sufficient of me describing myself to you,visitor. It's high time for you to check out my skills! Tap on a card and you'll get a brief description of what I know almost that specific technology.</p>
                <div className="skill-container">
                {
                    skills.map(skill => (
                        <Link to={`/skills/${skill.id}`} className="skill-box" key={skill.id}><img src={skill.img} alt="skillsimage" /></Link>
                    ))
                }
                </div>
        </div>
    );
};

export default Skills;
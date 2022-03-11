import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
    const {name, description, status, reason, techStack, ImagesURL, url, id} = props.project
// console.log(props.project)

    function visitWebsite(url) {
        // console.log(url)
        window.location.replace(`${url}`)
    }

    return (
        <div>
            <div className="Project__heading">{name}</div>
                <div className="Project__line"></div>
                <p className='Project__description'>{description}</p>
                <img style={{width: '600px'}} src={ImagesURL} alt="project showcase" />
                <div className="Project__btn-container">
                <Link className='learnmore-btn' to={`projects/${id}`}>learn more</Link>
                {/* <Link className='visitwebsite-btn' to={url}>visit website</Link> */}
                <button onClick={()=>visitWebsite(url)}><Link className='learnmore-btn' to="">visit website</Link></button>
            </div>
        </div>
    );
};

export default Project;
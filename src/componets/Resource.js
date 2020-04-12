import React from 'react';

const Resource = (props) => {
    const {title, resourceAuthor, authorSkillLevel, datePublished, videoLength, comments} = props.resource
    return (
        <div>
            <h3>{title}</h3>
            <pre>
                Author: {resourceAuthor}
                <br />
                Author's Skill Level: {authorSkillLevel}
                <br />
                Published on: {Date(datePublished)}
                <br />
                Video Length: {videoLength ? videoLength : 'No video length'}
                <br />
                Comments {comments.length}: 
            </pre>
        </div>
    )
}


export default Resource;
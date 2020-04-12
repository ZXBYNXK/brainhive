import React from 'react';

function Resource (props) {
    const {title, resourceAuthor, authorSkillLevel, datePublished, videoLength, comments, imageSource} = props.resource
    const defaultImageSource = 'https://pngimage.net/wp-content/uploads/2018/06/no-image-png-2.png'
    return (
        <div className="card">
            <button className="btn-secondary ">{title}</button>
            <img className="img-top" src={imageSource || defaultImageSource} width="20%" height="20%"/>
            <div className="card-body">
                <pre className="card-text">
                <span className="card-subtitle"> Author: </span> {resourceAuthor} 
                <br />
                <span> Author's Skill Level: </span> {authorSkillLevel}
                <br />
                <span> Published on: </span>{Date(datePublished)}
                <br />
                <span> Video Length: </span>{videoLength ? videoLength : 'No video length'}
                <br />
                <span> Comments </span> {comments.length} 
                </pre>
            </div>
        </div>
    )
}

export default Resource
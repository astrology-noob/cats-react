import React from "react";

export default ({cat}) => {
    return <div className="catCard">
        <div className="image" style={{backgroundImage: "url('" + cat.img_link + "')"}}></div>
        <div className="info">
            <p>{cat.name}</p>
            <p>{cat.age}</p>
            <p>{cat.rate}</p>
            <p>{cat.favourite}</p>
            <p>{cat.description}</p>
        </div>
    </div>
}
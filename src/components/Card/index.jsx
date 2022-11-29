import React from "react";

export default ({cat}) => {

    let age = cat.age;
    if (age < 10 || age > 20) {
        if (age % 10 == 1) {
            age += " год";
        }
        else if (age % 10 == 2 || age % 10 == 3 || age % 10 == 4){
            age += " года";
        }
        else {
            age += " лет";
        }
    }
    else {
        age += " лет";
    }

    let rating = [];
    for (let i = 0; i < 10; i++){
        if (i < cat.rate) {
            rating[i] = <i class="bi bi-heart-fill"></i>
        }
        else {
            rating[i] = <i class="bi bi-heart"></i>
        }
    }

    return <div className="card">
        <img className="card-img-top" src={cat.img_link}/>
        <div className="card-body">
            <h5 className="card-title">{cat.name}</h5>
            <p className="card-text">{age}</p>
            <div className="rating">
                {rating}
            </div>
            <p className="card-text">{cat.favourite}</p>
            <p className="card-text">{cat.description}</p>
        </div>
    </div>
}
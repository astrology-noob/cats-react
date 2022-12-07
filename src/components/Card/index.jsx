import React, {useContext, useState} from "react";
import {Ctx} from "../../App";
import "./style.css";
import FavIcon from "../../assets/favorite_icon.svg";
import FavIconActive from "../../assets/favorite_icon_active.svg";
import EditIcon from "../../assets/edit_icon.svg";

const getAgeString = (age) => {
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
}


export default ({cat}) => {

    const {Api} = useContext(Ctx);
    const [favorite, setFavorite] = useState(cat.favorite);
    
    const HandleFavorite = () => {
        // Api.updateCat(cat.id);
        setFavorite(!favorite);
    }

    let age = cat.age;
    getAgeString(age);

    let rating = [];
    for (let i = 0; i < 10; i++){
        if (i < cat.rate) {
            rating[i] = <i key={i} className="bi bi-heart-fill"></i>
        }
        else {
            rating[i] = <i key={i} className="bi bi-heart"></i>
        }
    }

    return <div className="card">
        <button className="favorite_btn" onClick={HandleFavorite}>
            <img src={favorite ? FavIconActive : FavIcon}/>
        </button>
        <img className="card-img-top" src={cat.image}/>
        <div className="card-body">
            <div className="body_top">
                <h5 className="card-title">{cat.name}</h5>
                <button className="edit_btn">
                    <img src={EditIcon}/>
                </button>
            </div>
            <p className="card-text">{age}</p>
            <div className="rating">
                {rating}
            </div>
            <p className="card-text">{cat.description}</p>
        </div>
    </div>
}
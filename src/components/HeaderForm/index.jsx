import React, {useState, useContext} from "react";
import cross from "bootstrap-icons/icons/x.svg";
import "./style.css";
import {Ctx} from "../../App";

export default () => {
    const {Api, setCats} = useContext(Ctx);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [age, setAge] = useState("");
    const [rate, setRate] = useState("");
    // const [favorite, setFavorite] = useState(false);
    const [description, setDescription] = useState("");
    
    const handler = (e) => {
        e.preventDefault();
        
        // проверить есть ли уже такой id
        
        const body = {
            "id": id,
            "name": name,
            "rate": rate,
            "age": age,
            "favorite": false,
            "description": description,
            "image": image,
        }
        
        // console.log(body);
        const result = Api.addCat(body);

        setId("");
        setName("");
        setImage("");
        setAge("");
        setRate("");
        setDescription("");

        Api.getAll().then(data => setCats(data));
    }

    return <div className="header">
            <div className="header_form_wrapper">
                <form onSubmit={handler}>
                    <input type="text" className="form-control" placeholder="ID" name="id" value={id} onChange={e => setId(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Имя" name="name" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Ссылка на фотографию" name="image" value={image} onChange={e => setImage(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Возраст" name="age" value={age} onChange={e => setAge(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Рейтинг" name="rate" value={rate} onChange={e => setRate(e.target.value)}/>
                    <input type="text" className="form-control" placeholder="Описание" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                    <button type="submit" className="btn btn-primary">Добавить</button>
                </form>
            </div>
        </div>
}
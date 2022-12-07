import React, {useState, useContext} from "react";
import cross from "bootstrap-icons/icons/x.svg";
import Api from "../../api.js";
import {Ctx} from "../../App";
import "./style.css";

export default () => {
    const {setCats, curCatId, setCurCatId, modalState, setModalState, curName, setCurName, curAge, setCurAge, curRate, setCurRate, curImage, setCurImage, curDescription, setCurDescription} = useContext(Ctx);

    const style = {
        display: modalState ? "flex" : "none"
    }

    const modalFormHandler = (e) => {

        if (e.target.value == "update"){
            editHandler();
        }
        else if (e.target.value == "delete"){
            deleteHandler();
        }

        clear();
    }

    const editHandler = () => {
        const body = {
            "id": curCatId,
            "name": curName,
            "image": curImage,
            "age": curAge,
            "rate": curRate,
            "description": curDescription
        }
        
        const result = Api.updateCat(curCatId, body);
    }

    const deleteHandler = () => {
        const result = Api.deleteCat(curCatId);
        Api.getAll().then(data => setCats(data));
    }

    const clear = () => {
        setCurCatId(0);
        setCurName("");
        setCurImage("");
        setCurAge("");
        setCurRate("");
        setCurDescription("");
        setModalState(false);
    }

    return <div className="modal" style={style}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Изменить кота</h3>
                    <div className="modal__close" onClick={clear}><img src={cross}/></div>
                </div>

                <div className="modal-body">
                    <form>
                        <label htmlFor="name" className="form-label">Имя кота</label>
                        <input className="form-control" type="text" name="name" value={curName} onChange={e => setCurName(e.target.value)}/>
                        <label htmlFor="image" className="form-label">Ссылка на изображение</label>
                        <input className="form-control" type="text" name="image" value={curImage} onChange={e => setCurImage(e.target.value)}/>
                        <label htmlFor="age" className="form-label">Возраст</label>
                        <input className="form-control" type="number" name="age" value={curAge} onChange={e => setCurAge(e.target.value)}/>
                        <label htmlFor="rate" className="form-label">Рейтинг</label>
                        <input className="form-control" type="number" name="rate" value={curRate} onChange={e => setCurRate(e.target.value)}/>
                        <label htmlFor="description" className="form-label">Описание</label>
                        <input className="form-control" type="text" name="description" value={curDescription} onChange={e => setCurDescription(e.target.value)}/>
                    </form>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-primary" type="submit" name="submit" value="update" onClick={modalFormHandler}>Обновить</button>
                    <button className="btn btn-danger" type="submit" name="submit" value="delete" onClick={modalFormHandler}>Удалить</button>
                </div>
            </div>
        </div>
    </div>
}
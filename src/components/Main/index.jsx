import React, {useContext} from "react";
import Card from "../Card";
import {Ctx} from "../../App";

export default () => {
    const {cats} = useContext(Ctx);

    return <main>
        
        <div className="buttons">
            <button type="button" className="btn btn-success">Добавить</button>
            <button type="button" className="btn btn-warning">Изменить</button>
            <button type="button" className="btn btn-danger">Удалить</button>
        </div>

        <div className="cards">
            {cats.map(cat => <Card key={cat.id} cat={cat}/>)}
        </div>
    </main>
}
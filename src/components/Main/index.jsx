import React, {useContext} from "react";
import Card from "../Card";
import {Ctx} from "../../App";
import "./style.css";

export default () => {
    const {cats} = useContext(Ctx);

    return <main>
        <div className="cards">
            {cats.map(cat => <Card key={cat.id} cat={cat}/>)}
        </div>
    </main>
}
import React from "react";
import Card from "../Card";

export default ({cats}) => {
    return <main>
        {cats.map(cat => <Card key={cat.id} cat={cat}/>)}
    </main>
}
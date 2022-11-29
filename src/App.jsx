import React from "react";
import data from "./assets/data.json";
import Main from "./components/Main";

const Ctx = React.createContext({});

const App = () => {
    return <Ctx.Provider value={{
        cats: data["cats"]
    }}>
        <Main/>
    </Ctx.Provider>
}

export {App, Ctx}
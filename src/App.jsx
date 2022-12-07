import React, {useState, useEffect} from "react";
// import data from "./assets/data.json";
import Main from "./components/Main";
import Api from "../src/api.js";
import HeaderForm from "./components/HeaderForm";

const Ctx = React.createContext({});


const App = () => {
    const [cats, setCats] = useState([]);
    const [modalState, setModalState] = useState(false);
    
    useEffect(() => {
        Api.getAll().then(data => setCats(data))
    }, []);
    
    return <Ctx.Provider value={{
        cats: cats,
        setCats: setCats,
        Api: Api,
        modalState: modalState,
        setModalState, setModalState
    }}>

        <HeaderForm/>
        <Main/>

    </Ctx.Provider>
}

export {App, Ctx}
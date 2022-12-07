import React, {useState, useEffect} from "react";
import Main from "./components/Main";
import Api from "../src/api.js";
import HeaderForm from "./components/HeaderForm";
import Modal from "./components/Modal";

const Ctx = React.createContext({});


const App = () => {
    const [cats, setCats] = useState([]);
    const [ids, setIds] = useState([]);
    const [curCatId, seCurCatId] = useState(4);
    const [curName, setCurName] = useState("");
    const [curImage, setCurImage] = useState("");
    const [curAge, setCurAge] = useState("");
    const [curRate, setCurRate] = useState("");
    const [curDescription, setCurDescription] = useState("");
    const [curFavorite, setCurFavorite] = useState(false);
    const [modalState, setModalState] = useState(false);
    
    useEffect(() => {
        Api.getAll().then(data => setCats(data))
    }, []);

    useEffect(() => {
        Api.getIds().then(data => setIds(data))
    }, []);
    
    return <Ctx.Provider value={{
        cats: cats,
        setCats: setCats,
        Api: Api,
        ids: ids,
        setIds, setIds,
        curCatId: curCatId,
        setCurCatId: seCurCatId,
        curName: curName,
        setCurName: setCurName,
        curImage: curImage,
        setCurImage: setCurImage,
        curAge: curAge,
        setCurAge: setCurAge,
        curRate: curRate,
        setCurRate: setCurRate, 
        curDescription: curDescription,
        setCurDescription: setCurDescription,
        curFavorite: curFavorite,
        setCurFavorite: setCurFavorite,
        modalState: modalState,
        setModalState: setModalState
    }}>

        <HeaderForm/>
        <Main/>
        <Modal/>

    </Ctx.Provider>
}

export {App, Ctx}
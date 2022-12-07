import 'regenerator-runtime/runtime';

class Api {

    static async getAll(path = "https://cats.petiteweb.dev/api/single/astrology_noob/show") {
        return await fetch(path).then(res => res.json()).then(data => data);
    }

    static async getSingle(id, path="https://cats.petiteweb.dev/api/single/astrology_noob/show") {
        return await fetch(path + "/" + id).then(res => res.json()).then(data => data.data);
    }

    static async addCat(body, path="https://cats.petiteweb.dev/api/single/astrology_noob/add") {
        console.log(JSON.stringify(body));
        return await fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }

    // static async updateAnimal(id, body, path="https://wwf-server.herokuapp.com/api/animals") {
    //     return await fetch(path + "/update/" + id, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(body)
    //     }).then(res => res.json()).then(data => data);
    // }

    static async getIds(path="https://cats.petiteweb.dev/api/single/astrology_noob/ids") {
        return await fetch(path).then(res => res.json()).then(data => data);
    }

    static async updateCat(id, body, path="https://cats.petiteweb.dev/api/single/astrology_noob/update") {
        return await fetch(path + "/" + id, {
                    method: "PUT",  
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(body)
                }).then(res => res.json()).then(data => data.data);
    }

    static async deleteCat(id, path="https://cats.petiteweb.dev/api/single/astrology_noob/delete") {
        return await fetch(path + "/" + id, {
            method: "DELETE"
        }).then(res => res.json()).then(data => data.data);
    }
}

export default Api;
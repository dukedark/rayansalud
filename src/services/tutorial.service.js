import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/trayentutorialtestapp.azurewebsites.net/tutorials");
    }

    get(id) {
        return http.get(`/trayentutorialtestapp.azurewebsites.net/tutorials?description=${id}`);
    }

    create(data) {
        return http.post("/trayentutorialtestapp.azurewebsites.net/createtutorial", data);
    }

    update(id, data) {
        return http.put(`/trayentutorialtestapp.azurewebsites.net/updatetutorial/${id}`, data);
    }

    delete(id) {
        return http.delete(`/trayentutorialtestapp.azurewebsites.net/deleteturial/${id}`);
    }

    deleteAll() {
        return http.delete(`/trayentutorialtestapp.azurewebsites.net/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/trayentutorialtestapp.azurewebsites.net/tutorials?title=${title}`);
    }
}

export default new TutorialDataService();
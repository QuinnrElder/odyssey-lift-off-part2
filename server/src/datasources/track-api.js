const { RESTDataSource } = require("apollo-datasource-rest");

class TrackApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }

    getTracksForHome () {
        return this.get('tracks')
    }
    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }
    getSpaceCats () {
        return this.get('spacecats');
    };
    getMissions (catId) {
        return this.get(`spacecats/${catId}/missions`);
    }
};

module.exports = TrackApi;
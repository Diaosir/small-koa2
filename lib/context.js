module.exports = {
    get body() {
        return this.response.body;
    },
    set body(data) {
        this.response.body = data
    },
    get query() {
        return this.request.query;
    }
}
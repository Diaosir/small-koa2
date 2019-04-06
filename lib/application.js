const http = require('http');
const request = require('./request')
const response = require('./response')
const context = require('./context')
class Application {
    constructor() {
    }
    use(callback){
        this.applictionCallback = callback;
    }
    createContext(req, res) {
        let ctx = Object.create(context);
        ctx.response = Object.create(response);
        ctx.request = Object.create(request);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }
    listen() {
        var server = http.createServer((request, response) => {
            const ctx = this.createContext(request, response)
            this.applictionCallback(ctx).then(this.responseBody(ctx));
        })
        server.listen(...arguments);
        console.log(`listen `)
    }
    responseBody(ctx){
        if (!!ctx.body) {
            ctx.res.end(ctx.body);
        }
        ctx.res.end(ctx.body);
    }
}
module.exports = Application;
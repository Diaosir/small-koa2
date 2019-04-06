let url = require('url')
module.exports = {
   get body() {
       return this.req.body;
   },
   get query() {
       console.log(this.req.url)
       return this.req.url;
   }
}
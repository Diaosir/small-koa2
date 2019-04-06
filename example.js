const koa2 = require('./lib/application');
const app = new koa2();
app.use(async ctx => {

    ctx.body = ctx.query + 'ddd';   
})
app.listen(3000);
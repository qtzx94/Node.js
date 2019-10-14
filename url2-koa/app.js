// 导入koa，和koa 1.x不同，在koa 2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 导出controller middleware
const controller = require('./controller');

// 引入一个middleware来解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中。
const bodyParser = require('koa-bodyparser');

// 创建一个Koa对象表示web app本身
const app = new Koa();

// log request URL
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});


// parse request body
app.use(bodyParser());

// add controllers
app.use(controller());

// 在端口3000监听
app.listen(3000);
console.log('app started at port 3000...');
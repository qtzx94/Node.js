// 导入koa，和koa 1.x不同，在koa 2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 创建一个Koa对象表示web app本身
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求

/**
 * @param ctx: 是由koa传入的封装了request和response的变量,
 * @param next: 是koa传入的将要处理的下一个异步函数
 * @description: 每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数。我们可以对ctx操作，并设置返回内容。但是为什么要调用await next()？原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。
 * 
 */
app.use(async (ctx, next) => { 
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, Koa2!</h1>';
})

// 在端口3000监听
app.listen(3000);
console.log('app started at port 3000...');
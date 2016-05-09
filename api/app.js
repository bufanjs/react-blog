var koa = require('koa');
var app = koa();

app.use(function* (){
	this.body = 'api test';
});

app.listen(8080);
console.log("port 8080");
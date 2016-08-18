var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.set('view engine','pug');
app.set('case senstive routing',false);
app.set('views',path.join(__dirname,'../client/views'));

app.use(express.static(path.join(__dirname,'../client')));
app.use(bodyParser());
app.use(require('./router'));

app.listen(3000,()=>{
	console.log('server started listening via port 3000');
})

/* The express module is used to look at the address of the request and send it to the correct function */
var express = require('express');

/* The http module is used to listen for requests from a web browser */
var http = require('http');

/* The path module is used to transform relative paths to absolute paths */
var path = require('path');

/* Creates an express application */
var app = express();

/* Creates the web server */
var server = http.createServer(app);

/* Defines what port to use to listen to web requests */
var port =  8080;


/* Defines what function to call when a request comes from the path '/' in http://localhost:8080 */
app.get('/', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './index.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});

app.get('/about', (req, res, next) => {

	/* Get the absolute path of the html file */
	var filePath = path.join(__dirname, './about.html')

	/* Sends the html file back to the browser */
	res.sendFile(filePath);
});

/* Defines what function to all when the server recieves any request from http://localhost:8080 */
server.on('listening', () => {

	/* Determining what the server is listening for */
	var addr = server.address()
		, bind = typeof addr === 'string'
			? 'pipe ' + addr
			: 'port ' + addr.port
	;

	/* Outputs to the console that the webserver is ready to start listenting to requests */
	console.log('Listening on ' + bind);
});

/* Tells the server to start listening to requests from defined port */
server.listen(port);

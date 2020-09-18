//to hide environmental variables "here:api key" when upload project online we use .env folder and required it here 
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
// provides request and get methods that behave identically to those found on the native http and https modules
var https = require('follow-redirects').https;
//var. that we will accept in it  url from client side 
var urll
const app = express()
let port = 3013
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
//to be able to send url in the api  url 
app.use(bodyParser.urlencoded({
    extended: true
}))
//main file that will run the project 
app.use(express.static('dist'))
//create server
app.listen(port, function() {
    //console.log(`running on localhost: ${port}`);
})
//html file that will open when we create the  server
app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})
//receive url variable from client side that sent to "localhost/text"
app.post('/text', (req, res) => {
    urll = req.body.formText;
    //put data in object to send to api 
    var options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${urll}&model=general`,
        'headers': {},
        'maxRedirects': 20
    };

         //send data to api and  receive results from api 
    var req = https.request(options, function(res) {
        var chunks = [];

        res.on("data", function(chunk) {
            //data received from api
            chunks.push(chunk);
        });

        res.on("end", function(chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
            //send received data from api to clien side  "localhost/url"
            app.get('/url', function(req, res) {
                res.send(body)
                //empty array after sent to client to ready for new data
                chunks = []
            })

        });

            //show error message if there is error in response 
        res.on("error", function(error) {
            console.error(error);
        });
    });
    req.end();

});
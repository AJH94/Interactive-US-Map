var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080
  , request = require('request')
  , express = require('express')
  , app = express();  

app.use(express.static('public'));

app.get('/route', function (req, res) {
    var beg = req.query.beg;
    var end = req.query.end;
    console.log("Incoming route: " + beg + " " + end);
    request('https://maps.googleapis.com/maps/api/directions/json?origin=' + beg + '&destination=' + end + '&key=AIzaSyD_Bt9JAwFPencv-Vuy4UhtKk9oDRknO8g', function (error, response, body) {
        routeInfo = JSON.parse(body);
        console.log(routeInfo);
        res.send(JSON.stringify(routeInfo));
    })
})


app.listen(process.env.PORT || port, function () {
          console.log('Example app listening on port 8080!')
})

// subroutines

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html'

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}

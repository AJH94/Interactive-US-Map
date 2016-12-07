var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080
  , express = require('express')
  , app = express();

app.use(express.static('public'));

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

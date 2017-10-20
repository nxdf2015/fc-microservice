// server.js
// where your node app starts

// init project
var express = require('express');
var path = require('path')
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"views/index.html"))
})
// http://expressjs.com/en/starter/basic-routing.html
app.get("/:time",function(req,res){
  let time = req.params.time.replace(/%20/g,' ')
  
  let timestamp = Date.parse(time);
  res.set("Content-type","text/json")
  let obj = {unix : timestamp,natural : time}
  console.log(obj);
  res.write(JSON.stringify(obj))
  res.end()
  
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

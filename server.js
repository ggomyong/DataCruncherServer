const compression = require('compression');
const  express  =  require('express');
const bodyParser = require("body-parser");
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './database' });

const  app  =  express()
const  port  =  3000

app.use (compression())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: false, parameterLimit:50000}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.get('/api/hello', (req, res) =>{
  res.json({
      'message': 'Hello world!'
  });
});

app.post('/api/player/saveQB', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/players/qb.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'QB Upload Successful'
    });   
});

app.get('/api/player/getQB', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/players/qb.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.post('/api/column/saveQB', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/columns/qb.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'QB Upload Successful'
    });   
});

app.get('/api/column/getQB', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/qb.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

app.post('/api/player/saveRB', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/players/rb.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'QB Upload Successful'
    });   
});

app.get('/api/player/getRB', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/players/rb.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });
  
  app.post('/api/column/saveRB', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/columns/rb.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'RB Upload Successful'
    });   
});

app.get('/api/column/getRB', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/rb.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

app.post('/api/player/saveWR', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/players/wr.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'QB Upload Successful'
    });   
});

app.get('/api/player/getWR', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/players/wr.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.post('/api/column/saveWR', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/columns/wr.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'WR Upload Successful'
    });   
});

app.get('/api/column/getWR', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/wr.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

app.post('/api/player/saveTE', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/players/te.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'TE Upload Successful'
    });   
});
app.get('/api/player/getTE', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/players/te.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.post('/api/column/saveTE', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/columns/te.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'TE Upload Successful'
    });   
});

app.get('/api/column/getTE', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/te.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.post('/api/player/saveDEF', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/players/def.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'DEF Upload Successful'
    });   
});
app.get('/api/player/getDEF', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/players/def.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.post('/api/column/saveDEF', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/columns/def.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'DEF Upload Successful'
    });   
});

app.get('/api/column/getDEF', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/def.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.post('/api/column/saveCustom', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/columns/custom.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'Custom Upload Successful'
    });   
});

app.get('/api/column/getCustom', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/custom.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.post('/api/star/save', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/stars/stars.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'Star Upload Successful'
    });   
});

app.get('/api/star/get', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/stars/stars.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  app.get('/api/player/clear', (req, res) => {
    let fs = require('fs');
    fs.writeFile('./database/players/qb.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/players/rb.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/players/wr.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/players/te.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/players/def.db', '[]', function (err) {
      if (err) throw err;
    });
    res.json({
      'message': 'Player Data cleared!'
  });   
  });

  app.get('/api/column/clear', (req, res) => {
    let fs = require('fs');
    fs.writeFile('./database/columns/qb.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/columns/rb.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/columns/wr.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/columns/te.db', '[]', function (err) {
      if (err) throw err;
    });
    fs.writeFile('./database/columns/def.db', '[]', function (err) {
      if (err) throw err;
    });
    res.json({
      'message': 'Player Data cleared!'
  });  
});
  // Generic Column Update using Map
  app.post('/api/column/saveMap', (req,res) =>{
    let fs= require('fs');
    let content=req.body;
    //console.log(content);
    fs.writeFile('./database/columns/map.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'Column Map Upload Successful'
    });   
});

app.get('/api/column/getMap', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/map.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  // Generic Player Update using Map
  app.post('/api/player/saveMap', (req,res) =>{
    let fs= require('fs');
    let content=req.body;

    fs.writeFile('./database/players/map.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'Player Map Upload Successful'
    });   
});

app.get('/api/player/getMap', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/players/map.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  // Generic Star Update using Map
  app.post('/api/star/saveMap', (req,res) =>{
    let fs= require('fs');
    let content=req.body;

    //console.log(content);
    fs.writeFile('./database/stars/map.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'Star Map Upload Successful'
    });   
});

app.get('/api/star/getMap', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/stars/map.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

  // Generic Custom Column Update using Map
  app.post('/api/column/saveCustomMap', (req,res) =>{
    let fs= require('fs');
    let content=req.body;

    //console.log(content);
    fs.writeFile('./database/columns/custom_map.db', JSON.stringify(content), function (err) {
        if (err) throw err;
      });
      res.json({
        'message': 'Custom Column Map Upload Successful'
    });   
});

app.get('/api/column/getCustomMap', (req, res) => {
    let fs = require('fs');
    let id=req.query.id;
  
    let raw=fs.readFileSync('./database/columns/custom_map.db');
    let icr=JSON.parse(raw);
    res.json(icr);
  });

app.listen(port, () => console.log(`Data Cruncher listening on port ${port}!`))


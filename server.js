var express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const multer = require('multer');
const fileUpload = require('express-fileupload');

var userctrl = require('./controller/userctrl');
var projectctrl = require('./controller/projectctrl');
var tagctrl = require('./controller/tagctrl');
var resourcectrl = require('./controller/resourcectrl');
var imagectrl = require('./controller/imagectrl');


const http = require('http');
var fs = require("fs");
var path = require('path');
var welcome = require('./app/routes/welcome');

fs.existsSync = fs.existsSync || require('path').existsSync;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'wwwroot')));
app.use('/', welcome);
app.use(fileUpload());

const server = http.createServer(app);



app.use('/imagectrl', imagectrl);
//userctrl Routes
app.get('/user', userctrl.getAll);
app.get('/user/:email', userctrl.getOne);
app.get('/user/getmyproject/:userid', userctrl.getMyProject);

app.post('/user', userctrl.addOne);
app.put('/user', userctrl.changeOne);

// funktioniert noch nicht !!!!///
app.delete('/user',userctrl.deleteOne);

//projectctrl Routes
app.get('/project/members/:projectid', projectctrl.getMembers);
app.get('/project', projectctrl.getAll);
app.get('/project/:projectid', projectctrl.getOne);
app.get('/project/getReactions/:projectid',  projectctrl.getReactions);

app.post('/project/newProject', projectctrl.newProject); //req.body.name, req.body.text, req.body.author
app.post('/project/addComment', projectctrl.addComment); //req.body.Project_projectid(aktuelle Projektid),req.body.name(Titel für Reaktion),req.body.text(KommentarText),req.body.author(Nutzer id)
app.post('/project/addImage', projectctrl.addImage);//req.body.Project_projectid(aktuelle Projektid),req.body.name(Titel für Reaktion),req.body.text(Beschreibung),req.body.author(Nutzer id),req.body.fileName,req.files.foo


//app.post('/image', projectctrl.addImage)

//tagctrl Routes
app.get('/tag/:projectid', tagctrl.getProjectsTags)

app.post('/tag', tagctrl.addOne)   //req.body.projectid, req.body.name

//resourcectrl Routes
app.get('/resource', resourcectrl.getProjectsResources)

app.post('/resource', resourcectrl.addOne) //req.body.projectid, req.body.name





app.listen(port, function(){
    console.log("listening on port: ", port);

})

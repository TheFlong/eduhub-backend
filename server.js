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
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', welcome);
app.use(fileUpload());

const server = http.createServer(app);



app.use('/imagectrl', imagectrl);
//userctrl Routes
app.get('/user', userctrl.getAll);
app.get('/user/:email', userctrl.getOne);
app.get('/user/getmyproject/:userid', userctrl.getMyProject);
app.get('/user/getmyproject/favs/:userid',userctrl.getMyFavProjects);

app.post('/user', userctrl.addOne);
/* //req.files.foo, req.body.fileName, req.body.forename, req.body.surname, req.body.email, 
req.body.street, req.body.city, req.body.number, req.body.postcode, req.body.schoolid,
req.body.function, subject1: req.body.subject1, subject2: req.body.subject2, subject3: req.body.subject3  */

app.put('/user', userctrl.changeOne);
/* req.body.forename, req.body.surname, req.body.email, 
req.body.street, req.body.city, req.body.number, req.body.postcode, req.body.schoolid,
req.body.function, subject1: req.body.subject1, subject2: req.body.subject2, subject3: req.body.subject3 */




// funktioniert noch nicht !!!!/////////////////////////////////
app.delete('/user',userctrl.deleteOne);
app.post('/user/changePicture', userctrl.changePicture)
///////////////////////////////////////////////////////////////


//projectctrl Routes
app.get('/project/members/:projectid', projectctrl.getMembers);
app.get('/project', projectctrl.getAll);
app.get('/project/:projectid', projectctrl.getOne);
app.get('/project/getReactions/:projectid',  projectctrl.getReactions);
app.get('/project/landingpage/get', projectctrl.getLandingPage);

app.post('/project/newProject', projectctrl.newProject); 
/* //req.body.project_name, req.body.project_text, req.body.project_author, req.files.foo, req.body.fileName */

app.post('/project/addComment', projectctrl.addComment); 
//req.body.Project_projectid(aktuelle Projektid),req.body.project_name(Titel für Reaktion),req.body.project_text(KommentarText),req.body.project_author(Nutzer id)

app.post('/project/addImage', projectctrl.addImage);
/* //req.body.Project_projectid(aktuelle Projektid),req.body.project_name(Titel für Reaktion),req.body.project_text(Beschreibung),
req.body.project_author(Nutzer id),req.body.fileName,req.files.foo */


//app.post('/image', projectctrl.addImage)

//tagctrl Routes
app.get('/tag/:projectid', tagctrl.getProjectsTags)

app.post('/tag', tagctrl.addOne)   
//req.body.pht_idproject, req.body.tag_name

//resourcectrl Routes
app.get('/resource', resourcectrl.getProjectsResources)

app.post('/resource', resourcectrl.addOne) 
//req.body.phr_idproject, req.body.resource_name





app.listen(port, function(){
    console.log("listening on port: ", port);

})

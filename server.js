var express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const multer = require('multer');
const fileUpload = require('express-fileupload');

var userctrl = require('./controller/userctrl');
var projectctrl = require('./controller/projectctrl');
var tagctrl = require('./controller/tagctrl');
var resourcectrl = require('./controller/resourcectrl');
var useraddsprojectctrl = require('./controller/useraddsprojectctrl');
var favoritectrl = require('./controller/favoritectrl');
var wizardctrl = require('./controller/wizardctrl');
var reactionctrl = require('./controller/reactionctrl');
var searchctrl = require('./controller/searchctrl');
var filterctrl = require('./controller/filterctrl');
var governancectrl = require('./controller/governancectrl');


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
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
    next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/images', express.static('images'));
app.use('/documents', express.static('documents'));
app.use('/', welcome);
app.use(fileUpload());

const server = http.createServer(app);




//userctrl Routes
app.get('/user', userctrl.getAll);
app.get('/user/:email', userctrl.getOne);
app.get('/user/getmyproject/:userid', userctrl.getMyProject);
app.get('/user/getmyproject/favs/:userid',userctrl.getMyFavProjects);
app.get('/user/profil/timeline/:userid', userctrl.getMyTimeline);

app.use('/user/myevents/:userid', userctrl.getMyMeetings, userctrl.getMyMeetings2);
app.get('/user/myevents/:userid', userctrl.getMyMeetings3);


app.post('/user', userctrl.addOne);
/* //req.files.foo, req.body.fileName, req.body.forename, req.body.surname, req.body.email,
req.body.street, req.body.city, req.body.number, req.body.postcode, req.body.schoolid,
req.body.function, subject1: req.body.subject1, subject2: req.body.subject2, subject3: req.body.subject3  */

app.put('/user', userctrl.changeOne);
/* req.body.forename, req.body.surname, req.body.email,
req.body.street, req.body.city, req.body.number, req.body.postcode, req.body.schoolid,
req.body.function, subject1: req.body.subject1, subject2: req.body.subject2, subject3: req.body.subject3 */
app.use('/user/changepicture',userctrl.changePicture1);
app.put('/user/changepicture', userctrl.changePicture2);


app.delete('/user',userctrl.deleteOne);
// funktioniert noch nicht !!!!/////////////////////////////////



//projectctrl Routes
app.get('/project/members/:projectid', projectctrl.getMembers);
app.get('/project', projectctrl.getAll);
app.get('/project/:projectid', projectctrl.getOne);
app.get('/project/getReactions/:projectid',  projectctrl.getReactions);
app.get('/project/landingpage/get', projectctrl.getLandingPage);
app.get('/project/projectinformation/:project_informationid', projectctrl.getProjectInfo);
app.get('/project/documents/get/:projectid', projectctrl.getDocumentList);
app.get('/project/images/get/:projectid', projectctrl.getImageList);

//Filterfunktionen
app.get('/project/filter/documentsimage/:projectid', filterctrl.getUploadEvents);
app.get('/project/filter/memberevents/:projectid', filterctrl.getMemberEvents);
app.get('/project/filter/comments/:projectid', filterctrl.getCommentEvents);
app.get('/project/filter/termin/:projectid', filterctrl.getTerminEvents);



app.use('/project/newProject', wizardctrl.setInformation);
app.post('/project/newProject', wizardctrl.newProject);
 //req.body.project_name, req.body.project_text, req.body.project_author, req.files.foo, req.body.fileName

app.post('/project/addComment', reactionctrl.addComment);
//req.body.Project_projectid(aktuelle Projektid),req.body.project_name(Titel für Reaktion),req.body.project_text(KommentarText),req.body.project_author(Nutzer id)
app.post('/project/addImage', reactionctrl.addImage);
/* //req.body.Project_projectid(aktuelle Projektid),req.body.project_name(Titel für Reaktion),req.body.project_text(Beschreibung),
req.body.project_author(Nutzer id),req.body.fileName,req.files.foo */
app.post('/project/addDocument', reactionctrl.addDocument);
app.post('/project/addTermin', reactionctrl.addTermin);

app.use('/project/update', projectctrl.changeProject1);
app.put('/project/update', projectctrl.changeProject2);

app.delete('/project/delete', projectctrl.deleteProject)



//tagctrl Routes
app.get('/tag/:projectid', tagctrl.getProjectsTags)

app.use('/addtag', tagctrl.addTag1)
app.post('/addtag', tagctrl.addTag2)

//req.body.pht_idproject, req.body.tag_name

//resourcectrl Routes
app.get('/resource/:projectid', resourcectrl.getProjectsResources);
app.use('/addresource', resourcectrl.addRes1);
app.post('/addresource', resourcectrl.addRes2);
//req.body.phr_idproject, req.body.resource_name



//UseraddsProjectCtrl
app.use('/useraddsproject/beMember',useraddsprojectctrl.beMember1,  useraddsprojectctrl.beMemberEvent1);
app.post('/useraddsproject/beMember', useraddsprojectctrl.beMemberEvent2, useraddsprojectctrl.beMember2);
//req.body.uhp_iduser, req.body.uhp_idproject
app.use('/useraddsproject/cancelMembership', useraddsprojectctrl.cancelMembership1, useraddsprojectctrl.cancelMembershipEvent1);
app.delete('/useraddsproject/cancelMembership',useraddsprojectctrl.cancelMembershipEvent2 ,useraddsprojectctrl.cancelMembership2);
//req.body.uhp_iduser, req.body.uhp_idproject
app.get('/useraddsproject/amIMember/:uhp_idproject/:uhp_iduser', useraddsprojectctrl.amIMember)
//Schickt "response": 1 wenn Member; schickt "response": 0 wenn noch kein Member.

app.use('/useraddsproject/beFavorite',favoritectrl.beFavorite1, favoritectrl.beFavoriteEvent1);
app.post('/useraddsproject/beFavorite',favoritectrl.beFavoriteEvent2,favoritectrl.beFavorite2);
//req.body.uhp_iduser, req.body.uhp_idproject
app.use('/useraddsproject/cancelFavorite',favoritectrl.cancelFavorite1, favoritectrl.cancelFavoriteEvent1);
app.delete('/useraddsproject/cancelFavorite',favoritectrl.cancelFavoriteEvent2, favoritectrl.cancelFavorit2);
//req.body.uhp_iduser, req.body.uhp_idproject
app.get('/useraddsproject/amIFavorite/:uhp_idproject/:uhp_iduser', favoritectrl.amIFavorite);
//Schickt "response": 1 wenn Favorit; schickt "response": 0 wenn noch kein Favorit.

app.use('/wizardctrl/newProject', wizardctrl.setInformation);
app.post('/wizardctrl/newProject', wizardctrl.newProject);
//req.body.project_name, req.body.project_text, req.body.project_author, req.files.foo, req.body.fileName

//suche
app.get('/project/stringsearch/:project_name', searchctrl.searchString);

//Rechtemanagement
app.get('/governance/amIAuthor/:uhp_idproject/:uhp_iduser', governancectrl.amIAuthor);
app.get('/governance/amIEditor/:uhp_idproject/:uhp_iduser', governancectrl.amIEditor);
app.use('/governance/addEditor', governancectrl.addEditorEvent1, governancectrl.addEditor1);
app.post('/governance/addEditor', governancectrl.addEditorEvent2)
app.use('/governance/deleteEditor', governancectrl.deleteEditorEvent1)
app.delete('/governance/addEditor', governancectrl.delEditorEvent2, governancectrl.deleteEditor1)
// req.body.uhp_idproject, req.body.uhp_iduser, req.body.authorid)






app.listen(port, function(){
    console.log("listening on port: ", port);

})

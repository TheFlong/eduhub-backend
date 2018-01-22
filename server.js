
var express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const multer = require('multer');
const fileUpload = require('express-fileupload');

//Import der Controler Klassen
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
var karmactrl  = require('./controller/karmactrl');
var schoolctrl = require('./controller/schoolctrl');


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
//Input: email
app.get('/user/getmyproject/:userid', userctrl.getMyProject);
//Input: userid
app.get('/user/getmyproject/favs/:userid',userctrl.getMyFavProjects);
//Input: userid
app.get('/user/profil/timeline/:userid', userctrl.getMyTimeline);
////Input: userid

app.get('/user/myevents/:userid', userctrl.getMyMeetings);
//Input: userid

app.use('/user', userctrl.adduser1)
app.post('/user', userctrl.adduser2);
//Input:
//req.files.foo, req.body.fileName, req.body.forename, req.body.surname, req.body.email,
//req.body.street, req.body.city, req.body.number, req.body.postcode,
//req.body.function, subject1: req.body.subject1, subject2: req.body.subject2, subject3: req.body.subject3
//req.body.school_name, req.body.school_street,  req.body.school_postcode,req.body.house_number, req.body.school_city, req.body.student_number

app.put('/user', userctrl.changeOne);
//Input:
//req.body.forename, req.body.surname, req.body.email,
//req.body.street, req.body.city, req.body.number, req.body.postcode, req.body.schoolid,
//req.body.function, subject1: req.body.subject1, subject2: req.body.subject2, subject3: req.body.subject3
app.use('/user/changepicture',userctrl.changePicture1);
app.put('/user/changepicture', userctrl.changePicture2);
//Input: req.body.userid, req.file.foo


app.delete('/user',userctrl.deleteOne);
//Input: req.body.email



//projectctrl Routes
app.get('/project/members/:projectid', projectctrl.getMembers);
//Input: projectid
app.get('/project', projectctrl.getAll);

app.get('/project/:projectid', projectctrl.getOne);
//Input: projectid
app.get('/project/getReactions/:projectid',  projectctrl.getReactions);
//Input: projectid
app.get('/project/landingpage/get', projectctrl.getLandingPage);

app.get('/project/documents/get/:projectid', projectctrl.getDocumentList);
//Input: projectid
app.get('/project/images/get/:projectid', projectctrl.getImageList);
//Input: projectid

//Filterfunktionen
app.get('/project/filter/documentsimage/:projectid', filterctrl.getUploadEvents);
app.get('/project/filter/memberevents/:projectid', filterctrl.getMemberEvents);
app.get('/project/filter/comments/:projectid', filterctrl.getCommentEvents);
app.get('/project/filter/termin/:projectid', filterctrl.getTerminEvents);
//Input: projectid

app.post('/project/addComment', reactionctrl.addComment);
//Input:
//req.body.Project_projectid(aktuelle Projektid),req.body.project_name(Titel für Reaktion),req.body.project_text(KommentarText),
//req.body.project_author(Nutzer id)
app.post('/project/addImage', reactionctrl.addImage);
//Input:
//req.body.Project_projectid(aktuelle Projektid),req.body.project_name(Titel für Reaktion),req.body.project_text(Beschreibung),
//req.body.project_author(Nutzer id),req.body.fileName,req.files.foo
app.post('/project/addDocument', reactionctrl.addDocument);
//Input: req.files.foo, req.body.fileName, req.body.Project_projectid, req.body.project_name, req.body.project_text, req.body.project_author
app.post('/project/addTermin', reactionctrl.addTermin);
//Input: req.files.foo, req.body.fileName, req.body.Project_projectid, req.body.project_name, req.body.project_text, req.body.project_author
app.use('/project/update', projectctrl.changeProject1);
app.put('/project/update', projectctrl.changeProject2);
//Input: req.body.changeid, req.body.projectid, req.body.userid, req.body.projectid
// changeid [1]: Titel ändern,  req.body.newtitle
// changeid [2]: Beschreibung ändern, req.body.newdescription
// changeid [3]: Bild ändern,   req.files.foo, req.body.fileName,
// changeid [4]: Projektbeginn ändern, req.body.newtermin
// changeid [5]: Projektzielsetzung ändern, req.body.newgoal
// changeid [6]: Schreibrechte ändern, req.body.newwriteRights
app.delete('/project/delete', projectctrl.deleteProject)



//tagctrl Routes
app.get('/tag/:projectid', tagctrl.getProjectsTags)
//Input: projectid


app.use('/addtag', tagctrl.addTag1)
app.post('/addtag', tagctrl.addTag2)
//Input: req.body.pht_idproject, req.body.tag_name
app.delete('/deletetag', tagctrl.deleteTag)
//Input: req.body.pht_idproject, req.body.tag_name


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

app.post('/wizardctrl/newProject', wizardctrl.newProject);
//req.body.project_author, req.body.project_activity
app.put('/wizardctrl/newProject', wizardctrl.addProjectinformation);
//req.body.project_name, req.body.project_text, req.files.foo, req.body.fileName, req.body.project_writeRights, req.body.project_statement, req.body.termin , req.body.projectid

//suche
app.get('/project/stringsearch/:project_name', searchctrl.searchString);

//Rechtemanagement
app.get('/governance/amIAuthor/:uhp_idproject/:uhp_iduser', governancectrl.amIAuthor);
app.get('/governance/amIEditor/:uhp_idproject/:uhp_iduser', governancectrl.amIEditor);


app.use('/governance/addEditor', governancectrl.addEditorEvent1, governancectrl.addEditor1);
app.post('/governance/addEditor', governancectrl.addEditorEvent2)
app.use('/governance/deleteEditor', governancectrl.deleteEditorEvent1,governancectrl.deleteEditor1)
app.post('/governance/deleteEditor', governancectrl.deleteEditorEvent2)
// req.body.uhp_idproject, req.body.uhp_iduser, req.body.authorid)

app.use('/useraddsproject/karma/add',karmactrl.addLike1, karmactrl.addLikeEvent1);
app.post('/useraddsproject/karma/add',karmactrl.addLikeEvent2,karmactrl.addLike2);
//req.body.uhp_iduser, req.body.uhp_idproject
app.use('/useraddsproject/karma/remove',karmactrl.deleteLike1, karmactrl.deleteLikeEvent1);
app.delete('/useraddsproject/karma/remove',karmactrl.deleteLikeEvent2, karmactrl.deleteLike2);
//req.body.uhp_iduser, req.body.uhp_idproject
app.get('/useraddsproject/karma/amILiker/:uhp_idproject/:uhp_iduser', karmactrl.amILiker);
//Schickt "response": 1 wenn liked; schickt "response": 0 wenn noch nicht geliked.

//Schoolctrl
app.get('/getschools', schoolctrl.getSchools)




app.listen(port, function(){
    console.log("listening on port: ", port);

})

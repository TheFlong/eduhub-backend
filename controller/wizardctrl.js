var knex = require('../db/knex')

module.exports = {

    newProject,
    setInformation,
    getInformation

};

function newProject(req,res){
    var startup_image = req.files.foo;
    var fileName = filename(req.body.fileName);


    // Use the mv() method to place the file somewhere on your server
    startup_image.mv('images/' + fileName + '.png' , function(err) {
      if(err){
        console.log(err);
      }else{
     console.log("uploaded");
        }
    });
    var projectid
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.body.project_name,
            project_text: req.body.project_text,
            project_karma: 0,
            project_projecttype: "newProject",
            project_author: req.body.project_author,
            project_imagepath: 'images/' + fileName + '.png',
            project_membercount: 1,
            project_informationid: req.Informationid
        })
        .then(function(response){
            projectid = response[0];
            console.log(projectid);
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                uhp_iduser: req.body.project_author,
                uhp_idproject: response[0],
                uhp_userrole: "author"

            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('Project').where('projectid', projectid)
            .then(function(project) {
                res.send(project);
            })
        })

    });
}

function setInformation(req,res,next){
    knex('ProjektInformation')
        .insert({
            lehrundlernProjekt: req.body.lehrundlernProjekt,
            managementProjekt: req.body.managementProjekt,
            unterstuetzendesProjekt: req.body.unterstuetzendesProjekt,
            SuchenVerarbeitenundAufbewahren: req.body.SuchenVerarbeitenundAufbewahren,
            KommunizierenundKooperieren: req.body.KommunizierenundKooperieren,
            ProduzierenundPräsentieren: req.body.ProduzierenundPräsentieren,
            Schützenundsicheragieren: req.body.Schützenundsicheragieren,
            ProblemelösenundHandeln: req.body.ProblemelösenundHandeln,
            AnalysierenundReflektieren: req.body.AnalysierenundReflektieren,
            KitaVorschule: req.body.KitaVorschule,
            Grundschule: req.body.Grundschule,
            Sekundarstufe1: req.body.Sekundarstufe1,
            Sekundarstufe2: req.body.Sekundarstufe2,
            HoehereHandelschule: req.body.HoehereHandelschule,
            Handelschule: req.body.Handelschule,
            Sprachen: req.body.Sprachen,
            KulturelleBildung: req.body.KulturelleBildung,
            GeschichteGesellschaft: req.body.GeschichteGesellschaft,
            Naturwissenschaften: req.body.Naturwissenschaften,
            InformatiktechnischeBildung: req.body.InformatiktechnischeBildung,
            Mathematik: req.body.Mathematik,
            Deutsch: req.body.Deutsch,
            Englisch: req.body.Englisch,
            Physik: req.body.Physik,
            Chemie: req.body.Chemie,
            Erdkunde: req.body.Erdkunde,
            Sport: req.body.Sport,
            Kunst: req.body.Kunst,
            Französisch: req.body.Französisch,
            Spanisch: req.body.Spanisch,
            Italienisch: req.body.Italienisch,
            Bwl: req.body.Bwl,
            Vwl: req.body.Vwl,
            Informatik: req.body.Informatik,
            Pädagogik: req.body.Pädagogik,
            Politik: req.body.Politik,
            KeinInternet: req.body.KeinInternet,
            PCLaptop: req.body.PCLaptop,
            TabletSmartphone: req.body.TabletSmartphone,
            HardwareBasteln: req.body.HardwareBasteln,
            VideosFilme: req.body.VideosFilme,
            Unterrichstreihe: req.body.Unterrichstreihe,
            Stunde: req.body.Stunde,
            Doppelstunde: req.body.Doppelstunde,
            Flexibel: req.body.Flexibel,
            Klasse: req.body.Klasse,
            Schule: req.body.Schule,
            Fachlich: req.body.Fachlich,
            Lehrer: req.body.Lehrer,
            Elternvertretung: req.body.Elternvertretung,
            Zeitmanagementbesserplanen: req.body.Zeitmanagementbesserplanen,
            BudgetFinanzierung: req.body.BudgetFinanzierung,
            BildungWissenvermittlung: req.body.BildungWissenvermittlung,
            Unterrichtneugestalten: req.body.Unterrichtneugestalten,
            Verwaltungverbessern: req.body.Verwaltungverbessern,
            Konfliktmanagement: req.body.Konfliktmanagement,
            Tage: req.body.Tage,
            Wochen: req.body.Wochen,
            Monate: req.body.Monate,
            StadtGemeinde: req.body.StadtGemeinde,
            Personal: req.body.Personal,
            Schueler: req.body.Schueler,
            Sport: req.body.Sport,
            Bildung: req.body.Bildung,
            SchulischeAusstatung: req.body.SchulischeAusstatung,
            ITtechnischerSupport: req.body.ITtechnischerSupport,
            VerpflegunginderSchule: req.body.VerpflegunginderSchule,
            Finanzierung: req.body.Finanzierung,
            SozialesEngagement: req.body.SozialesEngagement,
        })
        .then(function(UserHasProject) {
           req.Informationid = UserHasProject[0];
            next();
        })
}

function getInformation(req,res){
    knex.select().from('ProjektInformation')
    .then(function(UserHasProject) {
        res.send(UserHasProject);
    })
}

function filename(a){

        return a + '-' + Date.now()

    }

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Project').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        // SLZ    
        {
          projectid: 1, 
          project_name: 'Selbstlernzentrum',
          project_text: "Das SLZ kann von Schülern und Lehrern während der Unterrichtszeit und in Freistunden genutzt werden. Das SLZ bietet vielfältige Möglichkeiten, die sich bewusst vom üblichen Unterricht abgrenzen. So können im Team oder allein einzelne Unterrichtsaspekte erarbeitet oder vertieft, Referate vorbereitet oder Unterrichtsstoff gezielt nachbereitet werden. Den Oberstufenschülern bietet der Raum eine angenehme Arbeitsatmosphäre zur individuellen und eigenverantwortlichen Gestaltung der Freistunden. Das SLZ verbessert die Qualität des Unterrichts indem die Schüler durch selbständiges und eigenverantwortliches Lernen mehr Lernmotivation bekommen. Durch das individuelle Lerntempo wird das Förderangebot für sowohl lernschwächere als auch für besonders begabte Schüler verbessert. ", 
          project_karma: 1219,
          project_projecttype: "newProject",
          project_author: 3,    
          project_imagepath:"images/SLZ.jpg",
          project_membercount: 2,   
          project_informationid: 1 
         
          
        },
        {
          projectid: 2, 
          project_name: 'Susanne Fischer ist dem Projekt Selbstlernzentrum beigetreten!',
          project_text: "", 
          project_projecttype: "bemember",
          project_author: 4, 
          Project_projectid: 1, 
          project_membercount: 1
          
        },
        {
          projectid: 3, 
          project_name: 'Gespräch mit der Schulleitung',
          project_text: "Das Projekt wird mit der Schulleitung besprochen", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 3, 
          Project_projectid: 1, 
          project_membercount: 2,  // Susanne bei Userhasproject hinzufügen
          project_termin:"02.01.2018", 
        },
        {
          projectid: 4, 
          project_name: 'Susanne Fischer ist dem Projekt Gespräch mit der Schulleitung beigetreten!',
          project_text: "", 
          project_projecttype: "bemember",
          project_author: 4, 
          Project_projectid: 3, 
          project_membercount: 1
          
        },
        {
          projectid: 5, 
          project_name: 'Budget & Zeit',
          project_text: "Schulleiter genehmigt das Projekt. Budget für das Projekt steht zur Verfügung", 
          project_projecttype: "newComment",
          project_author: 4, 
          Project_projectid: 1,
          project_karma: 0
        },
        {
          projectid: 6, 
          project_name: 'Zeitplan',
          project_text: "Die Zeitplanung für das Projekt wird zusammen mit den Lehrern und Schulleitung geplant", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 3, 
          Project_projectid: 1, 
          project_membercount: 2,
          project_termin:"04.01.2018", 
        },
        {
          projectid: 7, 
          project_name: 'Susanne Fischer ist dem Projekt Zeitplan beigetreten!',
          project_text: "", 
          project_projecttype: "bemember",
          project_author: 4, 
          Project_projectid: 6, 
          project_membercount: 1
          
        },
        {
          projectid: 8, 
          project_name: 'Infomaterial',
          project_text: "Infoblatt für die Schule wird erstellt", 
          project_projecttype: "addDocument",
          project_author: 3, 
          project_karma: 0,
          Project_projectid: 1,
        },
        {
          projectid: 9, 
          project_name: 'Projekträume',
          project_text: "Es werden Räumlichkeiten für das SLZ ausgewählt", 
          project_projecttype: "newComment",
          project_author: 3, 
          Project_projectid: 1, 
        },
        {
          projectid: 10, 
          project_name: 'Aufgabenverteilung',
          project_text: "Die Aufgaben für das SLZ werden unter den Lehrern und anderen Mitgliedern aufgeteilt", 
          project_projecttype: "addTermin",
          project_author: 3, 
          Project_projectid: 1, 
          project_termin:"04.01.2018",
        },
        {
          projectid: 11, 
          project_name: 'Ausstattung & Ressourcen bestellen',
          project_text: "Die Ausstattung für das SLZ wird bestellt (Bücher, PC, Software Medien, Stühle)", 
          project_projecttype: "newComment",
          project_author: 4, 
          Project_projectid: 1,  
        },
        {
          projectid: 12, 
          project_name: 'Aufbau der Ausstattung',
          project_text: "Möbel werden aufgebaut, Hardware wird angeschlossen und Software wird installiert ( MS-Office-Paket)", 
          project_projecttype: "newComment",
          project_author: 3, 
          Project_projectid: 1,
        },
        {
          projectid: 13, 
          project_name: 'Benutzerordnung',
          project_text: "Für die ordnungsgemäße Benutzung der EDV-Einrichtung und des Internets müssen alle Schüler die Nutzungsordnung zur Kenntnis nehmen ", 
          project_projecttype: "addDocument",
          project_author: 3, 
          Project_projectid: 1,
        },
        {
          projectid: 14, 
          project_name: 'Aufsichtsplan/Öffnungszeiten',
          project_text: "Plan über die Aufsichten und der Öffnungszeiten des SLZ", 
          project_projecttype: "addDocument",
          project_author: 3, 
          Project_projectid: 1, 
        },

        //Fotos
        {
          projectid: 15, 
          project_name: '1.Foto SLZ',
          project_text: "Hier ist das Selbstlernzentrum",
          project_projecttype: "addImage",
          project_author: 3, 
          Project_projectid: 1, 
        },
        {
          projectid: 16, 
          project_name: '2.Foto SLZ',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 3, 
          Project_projectid:1, 
        },
        {
          projectid: 17, 
          project_name: '3.Foto SLZ',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 3, 
          Project_projectid:1,  
        },
        {
          projectid: 18, 
          project_name: '4.Foto SLZ',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 3, 
          Project_projectid:1, 
        },
        {
          projectid: 19, 
          project_name: '5.Foto SLZ',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 3, 
          Project_projectid:1, 
        },






        ///////////////////////////////////////////////////////
        //DIGITALES KLASSENBUCH  Renate=7 Dirk=6 Peter=2 autor
        {
          projectid: 20, 
          project_name: 'Digitales Klassenbuch',
          project_text: "Das digitale Klassenbuch verbindet die Vorteile einer webbasierten Anwendung mit den Fähigkeiten eines Klassenbuches aus Papier. Es verwaltet Fehlstunden, Fehltage und Entschuldigungen pro Schüler, Unterrichtsdokumentationen pro Fach und Hausaufgaben pro Klasse. Lehrer können die Anwesenheitsliste im Klassenraum führen und haben derweil bereits Einsicht auf die Entschuldigungen, die das Sekretariat telefonisch entgegen genommen hat. Das Projekt findet gemeinsam im Rahmen des Laboratory Course on Development der Universität zu Köln statt.", 
          project_karma: 101,
          project_projecttype: "newProject",
          project_author: 2,    
          project_imagepath:"images/Digital_Klassenbuch.jpg",
          project_membercount: 1,   
          project_informationid: 2 
        },

        {
          projectid: 21, 
          project_name: 'Renate Saalfeld ist dem Projekt Digitales Klassenbuch beigetreten!',
          project_text: "", 
          project_projecttype: "bemember",
          project_author: 7, 
          Project_projectid: 20, 
          project_membercount: 1
          
        },

        {
          projectid: 22, 
          project_name: 'Dirk Spohr ist dem Projekt Digitales Klassenbuch beigetreten!',
          project_text: "", 
          project_projecttype: "bemember",
          project_author: 6, 
          Project_projectid: 20, 
          project_membercount: 1
          
        },
       
        {
          projectid: 23, 
          project_name: 'Meeting',
          project_text: "Budget und Zeitplanung ", 
          project_projecttype: "addTermin",
          project_karma: 20,
          project_author: 2, 
          Project_projectid: 20, 
          project_membercount: 3, 
          project_termin:"17.02.2018", 
        },

        {
          projectid: 24, 
          project_name: 'Dirk Spohr ist dem Projekt Meeting beigetreten!',
          project_text: "", 
          project_projecttype: "bemember",
          project_author: 6, 
          Project_projectid: 23, 
          project_membercount: 1
          
        },
        {
          projectid: 25, 
          project_name: 'Renate Saalfeld ist dem Projekt Meeting beigetreten!',
          project_text: "", 
          project_projecttype: "bemember",
          project_author: 7, 
          Project_projectid: 23, 
          project_membercount: 1
          
        },
        {
          projectid: 26, 
          project_name: 'Angebotsvergleich',
          project_text: "Support-Software wird gesucht und von verschiedenen Anbietern verglichen", 
          project_projecttype: "newComment",
          project_author: 2, 
          Project_projectid: 20, 
        },
        {
          projectid: 27, 
          project_name: 'Auftragserteilung',
          project_text: "Das Angebot von der Firma Smartkomm wird in Auftrag genommen", 
          project_projecttype: "newComment",
          project_author: 6, 
          Project_projectid: 20, 
        },
        {
          projectid: 28, 
          project_name: 'Ankündigung & Information',
          project_text: "Schüler und Lehrer erhalten ein Informationsblatt über das SLZ", 
          project_projecttype: "newComment",
          project_author: 7, 
          Project_projectid: 20, 
        },

        {
          projectid: 29, 
          project_name: 'Schulung',
          project_text: "Schüler und Lehrer erhalten eine Schulung für die Benutzung des Digitalen Klassenbuchs ", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 2, 
          Project_projectid: 20, 
          project_membercount: 1, 
          project_termin:"05.03.2018", 
        },

        {
          projectid: 30, 
          project_name: 'Benutzerhandbuch',
          project_text: "Für die ordnungsgemäße Benutzung der EDV-Einrichtung und des Internets müssen alle Schüler die Nutzungsordnung zur Kenntnis nehmen ", 
          project_projecttype: "addDocument",
          project_author: 7, 
          Project_projectid: 20,
        },

        {
          projectid: 31, 
          project_name: 'Information',
          project_text: "Infomaterial zu der Software für Lehrer und Schüler", 
          project_projecttype: "addDocument",
          project_author: 7, 
          Project_projectid: 20,
        },

        {
          projectid: 32, 
          project_name: '1.Foto Digitales Klassenbuch',
          project_text: "Beispielfoto Digitales Klassenbuch",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 20, 
        },
        {
          projectid: 33, 
          project_name: '2.Foto Digitales Klassenbuch',
          project_text: "Beispielfoto Digitales Klassenbuch",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 20, 
        },
        {
          projectid: 34, 
          project_name: '3.Foto Digitales Klassenbuch',
          project_text: "Beispielfoto Digitales Klassenbuch",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 20, 
        },
        {
          projectid: 35, 
          project_name: '4.Foto Digitales Klassenbuch',
          project_text: "Beispielfoto Digitales Klassenbuch",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 20, 
        },

        






        //////////////////////////////////////////////////////
        //Digitale Bibliothek  Ben Maier
        {
          projectid: 36, 
          project_name: 'Digitale Bibliothek',
          project_text: "Moderne Bibliotheken sammeln und erschließen nicht nur gedruckte Bücher, Zeitschriften und andere Medien und stellen diese zur Verfügung, sondern bieten auch eine Vielzahl von elektronischen Ressourcen und Dienstleistungen an. So ermöglichen sie den freien Zugang zu der Fülle der weltweit vorhandenen Informationen. ", 
          project_karma: 432,
          project_projecttype: "newProject",
          project_author: 1,    
          project_imagepath:"images/bib1.jpg",
          project_membercount: 1,   
          project_informationid: 3 
        },
       
        {
          projectid: 37, 
          project_name: 'Planung',
          project_text: "Das Projekt muss mit der Schulleitung abgesprochen werden", 
          project_projecttype: "newComment",
          project_author: 1, 
          Project_projectid: 36,
          project_karma: 0
        },

        {
          projectid: 38, 
          project_name: 'Ziele',
          project_text: "Die Ziele der digitalen Bibliothek müssen definiert werden", 
          project_projecttype: "newComment",
          project_author: 1, 
          Project_projectid: 36,
          project_karma: 0
        },

        {
          projectid: 39, 
          project_name: 'ToDo-List',
          project_text: "Eine ToDo-List für die Beteiligten erstellen", 
          project_projecttype: "addDocument",
          project_author: 1, 
          project_karma: 0,
          Project_projectid: 36,
        },

        {
          projectid: 40, 
          project_name: '1.Foto Digitale Bibliothek',
          project_text: "Hier ist die Bibliothek",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 36, 
        },
        {
          projectid: 41, 
          project_name: '2.Foto Digitale Bibliothek',
          project_text: "Hier ist die Bibliothek",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 36, 
        },
        {
          projectid: 42, 
          project_name: '3.Foto Digitale Bibliothek',
          project_text: "Hier ist die Bibliothek",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 36, 
        },
        {
          projectid: 43, 
          project_name: '4.Foto Digitale Bibliothek',
          project_text: "Hier ist die Bibliothek",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 36, 
        },
        {
          projectid: 44, 
          project_name: '5.Foto Digitale Bibliothek',
          project_text: "Hier ist die Bibliothek",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 36, 
        },

        











        /////////////////////////////////////////////////////
        //Digitale Kommunikation  Peter Wolf 2
        {
          projectid: 45, 
          project_name: 'Digitale Kommunikation',
          project_text: "Informieren Sie Schüler, Studenten und Lehrkräfte rasch und unkompliziert über Vertretungen, Raumänderungen, wichtige Schulinterne Infos , Veranstaltungen, Fundsachen und das aktuelles Wetter für den Sportunterricht.", 
          project_karma: 101,
          project_projecttype: "newProject",
          project_author: 2,    
          project_imagepath:"images/dk1.jpg",
          project_membercount: 1,   
          project_informationid: 4 
        },
        {
          projectid: 46, 
          project_name: 'Datenschutz prüfen',
          project_text: "Voraussetzungen für den Einsatz von digitalen Kommunikations- und Kooperationswerkzeugen prüfen", 
          project_projecttype: "newComment",
          project_author: 2, 
          Project_projectid: 45,
          project_karma: 0
        },
        {
          projectid: 47, 
          project_name: 'Einsatzmöglichkeiten prüfen',
          project_text: "Bedarf der Schule herausfinden z.B Einsatz in der Kantine, Lehrerzimmer, Aula etc. ", 
          project_projecttype: "newComment",
          project_author: 2, 
          Project_projectid: 45,
          project_karma: 0
        },
        {
          projectid: 48, 
          project_name: 'Angebote einholen',
          project_text: "Angebote von verschiedenen Dienstleistern vergleichen", 
          project_projecttype: "newComment",
          project_author: 2, 
          Project_projectid: 45,
          project_karma: 0
        },

        {
          projectid: 49, 
          project_name: 'Auftragserteilung',
          project_text: "Das Basis-Paket von easescreen4schools wird bestellt", 
          project_projecttype: "newComment",
          project_author: 2, 
          Project_projectid: 45,
          project_karma: 0
        },
        {
          projectid: 50, 
          project_name: 'Schulung',
          project_text: "Lehrer und Angestellte im Büro werden für die Datenpflege geschult", 
          project_projecttype: "addTermin",
          project_author: 2, 
          Project_projectid: 45, 
          project_membercount: 1,
          project_termin:"04.01.2018", 
        },
        {
          projectid: 51, 
          project_name: '1.Foto Digitale Kommunikation',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 45, 
        },
        {
          projectid: 52, 
          project_name: '2.Foto Digitale Kommunikation',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 45, 
        },
        {
          projectid: 53, 
          project_name: '3.Foto Digitale Kommunikation',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 45, 
        },
        {
          projectid: 54, 
          project_name: '4.Foto Digitale Kommunikation',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 2, 
          Project_projectid: 45, 
        },


        
       
        








        /////////////////////////////////////////////////////
        //StartGreen@School Ben Maier 1
        {
          projectid: 55, 
          project_name: 'StartGreen@School',
          project_text: "Das Wörter “Klimawandel und Erderwärmung” tauchen in gewissen Abständen immer wieder in den Nachrichten auf. Doch was genau verbirgt sich eigentlich dahinter? Was können die Schüler als Einzelpersonen gegen diesen Prozess tun und was werden auf internationaler Ebene für Maßnahmen ergriffen? Die Schüler sollten sich in Projektgruppen einmal überlegen, wo sie im Alltag ohne viel Probleme Energie oder auch Wasser sparen könnten und diese zusammen tragen. Im zweiten Schritt dieses Schulprojektes geht es darum, sich auch wieder in Gruppen Gedanken zu machen, wie man nachhaltig den Wasser-,Energie und Müllverbrauch reduzieren kann. Dass können einfache Herstellungsoptimierungen sein, aber auch komplexere Erfindungen, animieren Sie Ihre Schüler zu Kreativität! Am Ende sollten alle Ideen vorgestellt und die Vor-und Nachteile jedes Vorschlages diskutiert werden. Wer weiß, vielleicht ist ja die alles verändernde Idee dabei!", 
          project_karma: 101,
          project_projecttype: "newProject",
          project_author: 1,    
          project_imagepath:"images/environmental-protection-683437_1280.jpg",
          project_membercount: 1,   
          project_informationid: 5 
        },
        {
          projectid: 56, 
          project_name: 'Unterricht planen',
          project_text: "Für das Projekt müssen Schulstunden geplant werden", 
          project_projecttype: "newComment",
          project_author: 1, 
          Project_projectid: 55,
          project_karma: 0
        },
        {
          projectid: 57, 
          project_name: 'Ankündigung',
          project_text: "Die Klasse wird über das Projekt informiert", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 1, 
          Project_projectid: 55, 
          project_membercount: 1,
          project_termin:"04.01.2018", 
        },
        {
          projectid: 58, 
          project_name: 'Themen',
          project_text: "Im Unterricht werden die Gruppenthemen besprochen", 
          project_projecttype: "newComment",
          project_author: 1, 
          Project_projectid: 55,
          project_karma: 0
        },
        {
          projectid: 59, 
          project_name: 'Gruppen bilden',
          project_text: "Schüler bilden Gruppen und entscheiden sich für ein Thema", 
          project_projecttype: "newComment",
          project_author: 1, 
          Project_projectid: 55,
          project_karma: 0
        },
        {
          projectid: 60, 
          project_name: 'Unterrichtsdokumente',
          project_text: "Mobilität, Klimaschutz, Wirtschaft und Konsum", 
          project_projecttype: "addDocument",
          project_author: 1, 
          project_karma: 0,
          Project_projectid: 55,
        },

        {
          projectid: 61, 
          project_name: '1.Foto',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 55, 
        },
        {
          projectid: 62, 
          project_name: '2.Foto',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 55, 
        },
        {
          projectid: 63, 
          project_name: '3.Foto',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 55, 
        },
        {
          projectid: 64, 
          project_name: '4.Foto',
          project_text: "Hier ist ein Foto",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 55, 
        },





        //////////////////////////////////////////////////////
        //Schule als Staat
        {
          projectid: 65, 
          project_name: 'Schule als Staat',
          project_text: "Die Schüler entwickeln in dieser Zeit selbständig ein Staatsgefüge.  Schule als Staat ist ein Projekt, welches am besten in einer Themenwoche durchgeführt werden kann, da es sich um ein sehr aufwendiges Projekt handelt.  Alle Teilnehmer können die Erfahrung machen, Teil eines selbst entwickelten Wirtschafts- und Rechtssystems zu sein und selbstständig zu handeln. Dabei sind Schüler und Lehrer gleichberechtigt. Die Schüler haben so die Möglichkeit sich intensiver mit dem doch sonst eher abstrakten Konzept Politik und Wirtschaft auseinander zu setzen. ", 
          project_karma: 101,
          project_projecttype: "newProject",
          project_author: 1,    
          project_imagepath:"images/Schule1.jpg",
          project_membercount: 1,   
          project_informationid: 6 
        },

        {
          projectid: 66, 
          project_name: 'Ankündigung',
          project_text: "Die Projektwoche wird in der Schule/Klasse angekündigt", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 1, 
          Project_projectid: 65, 
          project_membercount: 1,
          project_termin:"22.01.2018", 
        },
        {
          projectid: 67, 
          project_name: 'Unterrichtseinheit 1',
          project_text: "„Welche Staatsform ist vorhanden?“", 
          project_projecttype: "addDocument",
          project_author: 1, 
          project_karma: 0,
          Project_projectid: 65,
        },

        {
          projectid: 68, 
          project_name: 'Unterrichtseinheit 2',
          project_text: "„Ist jede einzelne Person in diesem Projekt wichtig?“", 
          project_projecttype: "addDocument",
          project_author: 1, 
          project_karma: 0,
          Project_projectid: 65,
        },

        {
          projectid: 69, 
          project_name: '1 Phase',
          project_text: "Die Schüler arbeiten an eine neue Verfassung, ein Wirtschaftssystem, neue Parteien und ihren Wahlkampf", 
          project_projecttype: "addDocument",
          project_author: 1, 
          project_karma: 0,
          Project_projectid: 65,
        },
        {
          projectid: 70, 
          project_name: '2 Phase',
          project_text: "Alltagsleben Staat, Arbeitsuche, Unternehmen gründen, staatliche Posten", 
          project_projecttype: "addDocument",
          project_author: 1, 
          project_karma: 0,
          Project_projectid: 65,
        },
        {
          projectid: 71, 
          project_name: '1.Foto Schule als Staat',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 65, 
        },
        {
          projectid: 72, 
          project_name: '2.Foto Schule als Staat',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 65, 
        },
        {
          projectid: 73, 
          project_name: '3.Foto Schule als Staat',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 65, 
        },
        {
          projectid: 74, 
          project_name: '4.Foto Schule als Staat',
          project_text: "Hier steht ein Text",
          project_projecttype: "addImage",
          project_author: 1, 
          Project_projectid: 65, 
        },




        











        ////////////////////////////////////////////////////////
        //Spendenprojekt Claudia 5
        {
          projectid: 75, 
          project_name: 'Spendenprojekt',
          project_text: "Ihr habt eine Partnerschule in einem anderen Land oder möchtet eine bestimmte Organisation unterstützen? Dann planen Sie doch einmal ein Schulprojekt im Rahmen einer Spendenaktion. Eine Gruppe müsste sich zu allererst mit dem Projekt, bzw. mit der Partnerschule beschäftigen. Stellt sie und das Leben der Schüler vor; was unterscheidet sie von deutschen Schülern, was ist aber auch identisch? Hier sollten Infostände vorbereitet werden, versuchen Sie, so viele mediale Formen zu nutzen, wie möglich, sodass es für alle abwechslungsreicher wird. Meistens wird es für die Schüler zugänglicher, wenn mit Beispielen gearbeitet wird, d.h. suchen Sie sich eine Kontaktperson der anderen Schule heraus und stellen Sie Ihr Leben und Ihren Alltag vor!", 
          project_karma: 101,
          project_projecttype: "newProject",
          project_author: 5,    
          project_imagepath:"images/spende4.jpeg",
          project_membercount: 1,   
          project_informationid: 7 
        },
        {
          projectid: 76, 
          project_name: 'Strategie planen',
          project_text: "Lehrer und Schüler überlegen sich zusammen eine Strategie zum Spenden sammeln aus", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid: 75,
          project_karma: 0
        },
        {
          projectid: 77, 
          project_name: 'Theater AG',
          project_text: "Es wird passend zur Weihnachtszeit ein Theaterstück ausgesucht", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid: 75,
          project_karma: 0
        },
        {
          projectid: 78, 
          project_name: 'Beschaffung',
          project_text: "Flyer, Infostände, Wechselgeld für die Kassen werden bestellt", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid: 75,
          project_karma: 0
        },
        {
          projectid: 79, 
          project_name: 'Aufgabenverteilung',
          project_text: "Schülergruppen  die nicht am Theaterstück beteiligt sind, erhalten andere Aufgaben", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 5, 
          Project_projectid: 75, 
          project_membercount: 1,
          project_termin:"29.01.2018", 
        },
        {
          projectid: 80, 
          project_name: '1.Foto Spende',
          project_text: "Hier ist das Spendenprojekt",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 75, 
        },
        {
          projectid: 81, 
          project_name: '2.Foto Spende',
          project_text: "Hier ist das Spendenprojekt",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 75, 
        },
        {
          projectid: 82, 
          project_name: '3.Foto Spende',
          project_text: "Hier ist das Spendenprojekt",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 75, 
        },
        {
          projectid: 83, 
          project_name: '4.Foto Spende',
          project_text: "Hier ist das Spendenprojekt",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 75, 
        },{
          projectid: 84, 
          project_name: '5.Foto Spende',
          project_text: "Hier ist das Spendenprojekt",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 75, 
        },










        ////////////////////////////////////////////////////////
        //Sportwoche  Richard 8
        {
          projectid: 85, 
          project_name: 'Sportwoche',
          project_text: "Immer wieder hört man, dass sich Kinder sich nicht ausreichend bewegen und stattdessen nur noch vor dem PC hocken. Deshalb habe ich mich dazu entschlossen auf unserer Schule jedes Frühjahr eine Sportwoche zu organisieren.  Neben den klassischen Sportarten gibt es auch bei uns Aktivitäten außerhalb der Schule wie z. B. Wandern, Sponsored Walk, Klettern und Radfahren. Für die erbrachte Leistungen können z. B. beim Schwimmen Abzeichen erworben werden, und bei den Wettkämpfen zwischen den Klassen wird es eine Teilnehmer- und Siegerehrung geben.", 
          project_karma: 101,
          project_projecttype: "newProject",
          project_author: 8,    
          project_imagepath:"images/sport1.jpeg",
          project_membercount: 1,   
          project_informationid: 8
        },
        {
          projectid: 86, 
          project_name: 'Meeting im Lehrerzimmer',
          project_text: "Projekt wird im Lehrerzimmer mit anderen Lehrern geplant. Lehrer stimmen über einen geeigneten Zeitpunkt ab", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 8, 
          Project_projectid: 85, 
          project_membercount: 1,
          project_termin:"25.02.2018", 
        },
        {
          projectid: 87, 
          project_name: 'Fahrt organisieren',
          project_text: "Schulbus für hin und zurück wird organisiert", 
          project_projecttype: "newComment",
          project_author: 8, 
          Project_projectid: 85,
          project_karma: 0
        },

        {
        projectid: 88, 
        project_name: 'Infoblatt und Anmeldeliste verteilen',
        project_text: "Nachdem man sich für ein Angebot entschieden hat, werden die Lehrer und Schüler darüber informiert", 
        project_projecttype: "addDocument",
        project_author: 8, 
        project_karma: 0,
        Project_projectid: 85,
      },
{
          projectid: 89, 
          project_name: 'Lehrereinsatzplan erstellen',
          project_text: "Lehrer bekommen ihren Einsatzplan für die Sportwoche", 
          project_projecttype: "newComment",
          project_author: 8, 
          Project_projectid: 85,
          project_karma: 0
        },

        {
          projectid: 90, 
          project_name: 'Wochenplan austeilen',
          project_text: "Schüler erhalten den Wochenplan ", 
          project_projecttype: "addDocument",
          project_author: 8, 
          project_karma: 0,
          Project_projectid: 85,
        },
        {
          projectid: 91, 
          project_name: 'Aufbau',
          project_text: "Volleyballnetz, Badmintonnetze, Tischtennistische, Trampolin werden aufgebaut", 
          project_projecttype: "newComment",
          project_author: 8, 
          Project_projectid: 85,
          project_karma: 0
        },

        {
          projectid: 92, 
          project_name: 'Start',
          project_text: "Sportwoche beginnt!", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 8, 
          Project_projectid: 85, 
          project_membercount: 1,
          project_termin:"15.04.2018", 
        },
        {
          projectid: 93, 
          project_name: '1.Foto Sportwoche',
          project_text: "Hier ist das Projekt Sportwoche",
          project_projecttype: "addImage",
          project_author: 8, 
          Project_projectid: 85, 
        },
        {
          projectid: 94, 
          project_name: '2.Foto Sportwoche',
          project_text: "Hier ist das Projekt Sportwoche",
          project_projecttype: "addImage",
          project_author: 8, 
          Project_projectid: 85, 
        },
        {
          projectid: 95, 
          project_name: '3.Foto Sportwoche',
          project_text: "Hier ist das Projekt Sportwoche",
          project_projecttype: "addImage",
          project_author: 8, 
          Project_projectid: 85, 
        },
        {
          projectid: 96, 
          project_name: '4.Foto Sportwoche',
          project_text: "Hier ist das Projekt Sportwoche",
          project_projecttype: "addImage",
          project_author: 8, 
          Project_projectid: 85, 
        },
        {
          projectid: 97, 
          project_name: '5.Foto Sportwoche',
          project_text: "Hier ist das Projekt Sportwoche",
          project_projecttype: "addImage",
          project_author: 8, 
          Project_projectid: 85, 
        }

        /* Vernissage Claudia

{
          projectid: 98, 
          project_name: 'Vernissage',
          project_text: "Fördern Sie doch mal die Kreativität Ihrer Schüler! Viele sind mit dem Kunstunterricht in der Schule eher auf Kriegsfuß, aber wenn im Rahmen dieses Projektes alle Schüler gemeinsam an der Fertigstellung eines Kunstwerkes arbeiten, wird es bestimmt ein Erfolg! In jeder Klasse gibt es künstlerisch talentierte und eher weniger talentierte Schüler. Es geht hier um Arbeitsteilung bzw. zu Beginn der Verteilung. Es funktioniert ganz nach dem Schema: Die Gemeinschaft profitiert von den Stärken der Einen und lernt von den Schwächen der Anderen. Die begabteren Schüler können zu Beginn eine anleitende Position einnehmen. Bei diesem Schulprojekt wäre zu überlegen, ob jede Klasse ein anderes Thema bekommt. Eine Klasse beschäftigt sich zum Beispiel mit der Töpfertechnik, eine andere arbeitet an einer Skulptur und eine weitere zeichnet ein Gemälde auf eine große Leinwand. Jede Klasse darf im Voraus einen Wunsch abgeben, am Ende werden manche Themen ausgelost oder doppelt vergeben. Zum Schluss dieses tollen Schulprojekte kann man eine richtige Vernissage organisieren zu der alle Schüler, Lehrer und Angehörige natürlich herzlich eingeladen sind. Wenn ihr dann noch was Gutes tun wollt könntet ihr ein paar eurer Kunstwerke  verkaufen und am Ende den Erlös für einen guten Zweck spenden.", 
          project_karma: 456,
          project_projecttype: "newProject",
          project_author: 5,    
          project_imagepath:"images/Vernissage.jpeg",
          project_membercount: 1,   
          project_informationid: 9
        },

        {
          projectid: 99, 
          project_name: 'Zielsetzung der Ausstellung',
          project_text: "Ziele müssen definiert werden.", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 100, 
          project_name: 'Der geeignete Ort',
          project_text: "Schulaula oder öffentliche Einrichtung für die Ausstellung auswähle", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 101, 
          project_name: 'Das geeignete Thema',
          project_text: "Themen für die Vernissage suchen wie z.B. Gemälde, Töpfertechnik oder Skulpturen.", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 102, 
          project_name: 'Suche nach Partnern',
          project_text: "Für die Unterstützung könnten Eltern, Schule, Universitäten oder kulturelle Institutionen in Frage kommen.", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 103, 
          project_name: 'Einteilung in Arbeitsgruppen',
          project_text: "Schüler werden in Kleingruppen eingeteilt und dürfen sich ein Thema aussuchen (Verlosung geht auch)", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 104, 
          project_name: 'Arbeitsplan erstellen',
          project_text: "Zeitplan für die verschiedenen Tätigkeiten innerhalb der Arbeitsgruppen wird erstellt", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 105, 
          project_name: 'Kommunikation & Dokumentation',
          project_text: "Zielsetzung, aktuelle Ergebnisse und Ideen müssen gemeinsam überprüft und dokumentiert werden", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 106, 
          project_name: 'Recherchieren von Kunsttechniken und Exponaten',
          project_text: "Selbständige Recherche der Schüler für Ihr Projekt. Kunstobjekte könnten für die Ausstellung geliehen werden.", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 107, 
          project_name: 'Gestalten des Raumes',
          project_text: "Grundrissplan und Ausstellungssystem wird erstellt ", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 108, 
          project_name: 'Verfassen von Ausstellungstexten',
          project_text: "Schüler verfassen für ihr Ausstellungsstück ein Text für die Besucher", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 109, 
          project_name: 'Aufbau',
          project_text: "Aufbau der Schulprojekte im Projektraum", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
        {
          projectid: 110, 
          project_name: 'Die Eröffnung',
          project_text: "Die Ausstellung wird geöffnet. Besucher werden empfangen und betreut", 
          project_projecttype: "addTermin",
          project_karma: 0,
          project_author: 5, 
          Project_projectid: 98, 
          project_membercount: 1,
          project_termin:"13.05.2018", 
        },
         {
          projectid: 111, 
          project_name: 'Projektschlussbericht',
          project_text: "Schlussbericht mit Feedback und Kritik der Beteiligten des Projekts", 
          project_projecttype: "newComment",
          project_author: 5, 
          Project_projectid:98,
          project_karma: 0
        },
                  
        {
          projectid: 112, 
          project_name: '1.Foto Vernissage',
          project_text: "Hier ist die Vernissage",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 98, 
        },
         {
          projectid: 113, 
          project_name: '1.Foto Vernissage',
          project_text: "Hier ist die Vernissage",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 98, 
        },
         {
          projectid: 114, 
          project_name: '1.Foto Vernissage',
          project_text: "Hier ist die Vernissage",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 98, 
        },
         {
          projectid: 115, 
          project_name: '1.Foto Vernissage',
          project_text: "Hier ist die Vernissage",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 98, 
        },
         {
          projectid: 116, 
          project_name: '1.Foto Vernissage',
          project_text: "Hier ist die Vernissage",
          project_projecttype: "addImage",
          project_author: 5, 
          Project_projectid: 98, 
        },
       





        */








        
        
        


      ]);
    });
};

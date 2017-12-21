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
            project_projecttype: "addComment",
            project_author: 4, 
            Project_projectid: 1,  
          },
          {
            projectid: 12, 
            project_name: 'Aufbau der Ausstattung',
            project_text: "Möbel werden aufgebaut, Hardware wird angeschlossen und Software wird installiert ( MS-Office-Paket)", 
            project_projecttype: "addComment",
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
            project_text: "Hier sieht das Selbstlernzentrum",
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
          {
            projectid: 20, 
            project_name: 'Digitales Klassenbuch',
            project_text: "Das digitale Klassenbuch verbindet die Vorteile einer webbasierten Anwendung mit den Fähigkeiten eines Klassenbuches aus Papier. Es verwaltet Fehlstunden, Fehltage und Entschuldigungen pro Schüler, Unterrichtsdokumentationen pro Fach und Hausaufgaben pro Klasse. Lehrer können die Anwesenheitsliste im Klassenraum führen und haben derweil bereits Einsicht auf die Entschuldigungen, die das Sekretariat telefonisch entgegen genommen hat. Das Projekt findet gemeinsam im Rahmen des Laboratory Course on Development der Universität zu Köln statt.", 
            project_karma: 101,
            project_projecttype: "newProject",
            project_author: 1,    
            project_imagepath:"images/Digital_Klassenbuch.jpg",
            project_membercount: 1,   
            project_informationid: 2 
          },
          {
            projectid: 21, 
            project_name: 'Digitale Bibliothek',
            project_text: "Das digitale Klassenbuch verbindet die Vorteile einer webbasierten Anwendung mit den Fähigkeiten eines Klassenbuches aus Papier. Es verwaltet Fehlstunden, Fehltage und Entschuldigungen pro Schüler, Unterrichtsdokumentationen pro Fach und Hausaufgaben pro Klasse. Lehrer können die Anwesenheitsliste im Klassenraum führen und haben derweil bereits Einsicht auf die Entschuldigungen, die das Sekretariat telefonisch entgegen genommen hat. Das Projekt findet gemeinsam im Rahmen des Laboratory Course on Development der Universität zu Köln statt.", 
            project_karma: 101,
            project_projecttype: "newProject",
            project_author: 2,    
            project_imagepath:"images/bib1.jpg",
            project_membercount: 1,   
            project_informationid: 3 
          },
          {
            projectid: 22, 
            project_name: 'Digitale Kommunikation',
            project_text: "Informieren Sie Schüler, Studenten und Lehrkräfte rasch und unkompliziert über Vertretungen, Raumänderungen, wichtige Schulinterne Infos , Veranstaltungen, Fundsachen und das aktuelles Wetter für den Sportunterricht.", 
            project_karma: 101,
            project_projecttype: "newProject",
            project_author: 3,    
            project_imagepath:"images/dk1.jpg",
            project_membercount: 1,   
            project_informationid: 4 
          },
          {
            projectid: 23, 
            project_name: 'StartGreen@School',
            project_text: "Das Wörter “Klimawandel und Erderwärmung” tauchen in gewissen Abständen immer wieder in den Nachrichten auf. Doch was genau verbirgt sich eigentlich dahinter? Was können die Schüler als Einzelpersonen gegen diesen Prozess tun und was werden auf internationaler Ebene für Maßnahmen ergriffen? Die Schüler sollten sich in Projektgruppen einmal überlegen, wo sie im Alltag ohne viel Probleme Energie oder auch Wasser sparen könnten und diese zusammen tragen. Im zweiten Schritt dieses Schulprojektes geht es darum, sich auch wieder in Gruppen Gedanken zu machen, wie man nachhaltig den Wasser-,Energie und Müllverbrauch reduzieren kann. Dass können einfache Herstellungsoptimierungen sein, aber auch komplexere Erfindungen, animieren Sie Ihre Schüler zu Kreativität! Am Ende sollten alle Ideen vorgestellt und die Vor-und Nachteile jedes Vorschlages diskutiert werden. Wer weiß, vielleicht ist ja die alles verändernde Idee dabei!", 
            project_karma: 101,
            project_projecttype: "newProject",
            project_author: 4,    
            project_imagepath:"images/environmental-protection-683437_1280.jpg",
            project_membercount: 1,   
            project_informationid: 5 
          },
          {
            projectid: 24, 
            project_name: 'Schule als Staat',
            project_text: "Die Schüler entwickeln in dieser Zeit selbständig ein Staatsgefüge.  Schule als Staat ist ein Projekt, welches am besten in einer Themenwoche durchgeführt werden kann, da es sich um ein sehr aufwendiges Projekt handelt.  Alle Teilnehmer können die Erfahrung machen, Teil eines selbst entwickelten Wirtschafts- und Rechtssystems zu sein und selbstständig zu handeln. Dabei sind Schüler und Lehrer gleichberechtigt. Die Schüler haben so die Möglichkeit sich intensiver mit dem doch sonst eher abstrakten Konzept Politik und Wirtschaft auseinander zu setzen. ", 
            project_karma: 101,
            project_projecttype: "newProject",
            project_author: 5,    
            project_imagepath:"images/Schule1.jpg",
            project_membercount: 1,   
            project_informationid: 6 
          },
          {
            projectid: 25, 
            project_name: 'Spendenprojekt',
            project_text: "Ihr habt eine Partnerschule in einem anderen Land oder möchtet eine bestimmte Organisation unterstützen? Dann planen Sie doch einmal ein Schulprojekt im Rahmen einer Spendenaktion. Eine Gruppe müsste sich zu allererst mit dem Projekt, bzw. mit der Partnerschule beschäftigen. Stellt sie und das Leben der Schüler vor; was unterscheidet sie von deutschen Schülern, was ist aber auch identisch? Hier sollten Infostände vorbereitet werden, versuchen Sie, so viele mediale Formen zu nutzen, wie möglich, sodass es für alle abwechslungsreicher wird. Meistens wird es für die Schüler zugänglicher, wenn mit Beispielen gearbeitet wird, d.h. suchen Sie sich eine Kontaktperson der anderen Schule heraus und stellen Sie Ihr Leben und Ihren Alltag vor!", 
            project_karma: 101,
            project_projecttype: "newProject",
            project_author: 6,    
            project_imagepath:"images/spende4.jpeg",
            project_membercount: 1,   
            project_informationid: 7 
          },
          {
            projectid: 26, 
            project_name: 'Sportwoche',
            project_text: "Immer wieder hört man, dass sich Kinder sich nicht ausreichend bewegen und stattdessen nur noch vor dem PC hocken. Deshalb habe ich mich dazu entschlossen auf unserer Schule jedes Frühjahr eine Sportwoche zu organisieren.  Neben den klassischen Sportarten gibt es auch bei uns Aktivitäten außerhalb der Schule wie z. B. Wandern, Sponsored Walk, Klettern und Radfahren. Für die erbrachte Leistungen können z. B. beim Schwimmen Abzeichen erworben werden, und bei den Wettkämpfen zwischen den Klassen wird es eine Teilnehmer- und Siegerehrung geben.", 
            project_karma: 101,
            project_projecttype: "newProject",
            project_author: 7,    
            project_imagepath:"images/sport1.jpeg",
            project_membercount: 1,   
            project_informationid: 8
          },
          
          
          
  /* //Digitales Klassenbuch

  {
    projectid: 28, 
    project_name: 'Digitales Klassenbuch',
    project_text: "Das digitale Klassenbuch verbindet die Vorteile einer webbasierten Anwendung mit den Fähigkeiten eines Klassenbuches aus Papier. Es verwaltet Fehlstunden, Fehltage und Entschuldigungen pro Schüler, Unterrichtsdokumentationen pro Fach und Hausaufgaben pro Klasse. Lehrer können die Anwesenheitsliste im Klassenraum führen und haben derweil bereits Einsicht auf die Entschuldigungen, die das Sekretariat telefonisch entgegen genommen hat. Das Projekt findet gemeinsam im Rahmen des Laboratory Course on Development der Universität zu Köln statt. ", 
    project_karma: 159, 
    project_projecttype: "newProject",
    project_author: 12,
    project_imagepath:"images/Digital_Klassenbuch.jpg", 
    project_membercount: 3,
    project_informationid:18 
   
    
  },
  {
    projectid: 29, 
    project_name: 'Meeting',
    project_text: "Budget und Zeitplanung  ", 
    project_projecttype: "addTermin",
    project_author: 12, 
    Project_projectid: 28,
    project_membercount: 3,  
    project_termin:"15.02.2017",
    project_informationid:19 
   
    
  },
  {
    projectid: 30, 
    project_name: 'Angebotsvergleich',
    project_text: "Support-Software wird gesucht und von verschiedenen Anbietern verglichen", 
    project_projecttype: "addComment",
    project_author: 12, 
    Project_projectid: 28,
    project_informationid:20 
   
    
  },
  {
    projectid: 31, 
    project_name: 'Auftragserteilung',
    project_text: "Das Angebot von der Firma Smartkomm wird in Auftrag genommen", 
    project_projecttype: "addComment",
    project_author: 16, 
    Project_projectid: 28,
    project_informationid:21
   
    
  },
  {
    projectid: 32, 
    project_name: 'Auftragserteilung',
    project_text: "Das Angebot von der Firma Smartkomm wird in Auftrag genommen", 
    project_projecttype: "addComment",
    project_author: 16, //userid  16-Dirk 17 Renate
    Project_projectid: 28,
    project_informationid:22
   
    
  },
  {
    projectid: 33, 
    project_name: 'Ankündigung & Information',
    project_text: "Schüler und Lehrer erhalten ein Informationsblatt über das SLZ", 
    project_projecttype: "addComment",
    project_author: 17, //userid  16-Dirk 17 Renate
    Project_projectid: 28,
    project_informationid:23
   
    
  },
  {
    projectid: 34, 
    project_name: 'Ankündigung & Information',
    project_text: "Schüler und Lehrer erhalten ein Informationsblatt über das SLZ", 
    project_projecttype: "addTermin",
    project_author: 12, //userid  16-Dirk 17 Renate
    Project_projectid: 28,
    project_termin:"29.02.2018",
    project_informationid:24
   
    
  },

  //Fotos
  {
    projectid: 35, 
    project_name: '1.Foto Digitales Klassenbuch',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 12, 
    Project_projectid:28, 
    project_imagepath:"images/DK1.jpeg",
    project_informationid:25
   
    
  },
  {
    projectid: 36, 
    project_name: '2.Foto Digitales Klassenbuch',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 12, 
    Project_projectid:28, 
    project_imagepath:"images/DK2.jpg",
    project_informationid:26
   
    
  },
  {
    projectid: 37, 
    project_name: '2.Foto Digitales Klassenbuch',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 12, 
    Project_projectid:28, 
    project_imagepath:"images/DK3.jpg",
    project_informationid:27
   
    
  },
  {
    projectid: 38, 
    project_name: '2.Foto Digitales Klassenbuch',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 12, 
    Project_projectid:28, 
    project_imagepath:"images/DK4.jpg",
    project_informationid:28
   
    
  },


  //Digitale Kommunikation

  // Schule als Staat
  {
    projectid: 39, 
    project_name: 'Schule als Staat',
    project_text: "Die Schüler entwickeln in dieser Zeit selbständig ein Staatsgefüge.  Schule als Staat ist ein Projekt, welches am besten in einer Themenwoche durchgeführt werden kann, da es sich um ein sehr aufwendiges Projekt handelt.  Alle Teilnehmer können die Erfahrung machen, Teil eines selbst entwickelten Wirtschafts- und Rechtssystems zu sein und selbstständig zu handeln. Dabei sind Schüler und Lehrer gleichberechtigt. Die Schüler haben so die Möglichkeit sich intensiver mit dem doch sonst eher abstrakten Konzept Politik und Wirtschaft auseinander zu setzen. ", 
    project_karma: 456, 
    project_projecttype: "newProject",
    project_author: 11, 
    project_imagepath:"images/Schule_Staat.jpg",
    project_informationid:29
  },
  {
    projectid: 40, 
    project_name: 'Ankündigung',
    project_text: "Die Projektwoche wird in der Schule/Klasse angekündigt ", 
    project_projecttype: "addTermin",
    project_author: 11, 
    Project_projectid: 39,
    project_termin:"01.03.2018",
    project_informationid:30
  },
  {
    projectid: 41, 
    project_name: 'Unterrichtseinheit 1',
    project_text: "„Welche Staatsform ist vorhanden?“", 
    project_projecttype: "addDocument",
    project_author: 11, 
    Project_projectid: 39,
    project_informationid:31
  },
  {
    projectid: 42, 
    project_name: '1. Arbeitsphase',
    project_text: "Die Schüler arbeiten an eine neue Verfassung, ein Wirtschaftssystem, neue Parteien und ihren Wahlkampf", 
    project_projecttype: "addDocument",
    project_author: 11, 
    Project_projectid: 39,
    project_informationid:32
  },

  //Fotos
{
  projectid:43, 
  project_name: '1.Foto Schule als Staat',
  project_text: "Hier ist ein Foto",
  project_projecttype: "addImage",
  project_author: 11, 
  Project_projectid:39, 
  project_imagepath:"images/Schule1.jpg",
  project_informationid:33
},
{
  projectid:44, 
  project_name: '2.Foto Schule als Staat',
  project_text: "Hier ist ein Foto",
  project_projecttype: "addImage",
  project_author: 11, 
  Project_projectid:39, 
  project_imagepath:"images/Schule2.jpg",
  project_informationid:34
},
{
  projectid:45, 
  project_name: '3.Foto Schule als Staat',
  project_text: "Hier ist ein Foto",
  project_projecttype: "addImage",
  project_author: 11, 
  Project_projectid:39, 
  project_imagepath:"images/Schule3.jpg",
  project_informationid:35
},
{
  projectid:46, 
  project_name: '3.Foto Schule als Staat',
  project_text: "Hier ist ein Foto",
  project_projecttype: "addImage",
  project_author: 11, 
  Project_projectid:39, 
  project_imagepath:"images/Schule4.jpg",
  project_informationid:36
},
  // Digitale Bibliothek
  // StartGreen@School
  // Sportwoche
  
  //Vernissage
  {
    projectid: 47, 
    project_name: 'Vernissage',
    project_text: "Fördern Sie doch mal die Kreativität Ihrer Schüler! Viele sind mit dem Kunstunterricht in der Schule eher auf Kriegsfuß, aber wenn im Rahmen dieses Projektes alle Schüler gemeinsam an der Fertigstellung eines Kunstwerkes arbeiten, wird es bestimmt ein Erfolg! In jeder Klasse gibt es künstlerisch talentierte und eher weniger talentierte Schüler. Es geht hier um Arbeitsteilung bzw. zu Beginn der Verteilung. Es funktioniert ganz nach dem Schema: Die Gemeinschaft profitiert von den Stärken der Einen und lernt von den Schwächen der Anderen. Die begabteren Schüler können zu Beginn eine anleitende Position einnehmen. Bei diesem Schulprojekt wäre zu überlegen, ob jede Klasse ein anderes Thema bekommt. Eine Klasse beschäftigt sich zum Beispiel mit der Töpfertechnik, eine andere arbeitet an einer Skulptur und eine weitere zeichnet ein Gemälde auf eine große Leinwand. Jede Klasse darf im Voraus einen Wunsch abgeben, am Ende werden manche Themen ausgelost oder doppelt vergeben. Zum Schluss dieses tollen Schulprojekte kann man eine richtige Vernissage organisieren zu der alle Schüler, Lehrer und Angehörige natürlich herzlich eingeladen sind. Wenn ihr dann noch was Gutes tun wollt könntet ihr ein paar eurer Kunstwerke  verkaufen und am Ende den Erlös für einen guten Zweck spenden. ", 
    project_karma: 647, 
    project_projecttype: "newProject",
    project_author: 15, 
    //Project_projectid: 
    project_imagepath:"images/Schule_Staat.jpg",
    project_informationid:37 
  },

  {
    projectid: 48, 
    project_name: 'Zielsetzung der Ausstellung',
    project_text: "Ziele müssen definiert werden.", 
    project_projecttype: "addComment",
    project_author: 15, 
    Project_projectid: 39, 
    project_informationid:38
  },
  {
    projectid: 49, 
    project_name: 'Das geeignete Thema',
    project_text: "Themen für die Vernissage suchen wie z.B. Gemälde, Töpfertechnik oder Skulpturen.", 
    project_projecttype: "addComment",
    project_author: 15, 
    Project_projectid: 39, 
    project_informationid:39
  },
  {
    projectid: 50, 
    project_name: 'Suche nach Partnern',
    project_text: "Für die Unterstützung könnten Eltern, Schule, Universitäten oder kulturelle Institutionen in Frage kommen.", 
    project_projecttype: "addComment",
    project_author: 15, 
    Project_projectid: 39, 
    project_informationid:40
  },

  {
    projectid:51, 
    project_name: '1.Foto Vernissage',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 15, 
    Project_projectid:39, 
    project_imagepath:"images/V1.jpg",
    project_informationid:41
  },
  {
    projectid:52, 
    project_name: '2.Foto Vernissage',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 15, 
    Project_projectid:39, 
    project_imagepath:"images/V2.jpg",
    project_informationid:42
  },
  {
    projectid:53, 
    project_name: '3.Foto Vernissage',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 15, 
    Project_projectid:39, 
    project_imagepath:"images/V3.jpeg",
    project_informationid:43
  },
  {
    projectid:54, 
    project_name: '4.Foto Vernissage',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 15, 
    Project_projectid:39, 
    project_imagepath:"images/V4.jpeg",
    project_informationid:44
  },
  {
    projectid:55, 
    project_name: '1.Foto Vernissage',
    project_text: "Hier ist ein Foto",
    project_projecttype: "addImage",
    project_author: 15, 
    Project_projectid:39, 
    project_imagepath:"images/V5.jpeg",
    project_informationid:45
  },
 */
  //Theater AG
  //Spendenprojekt
  
        ]);
      });
  };
  
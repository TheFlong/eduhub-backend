
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Project').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        { projectid: 1, 
          name: 'Bundesjugendspiele',
          text: "Die Bundesjugendspiele sind eine jährlich an deutschen Schulen und Auslandsschulen durchgeführte Sportveranstaltung. Die Teilnahme der Schüler ist gemäß einem Beschluss der Kultusministerkonferenz von 1979 verpflichtend.[1][2] Der deutsche Bundespräsident fungiert als Schirmherr. Von den teilnehmenden Schülern wird erwartet, dass sie in bestimmten Disziplinen (Leichtathletik, Turnen) möglichst gute Leistungen erzielen. Meist wird ein Dreikampf in den Disziplinen Werfen (im höheren Alter Kugelstoßen), Laufen (Sprint) und Weitsprung sowie ein Langstreckenlauf (z. B. 1000 Meter) durchgeführt. Die erzielten Leistungen werden mit Punkten bewertet. Erreicht der Teilnehmer eine bestimmte Mindestpunktzahl, erhält er als Anerkennung für seine Leistung eine Siegerurkunde, ab einer bestimmten höheren Punktegrenze eine Ehrenurkunde. Die Ehrenurkunden tragen eine (gedruckte) Unterschrift des Bundespräsidenten. Alle anderen Schüler, die weder Sieger- noch Ehrenurkunde erhalten haben, bekommen seit 1991 eine Teilnahmeurkunde.", 
          karma: 150,
          projecttype: "newProject",
          author: 1,
          imagepath: "/images/Chrysanthemum.jpg"

          
        },
        {projectid: 2, 
          name: 'Selbstlernzentrum',
          text: "Seit Februar 2005 ist das Selbstlernzentrum des Archigymnasiums nutzbar. Oberstufenschüler haben dort die Möglichkeit in ihren Freistunden an vernetzten PCs Informationen aus dem Internet zu suchen oder sich eines von Hunderten von Büchern auszuleihen, um selbständig zu lernen und zu arbeiten. Das Selbstlernzentrum (SLZ) wurde maßgeblich von den Schülern des Abiturjahrgangs 2007 im Rahmen des Projekts „Soziale Verantwortung“ aufgebaut. Durch die Tatsache, dass sie nicht immer an der Schule bleiben konnten, lernten sie die zukünftigen Unterprima an, um auch zukünftig einen reibungslosen Ablauf und eine weiterhin überdurchschnittliche Organisation zu gewährleisten. Das Selbstlernzentrum wurde weitestgehend durch den Förderverein des Archigymnasiums finanziert.", 
          karma: 271,
          projecttype: "newProject",
          author: 5,
          imagepath: "/images/Desert.jpg"
          
        },
        {projectid: 3, 
          name: 'Schülerwerkstatt',
          text: "Porsche Schülerwerkstatt: Die Faszination und Emotion für einen Porsche. Die Faszination Porsche lässt sich schwer in drei Worten beschreiben – aber in einigen Stunden erleben. Und zwar in den Kursen der VDI – GaraGe gemeinnützige GmbH in Leipzig-Plagwitz, die Porsche seit 2001 aktiv unterstützt. In der Porsche Schülerwerkstatt werden Kinder und Jugendliche innerhalb kürzester Zeit zum echten Porsche Experten. Neben aufregenden Kursen rund um den Porsche, erhalten diese zu dem eine direkte Vorbereitung auf eine mögliche Ausbildung.", 
          karma: 39,
          projecttype: "newProject",
          author: 7,
          imagepath: "/images/Hydrangeas.jpg"
          
        },
        {
          projectid: 4, 
          name: 'Digitales Klassenbuch',
          text: "Es verwaltet Fehlstunden, Fehltage und Entschuldigungen pro Schüler, Unterrichtsdokumentationen pro Fach und Hausaufgaben pro Klasse. Lehrer können die Anwesenheitsliste im Klassenraum führen und haben derweil bereits Einsicht auf die Entschuldigungen, die das Sekretariat telefonisch entgegen genommen hat.", 
          karma: 12,
          projecttype: "newProject",
          author: 8,
          imagepath: "/images/Jellyfish.jpg"
          
        },
        {
          projectid: 5, 
          name: 'Studienfahrt nach Malta',
          text: "Wie Tupfen im Meer liegt südlich von Sizilien die sonnenverwöhnte, geschichtsträchtige Inselrepublik Malta. Lernen Sie die lebhafte Insel mit ihrem überwältigenden kulturellen Erbe, britischer Lebensart gepaart mit südlichem Temperament und maltesischer Freundlichkeit kennen. Tauchen Sie ein in die spannende Geschichte des zweisprachigen Archipels und vertiefen Sie ganz nebenbei Ihre englischen Sprachkenntnisse. Ob meeresbiologische oder naturwissenschaftliche Fachprogramme, unzählige Naturdenkmäler und Museen, interessante Betriebsbesichtigungen, abwechslungsreiche Aktiv- und Kreativprogramme oder ein Sprachkurs unter der maltesichen Sonne – keine andere Mittelmeerinsel bietet auf so kleinem Raum so viel! Das lebensfrohe Malta wird Sie begeistern!", 
          karma: 1022,
          projecttype: "newProject",
          author: 10,
          imagepath:"/images/Koala.jpg"
          
        },
        {
          projectid: 6, 
          name: 'Schneemann bauen',
          text: "Idealerweise baut man Schneemänner, wenn Pappschnee liegt. Mit losem Pulverschnee gibt es nur mehr Frust als Spaß, denn der Pulverschnee lässt sich nicht formen und fällt wieder auseinander. Schon seit Menschengedenken werden die Schneemänner auf der ganzen Erde nach ein und demselben Prinzip in ihrer Grundgestalt modelliert. Mit den Händen wird ein kleiner fester Schnellball geformt. Dieser tritt nun eine weite Reise an. Durch den Schnee gerollt über unzählige Meter auf einer möglichst großen Fläche wird aus dem kleinen Ball eine große Kugel. Dieser Spaß wird zwei Mal wiederholt. Doch jedes Mal wird die Kugel etwas kleiner geformt. So erhalten fleißige Schneemann-Designer drei unterschiedlich große Kugeln. Die Größte liegt unten. Mit viel Körpereinsatz und möglichst etwas Hilfe von Eltern, Freunden oder Erziehern wird die mittlere Kugel auf die unterste gehoben. Der Oberkörper ist fertig. Nun muss nur noch die kleinste Kugel als Kopf oben aufgesetzt werden und schon steht das Grundgerüst.", 
          karma: 423,
          projecttype: "newProject",
          author: 1,
          imagepath: "/images/Lighthouse.jpg"
          
        },
        {
          projectid: 7, 
          name: '2D-Animation Die Luthershow',
          text: "Die hier skizzierte Projektidee regt dazu an, Inhalte aus dem Themenbereich „Luther und die Reformation“ in Form von selbst produzierten 2D-Animationsfilmen darzustellen. Die Filme werden mithilfe einer einfachen Legetechnik gestaltet, bei der analoge Erzähl- und Darstellungsformen mit den Möglichkeiten digitaler Videoaufzeichnung verbunden werden. Als optische Elemente kommen Bilder, Texte und Grafiken zum Einsatz, die vor einem weißen Hintergrund ins Bild geschoben werden. Die Schülerinnen und Schüler filmen die kurzen Clips mit ihren eigenen Smartphones oder Tablets und sprechen dabei parallel einen erklärenden Kommentartext ein.", 
          karma: 111,
          projecttype: "newProject",
          author: 1,
          imagepath: "/images/Penguins.jpg"
          
        },
        {
          projectid: 8, 
          name: 'HipHop & Schulchor Musikprojekt',
          text: "Wir planen einen HipHop-Angebot ab Jahrgang 7 und ein Schulchor für die Jahrgänge 5 und 6. Das HipHop-Projekt soll helfen, verbreitete Gewalt- und Rassismustendenzen zu überwinden. In dieser AG haben SchülerInnen die Möglichkeit Ohnmacht und Sprachlosigkeit zu überwinden und mit kreativen Mitteln neue Ausdruckswege zu finden. Der Schulchor studiert Lieder aus allen Himmelsrichtungen ein, um so verschiedene Sprachen, Länder und Kulturen kennen zu lernen. Kinder verschiedener Nationalitäten bringen Musik aus ihren Heimatländern mit, die dann gemeinsam in der jeweiligen Sprache evtl. auch zweisprachig gesungen werden. Ein wesentliches Ziel ist die Ausländerintegration. ", 
          karma: 312,
          projecttype: "newProject",
          author: 1,
          imagepath: "/images/Tulips.jpg"
          
        },
        {
          projectid: 9, 
          name: 'Vorbereitung des Platzes',
          text: "Zusamen mit meiner 7. Klasse wird der Platz vorbereitet", 
          karma: 12,
          projecttype: "newComment",
          author: 1,
          Project_projectid: 1,
          
        },
        {
          projectid: 10, 
          name: 'Suche nach Sponsoren',
          text: "Für Essen und Trinken werden Sponsoren gesucht", 
          karma: 7,
          projecttype: "newComment",
          author: 1,
          Project_projectid: 1,
        },
        {
          projectid: 11, 
          name: 'Getränkesponsor gefunden',
          text: "Ein Getränkehändler hat sich als Sponsor angeboten", 
          karma: 15,
          projecttype: "addImage",
          author: 1,
          Project_projectid: 1,
        }


      ]);
    });
};

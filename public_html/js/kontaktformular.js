
/* Fehlernachrichten anzeigen*/
function zeigeFehlermeldung(className, nachricht) {
   var fehlerDivs = document.getElementsByClassName(className);
   console.log("Klasse:", className);
   console.log("Nachricht:", nachricht);

   for (var i = 0; i < fehlerDivs.length; i++) {
      fehlerDivs[i].textContent = nachricht;
      console.log("nachricht");
  }
}

/* Vorname-Feld prüfen */
function checkVorname() {  
   let vorname = document.getElementById("vorname").value;
   var fehlerNachricht = "";
   console.log("checkVorname");

     if (vorname === "") {
        document.getElementById("vorname").style.borderColor = "red";
        document.getElementById("vorname").style.backgroundColor = "white";
        fehlerNachricht = "Pflichfeld.";  
        zeigeFehlermeldung("fehler-vorname", fehlerNachricht);  /* normalerweise sollte hier die Nachricht angezeigt werden, allerdings funktioniert es nicht. Ich weiß wirklich nicht, warum...*/
        return false;
        
     }
     else if (vorname.trim().length < 2){
      document.getElementById("vorname").style.borderColor = "red";
      document.getElementById("vorname").style.Color = "red";
      document.getElementById("vorname").style.backgroundColor = "white";
      fehlerNachricht = "mind. 2 Zeichen";
      zeigeFehlermeldung("fehler-vorname", fehlerNachricht); 
      return false;
     }
     else {
         document.getElementById("vorname").style.borderColor = "#ADD8E6";
        document.getElementById("vorname").style.backgroundColor = "white";
        zeigeFehlermeldung("fehler-vorname", "");
        return true;
     }
   
}

/* Nachname-Feld prüfen */
function checkNachname() {
   let nachname = document.getElementById("nachname").value;
   var fehlerNachricht = "";
   console.log("checkNachname");

    if (nachname === "") {
       document.getElementById("nachname").style.borderColor = "red";
       document.getElementById("nachname").style.backgroundColor = "white";
       fehlerNachricht = "Pflichtfeld";
       zeigeFehlermeldung("fehler-nachname", fehlerNachricht); /* normalerweise sollte hier die Nachricht angezeigt werden, allerdings funktioniert es nicht. Ich weiß wirklich nicht, warum...*/
       return false;
    }
    else if (nachname.trim().length < 4){
     document.getElementById("nachname").style.Color = "red";
     document.getElementById("nachname").style.borderColor = "red";
     document.getElementById("nachname").style.backgroundColor = "white";
     fehlerNachricht = "mind. 4 Zeichen";
     zeigeFehlermeldung("fehler-nachname", fehlerNachricht);  
     return false;
    }
    else {
        document.getElementById("nachname").style.borderColor = "#ADD8E6";
       document.getElementById("nachname").style.backgroundColor = "white";
       zeigeFehlermeldung("fehler-nachname", "");
       return true;
    }
}

/* eMail-Feld prüfen */
function checkeMail() {
   let eMail = document.getElementById("eMail").value;
   var fehlerNachricht = "";
   console.log("checkeMail");

    if (eMail === "") {
       document.getElementById("eMail").style.borderColor = "red";
       document.getElementById("eMail").style.backgroundColor = "white";
       fehlerNachricht = "Pflichtfeld.";
       zeigeFehlermeldung("fehler-email", fehlerNachricht);  /* normalerweise sollte hier die Nachricht angezeigt werden, allerdings funktioniert es nicht. Ich weiß wirklich nicht, warum...*/
       return false;
       
    }
    else if (!eMail.includes("@")) {
     document.getElementById("eMail").style.borderColor = "red";
     document.getElementById("eMail").style.Color = "red";
     document.getElementById("eMail").style.backgroundColor = "white";
     fehlerNachricht = "muss @ enthalten";
     zeigeFehlermeldung("fehler-email", fehlerNachricht);
     return false;
    }
    else {
        document.getElementById("eMail").style.borderColor = "#ADD8E6";
       document.getElementById("eMail").style.backgroundColor = "white";
       zeigeFehlermeldung("fehler-email", "");
       return true;
    }
}

/* Nachricht-Feld prüfen */
function checkNachricht() {
   let nachricht = document.getElementById("nachricht").value;
   var fehlerNachricht = "";
   console.log("checkNachricht");

    if (nachricht === "") {
       document.getElementById("nachricht").style.borderColor = "red";
       document.getElementById("nachricht").style.backgroundColor = "white";
       fehlerNachricht = "Plichtfeld";
       zeigeFehlermeldung("fehler-nachricht", fehlerNachricht);  /* normalerweise sollte hier die Nachricht angezeigt werden, allerdings funktioniert es nicht. Ich weiß wirklich nicht, warum...*/
       return false;
       
    }
    else if (nachricht.trim().length < 20){
     document.getElementById("nachricht").style.Color = "red";
     document.getElementById("nachricht").style.borderColor = "red";
     document.getElementById("nachricht").style.backgroundColor = "white";
     fehlerNachricht = "mind. 20 Zeichen";
     zeigeFehlermeldung("fehler-nachricht", fehlerNachricht);
     return false;
    }
    else {
        document.getElementById("nachricht").style.borderColor = "#ADD8E6";
       document.getElementById("nachricht").style.backgroundColor = "white";
       zeigeFehlermeldung("fehler-nachricht", "");
       return true;
    }
}

/* erneute Gesamtüberprüfung beim Klick auf Senden */
function checkForm() {
   var Vornamecheck = checkVorname();
   var Nachnamecheck = checkNachname();
   var eMailcheck = checkeMail();
   var nachrichtcheck = checkNachricht();

   if (!Vornamecheck || !Nachnamecheck || !eMailcheck || !nachrichtcheck) {
      alert("Bitte füllen Sie alle Pflichtfelder korrekt aus.");
      const button = document.getElementById("button");
      button.classList.add("schuetteln");
      setTimeout(() => {
         button.classList.remove('schuetteln');
     }, 500);
      return false;
  }

  return true;
}

/* Speichern der Daten falls UX angekreuzt */
document.addEventListener("DOMContentLoaded", function() {

   document.getElementById("vorname").addEventListener("input", function() {
     checkVorname();
     if (document.getElementById("UX").checked) {
       Speichern();
     }
   });
   document.getElementById("nachname").addEventListener("input", function() {
     checkNachname();
     if (document.getElementById("UX").checked) {
       Speichern();
     }
   });
   document.getElementById("eMail").addEventListener("input", function() {
     checkeMail();
     if (document.getElementById("UX").checked) {
       Speichern();
     }
   });
   document.getElementById("nachricht").addEventListener("input", function() {
     checkNachricht();
     if (document.getElementById("UX").checked) {
       Speichern();
     }
   });
   document.getElementById("nummer").addEventListener("input", function() {
    checkNachricht();
    if (document.getElementById("UX").checked) {
      Speichern();
    }
  });
  document.getElementById("adresse").addEventListener("input", function() {
    checkNachricht();
    if (document.getElementById("UX").checked) {
      Speichern();
    }
  });
 
   /* Zeile 193-223 FremdCode von ChatGPT*/
   function Speichern() {
     localStorage.setItem("vorname", document.getElementById("vorname").value);
     localStorage.setItem("nachname", document.getElementById("nachname").value);
     localStorage.setItem("eMail", document.getElementById("eMail").value);
     localStorage.setItem("nachricht", document.getElementById("nachricht").value);
     localStorage.setItem("nummer", document.getElementById("nachricht").value);
     localStorage.setItem("adresse", document.getElementById("nachricht").value);
   }
 
   // Funktion zum Laden der Formulardaten aus dem Local Storage
   function Datenladen() {
     if (localStorage.getItem("vorname")) {
       document.getElementById("vorname").value = localStorage.getItem("vorname");
     }
     if (localStorage.getItem("nachname")) {
       document.getElementById("nachname").value = localStorage.getItem("nachname");
     }
     if (localStorage.getItem("eMail")) {
       document.getElementById("eMail").value = localStorage.getItem("eMail");
     }
     if (localStorage.getItem("nachricht")) {
       document.getElementById("nachricht").value = localStorage.getItem("nachricht");
     }
     if (localStorage.getItem("nummer")) {
      document.getElementById("nummer").value = localStorage.getItem("nummer");
    }
    if (localStorage.getItem("adresse")) {
      document.getElementById("adresse").value = localStorage.getItem("adresse");
    }
   }
 
   // Formulardaten laden
   Datenladen();

   /* Warnung beim Verlassen des Formulars */
   $(document).ready(function() {
    let verändert = false;
  
    $("#formular").on("change input", function() {
    verändert = true;
    });
  
    $(window).on("beforeunload", function(event){
    if (verändert)
      return "Möchten Sie fortfahren? Änderungen im Formular werden nicht gespeichert!"
    });


    $('a').on('click', function(event) {
      if (verändert) {
          event.preventDefault();
          let url = $(this).attr('href');
    $( "#Seitenwechsel" ).dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    dialogClass: "no-close",
    buttons:[
            {
            text: "Fortfahren",
            click: function() {
            $( this ).dialog( "close" );
            window.location.href = url;
            }
          },
        {
            text: "Abbrechen",
            click: function() {
            $(this).dialog("close");
        }
      }
    ]
    });
   };
  });
 });
});

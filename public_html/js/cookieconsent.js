window.onload = function () {

  /* Überprüfen ob Formular schonmal ausgefüllt wurde*/
    var technischNotwendig = localStorage.getItem("technisch");
    if (technischNotwendig === null || technischNotwendig === "false"){
       /* Dialogfenster öffnen */
        $( "#CookieConsent" ).dialog({
            modal: true,
            dialogClass: "no-close", /* Close Button verstecken */
            buttons: {
              "OK": function() {

                localStorage.setItem("technisch", "true");

                var userExperience = document.getElementById("UX").checked; /* Überprüfen ob UX angekreuzt ist */

                if (userExperience) {
                    localStorage.setItem("UX", "true"); 
              }
              $(this).dialog("close"); /* Dialogfenster schließen */
            }
        }
      });
    }
    else {
      console.log("Cookie-Consent bereits ausgefüllt");
    }
}
 

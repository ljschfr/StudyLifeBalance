/* Zugriff auf die Bilder und Punkte */
document.addEventListener('DOMContentLoaded', function () {
    var jetzigesBild = 0;
    const Bilder = document.getElementsByClassName("galerie-bild");
    const Punkte = document.getElementsByClassName("punkt")[0].getElementsByTagName('a');
    var Auto;
    var AutoStop;


    function Bilderwechsel(index) {
        for (var i = 0; i < 6; i++) {
            Bilder[i].classList.remove("active");
            Punkte[i].classList.remove("active");
        } {
        Bilder[index].classList.add("active");
        Punkte[index].classList.add("active");
        jetzigesBild = index; }
    }

    /*Ein Bild nach vorne*/
    function vor() {
        if (jetzigesBild < 6 - 1) {
            Bilderwechsel(jetzigesBild + 1);
        } 
    }
    
    /* Ein Bild nach hinten*/
    function zurueck() {
        if (jetzigesBild > 0) {
            Bilderwechsel(jetzigesBild - 1);
        } 
    }

    function Wechsel(index) {
        if (index >= 0 && index < 6) { /* Index muss zwischen 0 und kleiner 6 liegen, damit es wechselt*/
            Bilderwechsel(index);
        }
    }

    function startAuto() {
        Auto = setInterval(() => {vor();}, 2000); /* nach 2 Sekunden wechselt es auf das nächste Bild*/
    }

    function stopAuto() {
        clearInterval(Auto); /* Automatikbetrieb wird gestoppt */
    }

    function resetAuto() {
        clearTimeout(AutoStop);         /* Automatikbetrieb wird wieder aufgenommen */
        AutoStop = setTimeout(startAuto, 2000);
    }

    document.getElementsByClassName("vor")[0].addEventListener("click", function () {
        stopAuto();
        vor();               /* Wenn man auf vor klickt, stoppt der automatikbetrieb, die vor-funktion startet und sobald man das Bild mit der Maus  verlässt, beginnt die Funktion resetAuto */
        resetAuto();           
    });

    document.getElementsByClassName("zurück")[0].addEventListener("click", function () {
        stopAuto();
        zurueck();           /* Wenn man auf zurück klickt, stoppt der automatikbetrieb, die zurück-funktion startet und sobald man das Bild mit der Maus verlässt, beginnt die Funktion resetAuto */
        resetAuto();                     
    });

    for (var i = 0; i < 6; i++) {
        Bilder[i].addEventListener("mouseenter", stopAuto);      /* Event Listener mouseenter und mouseleave für die Bilder */
        Bilder[i].addEventListener("mouseleave", resetAuto);
    }

    for (var i = 0; i < 6; i++) {
        Punkte[i].addEventListener("click", function (event) {
            stopAuto();

           const index = Array.prototype.indexOf.call(Punkte, event.target); 
           Wechsel(index);
           resetAuto();
        });
    }

    startAuto(); 
});
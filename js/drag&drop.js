

document.addEventListener('DOMContentLoaded', function () {
const dragArea = document.getElementById("drag-area");
const upload = document.querySelector(".upload");
let Bildupload;
let klick = document.getElementById("input");

/* Bild wird angezeigt, wenn man normal im explorer sucht */
klick.addEventListener("change", function() {
    Bildupload = this.files[0];
    upload.classList.add("active");
    BildAnzeigen();
    })

dragArea.addEventListener('dragover', (event) => {
event.preventDefault();
upload.classList.add("active");
}) 

dragArea.addEventListener('dragleave', ()=>{
    upload.classList.remove("active");
})

/* Bild wird auch angezeigt, wenn man es droppt */
dragArea.addEventListener('drop', (event)=> {
    event.preventDefault();
    Bildupload = event.dataTransfer.files[0];
    BildAnzeigen();
    } 
)

/* Bild in Drag-Area anzeigen */
 function BildAnzeigen () {
    let Auslesen = new FileReader();

    Auslesen.onload = () => {
        let BildURL = Auslesen.result;
        let BildTag = `<img src="${BildURL}" alt="">`;
        dragArea.innerHTML = BildTag;
    };
    Auslesen.readAsDataURL(Bildupload);
}
});

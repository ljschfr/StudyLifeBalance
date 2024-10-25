const TagesBlog = {
    0: 0, /* Sonntag */
    1: 1, 
    2: 2, 
    3: 3, 
    4: 4, /* Da es 7 Tage gibt, ich aber nur 6 Beiträge habe, wird Do und Fr der selbe Blogbeitrag angezeigt */
    5: 4,  
    6: 5  /* Samstag */
    }
    
     function Wochentag() {
     const heute = new Date();
     return heute.getDay(); 
   }

   /*Index basierend auf dem Wochentag*/
   const index = TagesBlog[Wochentag()];

  /*Nur Postoftheday anzeigen*/
   document.addEventListener("DOMContentLoaded", () => {
    const blogBeitrag = document.querySelectorAll(".blog-box");
    blogBeitrag.forEach((post, i) => {
    if (i === index) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
    });
  });
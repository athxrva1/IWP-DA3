let square = document.getElementById('square');

let cancel= document.getElementById('cancelanimation');



cancel.addEventListener('click', function(ev) {
  square.style.animationName="test";
  
});


square.addEventListener('animationstart', (ev) => {
   console.log("Animation Startted", ev);
});

square.addEventListener('animationiteration', (ev) => {
  console.log("animation_iteration", ev);
});

square.addEventListener('animationend', (ev) => {
   console.log("animation end", ev);
});

square.addEventListener('animationcancel', (ev) => {
    console.log("Animation canceled" , ev); 
});

const article = document.querySelector("#content");
 const button = document.querySelector("#read-more");

button.addEventListener("click", readMore);

function readMore() {
     if (article.className == "open") {
       // Read less
     article.className = "";
     button.innerHTML = "Show more";
   } else {
     article.className = "open";
     button.innerHTML = "Show less";
   }
}


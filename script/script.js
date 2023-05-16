// Object met toetsen en afbeeldingen
var toetsAfbeeldingen = {
  'a': 'images/afbeelding_a.png',
  'b': 'images/afbeelding_b.png',
  'c': 'images/afbeelding_c.png',
  'd': 'images/afbeelding_d.png',
  'e': 'images/afbeelding_e.png',
  'f': 'images/afbeelding_f.png',
  'g': 'images/afbeelding_g.png',
  'h': 'images/afbeelding_h.png',
  'i': 'images/afbeelding_i.png',
  'j': 'images/afbeelding_j.png',
  'k': 'images/afbeelding_k.png',
  'l': 'images/afbeelding_l.png',
  'm': 'images/afbeelding_m.png',
  'n': 'images/afbeelding_n.png',
  'o': 'images/afbeelding_o.png',
  'p': 'images/afbeelding_p.png',
  'q': 'images/afbeelding_q.png',
  'r': 'images/afbeelding_r.png',
  's': 'images/afbeelding_s.png',
  't': 'images/afbeelding_t.png',
  'u': 'images/afbeelding_u.png',
  'v': 'images/afbeelding_v.png',
  'w': 'images/afbeelding_w.png',
  'x': 'images/afbeelding_x.png',
  'y': 'images/afbeelding_y.png',
  'z': 'images/afbeelding_z.png',
  '0': 'images/afbeelding_0.png',
  '1': 'images/afbeelding_1.png',
  '2': 'images/afbeelding_2.png',
  '3': 'images/afbeelding_3.png',
  '4': 'images/afbeelding_4.png',
  '5': 'images/afbeelding_5.png',
  '6': 'images/afbeelding_6.png',
  '7': 'images/afbeelding_7.png',
  '8': 'images/afbeelding_8.png',
  '9': 'images/afbeelding_9.png',
  // Voeg hier meer toetsen en hun respectievelijke afbeeldingen toe
};

// Functie om afbeelding te wijzigen en een random positie te geven
function wijzigAfbeelding(toets) {
  var afbeeldingElement = document.getElementById('afbeelding');

  if (toets in toetsAfbeeldingen) {
    var afbeelding = toetsAfbeeldingen[toets];
    afbeeldingElement.src = afbeelding;

    // Willekeurige positie genereren
    var positieX = Math.floor(Math.random() * (window.innerWidth - afbeeldingElement.offsetWidth));
    var positieY = Math.floor(Math.random() * (window.innerHeight - afbeeldingElement.offsetHeight));

    // Positie toepassen op de afbeelding
    afbeeldingElement.style.left = positieX + 'px';
    afbeeldingElement.style.top = positieY + 'px';
  }
}

// Event listener voor toetsaanslagen
document.addEventListener('keydown', function(event) {
  var toets = event.key.toLowerCase();
  wijzigAfbeelding(toets);
});



// random position, sound, fade out, same size



document.addEventListener("DOMContentLoaded", function() {
  var counterElement = document.getElementById("loading-counter");
  var counter = 0;
  var loadingScreen = document.getElementById("loading-screen");
  var loadingScreenHeight = loadingScreen.offsetHeight;

  function updateCounter() {
    counterElement.textContent = counter;

    if (counter === 36) {
      // Verberg het laadscherm wanneer de teller 36 bereikt
      setTimeout(function() {
        var animationEndHeight = -loadingScreenHeight + "px";
        loadingScreen.style.transform = "translateY(" + animationEndHeight + ")";
        setTimeout(function() {
          loadingScreen.style.display = "none";
        }, 2000);
      }, 1000);
    } else {
      counter++;
      setTimeout(updateCounter, 60); // Verhoog de teller elke 100 milliseconden
    }
  }

  updateCounter();
});
var toetsAfbeeldingen = {
  'a': 'images/afbeelding_a.png',
  'b': 'images/afbeelding_b.png',
  'c': 'images/afbeelding_c.png',
  'd': 'images/afbeelding_d.gif',
  'e': 'images/afbeelding_e.png',
  'f': 'images/afbeelding_f.png',
  'g': 'images/afbeelding_g.png',
  'h': 'images/afbeelding_h.gif',
  'i': 'images/afbeelding_i.png',
  'j': 'images/afbeelding_j.png',
  'k': 'images/afbeelding_k.png',
  'l': 'images/afbeelding_l.png',
  'm': 'images/afbeelding_m.gif',
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
};

// Functie om afbeelding te wijzigen en een willekeurige positie te geven
function wijzigAfbeelding(toets) {
  var afbeeldingElement = document.getElementById('afbeelding');
  var howtoElement = document.getElementById('howto');

  if (toets in toetsAfbeeldingen) {
    var afbeelding = toetsAfbeeldingen[toets];
    afbeeldingElement.src = afbeelding;

    // Willekeurige positie genereren
    var positieX = Math.floor(Math.random() * (window.innerWidth - afbeeldingElement.offsetWidth));
    var positieY = Math.floor(Math.random() * (window.innerHeight - afbeeldingElement.offsetHeight));

    // Positie toepassen op de afbeelding
    afbeeldingElement.style.left = positieX + 'px';
    afbeeldingElement.style.top = positieY + 'px';

    afbeeldingElement.style.display = 'block';
    howtoElement.style.display = 'none';
  }
}

// Event listener voor toetsaanslagen
document.addEventListener('keydown', function(event) {
  var toets = event.key.toLowerCase();
  wijzigAfbeelding(toets);
});


// OPTELLEN van 0 naar 36
document.addEventListener("DOMContentLoaded", function() {
  var counterElement = document.getElementById("loading-counter");
  var counter = 0;
  var loadingScreen = document.getElementById("loading-screen");
  var loadingScreenHeight = loadingScreen.offsetHeight;
  var animationDuration = 3000; // Duur van de animatie in milliseconden
  var startTime = null;

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var easeProgress = easeInOut(progress, 0, 36, animationDuration); // Pas de getalbereiken en animatieduur aan indien nodig

    counterElement.textContent = Math.round(easeProgress);

    if (progress < animationDuration) {
      requestAnimationFrame(updateCounter);
    } else {
      // Verberg het laadscherm wanneer de animatie is voltooid
      setTimeout(function() {
        var animationEndHeight = -loadingScreenHeight + "px";
        loadingScreen.style.transform = "translateY(" + animationEndHeight + ")";
        setTimeout(function() {
          loadingScreen.style.display = "none";
        }, 2000);
      }, 1000);
    }
  }

  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }

  requestAnimationFrame(updateCounter);
});




// BROWSER SIZES
    // Functie om de breedte en hoogte van de browser weer te geven
    function toonBrowserAfmetingen() {
      var breedte = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var hoogte = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      document.getElementById("browser-breedte").textContent = breedte;
      document.getElementById("browser-hoogte").textContent = hoogte;
    }

    // Roep de functie aan wanneer de pagina laadt
    window.onload = function() {
      toonBrowserAfmetingen();
    };

    // Roep de functie aan wanneer het venster van grootte verandert
    window.onresize = function() {
      toonBrowserAfmetingen();
    };




    // CLICKED LETTERS
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var letters = document.getElementsByClassName("letter");

document.addEventListener("keydown", function(event) {
  var key = event.key.toUpperCase();

  if (alphabet.includes(key)) {
    var letterElement = document.getElementById(key);

    if (letterElement) {
      letterElement.classList.add("clicked");
    }
  }
});

for (var i = 0; i < letters.length; i++) {
  letters[i].id = letters[i].textContent;
}





// ARISTS NAMES
var resultElement = document.getElementById("result");

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "A" || key === "F" || key === "I" || key === "J" || key === "S" || key === "T" || key === "0" || key === "2"|| key === "6") {
        resultElement.textContent = "by Stef Paul";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "B" || key === "H" || key === "O" || key === "Y" || key === "3" || key === "7" || key === "9") {
        resultElement.textContent = "by Mark Vogelaar";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "C" || key === "L" || key === "N" || key === "U" || key === "1") {
        resultElement.textContent = "by Robert Buurman";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "D" || key === "P" || key === "V" || key === "Z" || key === "5") {
        resultElement.textContent = "by Appie";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "E" || key === "G" || key === "Q" || key === "W") {
        resultElement.textContent = "by Mark van der Veen";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "K") {
        resultElement.textContent = "by Emil";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "M") {
        resultElement.textContent = "by Marleen van den Brand";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "R") {
        resultElement.textContent = "by Femke van Zeventer";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "X") {
        resultElement.textContent = "by Madelein Nienkemper";
      }
    });

    document.addEventListener("keydown", function(event) {
      var key = event.key.toUpperCase();

      if (key === "4" || key === "8") {
        resultElement.textContent = "by Miriam Jimenez Lluva";
      }
    });
/* -------------------------------------------------------------------------- */
/*                                  variables                                 */
/* -------------------------------------------------------------------------- */
var darkMode = true;
/* -------------------------------- metronome ------------------------------- */
var bpmDisplay = document.querySelector(".text-metronome-bpm");
var bpmRange = document.querySelector("#range-metronome-bpm");
var textButtonMetronome = document.querySelector("#text-button-metronome");
var currentTempo = 120;
const metronome = new Metronome(currentTempo);
var soundToggle = false;
var metronomeFrequency = 950;
/* ------------------------------ music content ----------------------------- */
var tonalCenterSelect = document.querySelector('#select-tonal-center');
var modeSelect = document.querySelector('#select-mode');
var textScaleTitle = document.querySelector(".text-scale-title");
var optionSwitch1 = true;
var optionSwitch2 = true;
var tonalCenter = 0;
var mode = 0;
// 🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀
const musicSrc = [
  ["./assets/dark-c-ionian-treble-1.png", "./assets/dark-c-ionian-bass-1.png", "./assets/light-c-ionian-treble-1.png", "./assets/light-c-ionian-bass-1.png", 
  "./assets/dark-c-aeolian-treble-1.png", "./assets/dark-c-aeolian-bass-1.png", "./assets/light-c-aeolian-treble-1.png", "./assets/light-c-aeolian-bass-1.png",
  "./assets/dark-c-lydian-treble-1.png", "./assets/dark-c-lydian-bass-1.png", "./assets/light-c-lydian-treble-1.png", "./assets/light-c-lydian-bass-1.png"],
  ["./assets/dark-cs-ionian-treble-1.png", "./assets/dark-cs-ionian-bass-1.png", "./assets/light-cs-ionian-treble-1.png", "./assets/light-cs-ionian-bass-1.png", 
  "./assets/dark-cs-aeolian-treble-1.png", "./assets/dark-cs-aeolian-bass-1.png", "./assets/light-cs-aeolian-treble-1.png", "./assets/light-cs-aeolian-bass-1.png",
  "./assets/dark-cs-lydian-treble-1.png", "./assets/dark-cs-lydian-bass-1.png", "./assets/light-cs-lydian-treble-1.png", "./assets/light-cs-lydian-bass-1.png"],
  ["./assets/dark-d-ionian-treble-1.png", "./assets/dark-d-ionian-bass-1.png", "./assets/light-d-ionian-treble-1.png", "./assets/light-d-ionian-bass-1.png", 
  "./assets/dark-d-aeolian-treble-1.png", "./assets/dark-d-aeolian-bass-1.png", "./assets/light-d-aeolian-treble-1.png", "./assets/light-d-aeolian-bass-1.png",
  "./assets/dark-d-lydian-treble-1.png", "./assets/dark-d-lydian-bass-1.png", "./assets/light-d-lydian-treble-1.png", "./assets/light-d-lydian-bass-1.png"],
  ["./assets/dark-ef-ionian-treble-1.png", "./assets/dark-ef-ionian-bass-1.png", "./assets/light-ef-ionian-treble-1.png", "./assets/light-ef-ionian-bass-1.png", 
  "./assets/dark-ef-aeolian-treble-1.png", "./assets/dark-ef-aeolian-bass-1.png", "./assets/light-ef-aeolian-treble-1.png", "./assets/light-ef-aeolian-bass-1.png",
  "./assets/dark-ef-lydian-treble-1.png", "./assets/dark-ef-lydian-bass-1.png", "./assets/light-ef-lydian-treble-1.png", "./assets/light-ef-lydian-bass-1.png"],
  ["./assets/dark-e-ionian-treble-1.png", "./assets/dark-e-ionian-bass-1.png", "./assets/light-e-ionian-treble-1.png", "./assets/light-e-ionian-bass-1.png", 
  "./assets/dark-e-aeolian-treble-1.png", "./assets/dark-e-aeolian-bass-1.png", "./assets/light-e-aeolian-treble-1.png", "./assets/light-e-aeolian-bass-1.png",
  "./assets/dark-e-lydian-treble-1.png", "./assets/dark-e-lydian-bass-1.png", "./assets/light-e-lydian-treble-1.png", "./assets/light-e-lydian-bass-1.png"],
  ["./assets/dark-f-ionian-treble-1.png", "./assets/dark-f-ionian-bass-1.png", "./assets/light-f-ionian-treble-1.png", "./assets/light-f-ionian-bass-1.png", 
  "./assets/dark-f-aeolian-treble-1.png", "./assets/dark-f-aeolian-bass-1.png", "./assets/light-f-aeolian-treble-1.png", "./assets/light-f-aeolian-bass-1.png",
  "./assets/dark-f-lydian-treble-1.png", "./assets/dark-f-lydian-bass-1.png", "./assets/light-f-lydian-treble-1.png", "./assets/light-f-lydian-bass-1.png"],
  ["./assets/dark-fs-ionian-treble-1.png", "./assets/dark-fs-ionian-bass-1.png", "./assets/light-fs-ionian-treble-1.png", "./assets/light-fs-ionian-bass-1.png", 
  "./assets/dark-fs-aeolian-treble-1.png", "./assets/dark-fs-aeolian-bass-1.png", "./assets/light-fs-aeolian-treble-1.png", "./assets/light-fs-aeolian-bass-1.png",
  "./assets/dark-gf-lydian-treble-1.png", "./assets/dark-gf-lydian-bass-1.png", "./assets/light-gf-lydian-treble-1.png", "./assets/light-gf-lydian-bass-1.png"],
  ["./assets/dark-g-ionian-treble-1.png", "./assets/dark-g-ionian-bass-1.png", "./assets/light-g-ionian-treble-1.png", "./assets/light-g-ionian-bass-1.png", 
  "./assets/dark-g-aeolian-treble-1.png", "./assets/dark-g-aeolian-bass-1.png", "./assets/light-g-aeolian-treble-1.png", "./assets/light-g-aeolian-bass-1.png",
  "./assets/dark-g-lydian-treble-1.png", "./assets/dark-g-lydian-bass-1.png", "./assets/light-g-lydian-treble-1.png", "./assets/light-g-lydian-bass-1.png"],
  ["./assets/dark-af-ionian-treble-1.png", "./assets/dark-af-ionian-bass-1.png", "./assets/light-af-ionian-treble-1.png", "./assets/light-af-ionian-bass-1.png", 
  "./assets/dark-gs-aeolian-treble-1.png", "./assets/dark-gs-aeolian-bass-1.png", "./assets/light-gs-aeolian-treble-1.png", "./assets/light-gs-aeolian-bass-1.png",
  "./assets/dark-af-lydian-treble-1.png", "./assets/dark-af-lydian-bass-1.png", "./assets/light-af-lydian-treble-1.png", "./assets/light-af-lydian-bass-1.png"],
  ["./assets/dark-a-ionian-treble-1.png", "./assets/dark-a-ionian-bass-1.png", "./assets/light-a-ionian-treble-1.png", "./assets/light-a-ionian-bass-1.png", 
  "./assets/dark-a-aeolian-treble-1.png", "./assets/dark-a-aeolian-bass-1.png", "./assets/light-a-aeolian-treble-1.png", "./assets/light-a-aeolian-bass-1.png",
  "./assets/dark-a-lydian-treble-1.png", "./assets/dark-a-lydian-bass-1.png", "./assets/light-a-lydian-treble-1.png", "./assets/light-a-lydian-bass-1.png"],
  ["./assets/dark-bf-ionian-treble-1.png", "./assets/dark-bf-ionian-bass-1.png", "./assets/light-bf-ionian-treble-1.png", "./assets/light-bf-ionian-bass-1.png",  
  "./assets/dark-bf-aeolian-treble-1.png", "./assets/dark-bf-aeolian-bass-1.png", "./assets/light-bf-aeolian-treble-1.png", "./assets/light-bf-aeolian-bass-1.png",
  "./assets/dark-bf-lydian-treble-1.png", "./assets/dark-bf-lydian-bass-1.png", "./assets/light-bf-lydian-treble-1.png", "./assets/light-bf-lydian-bass-1.png"],
  ["./assets/dark-b-ionian-treble-1.png", "./assets/dark-b-ionian-bass-1.png", "./assets/light-b-ionian-treble-1.png", "./assets/light-b-ionian-bass-1.png", 
  "./assets/dark-b-aeolian-treble-1.png", "./assets/dark-b-aeolian-bass-1.png", "./assets/light-b-aeolian-treble-1.png", "./assets/light-b-aeolian-bass-1.png",
  "./assets/dark-b-lydian-treble-1.png", "./assets/dark-b-lydian-bass-1.png", "./assets/light-b-lydian-treble-1.png", "./assets/light-b-lydian-bass-1.png"],
];
// 🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀
// display title for each image 
const musicTitle = [
  ["C ionian (major)", "C# ionian (major)", "D ionian (major)","Eb ionian (major)",
  "E ionian (major)","F ionian (major)","F# ionian (major)","G ionian (major)",
  "Ab ionian (major)","A ionian (major)","Bb ionian (major)","B ionian (major)"],
  ["C aeolian (natural minor)", "C# aeolian (natural minor)", "D aeolian (natural minor)","Eb aeolian (natural minor)",
  "E aeolian (natural minor)","F aeolian (natural minor)","F# aeolian (natural minor)","G aeolian (natural minor)",
  "G# aeolian (natural minor)","A aeolian (natural minor)","Bb aeolian (natural minor)","B aeolian (natural minor)"],
  ["C lydian", "C# lydian", "D lydian", "Eb lydian", 
  "E lydian", "F lydian", "Gb lydian", "G lydian", 
  "Ab lydian", "A lydian", "Bb lydian", "B lydian",]
];

/* -------------------------------------------------------------------------- */
/*                               hover functions                              */
/* -------------------------------------------------------------------------- */
$(".button-tempo").hover(
  function() {
  $(this).addClass("mouseover-button-tempo");
},
function() {
  $(this).removeClass("mouseover-button-tempo");
});

$("li").hover(
  function () {
    $(this).addClass("mouseover-text");
  },
  function () {
    $(this).removeClass("mouseover-text");
  });

$(".button").hover(function (){
    $(this).addClass("mouseover-button");
},
function () {
    $(this).removeClass("mouseover-button");
});

/* -------------------------------------------------------------------------- */
/*                              dark mode button                              */
/* -------------------------------------------------------------------------- */
$("#button-dark-mode").click(function (){
  $("body").toggleClass("body-light");
  $(".button").toggleClass("button-light");
  $("select").toggleClass("select-light");
  $("input[type=checkbox]").toggleClass("checkbox-light");
  $(".container-nav-bar").toggleClass("container-nav-bar-light");
  $(".button-tempo").toggleClass("button-tempo-light");
  $(".music-content").attr("");
  $(".text-scale-title").toggleClass("text-scale-title-light");

  if (darkMode) {
  $(".logo").attr("src", "assets/etude-logo-light.png");
  $("#img-theme-swap").attr("src", "./assets/dark-mode-icon.png");
  $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode+2]}`);
  $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+3]}`);
  darkMode = false;
}
  else {
    $(".logo").attr("src", "assets/etude-logo-dark.png");
    $("#img-theme-swap").attr("src", "./assets/light-mode-icon.png");
    $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode]}`);
    $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+1]}`);
    darkMode = true;
  }
});

/* -------------------------------------------------------------------------- */
/*                                  metronome                                 */
/* -------------------------------------------------------------------------- */

function bpmText(element) {
    bpmDisplay.innerText = `${element.value} bpm`;
    currentTempo = element.value;
}

$("#button-tempo-minus").click(function() {
    bpmRange.value--;
    currentTempo--;
    bpmDisplay.innerText = `${bpmRange.value} bpm`;
});

$("#button-tempo-plus").click(function() {
    bpmRange.value++;
    currentTempo++;
    bpmDisplay.innerText = `${bpmRange.value} bpm`;
});

$("#button-metronome").click(function(element) {
    metronome.startStop();
    $(this).toggleClass("button-metronome-on");
    
    if (metronome.isRunning) {
      textButtonMetronome.innerText = "on";
    }
    else {
      textButtonMetronome.innerText = "off";
    }
})

$("#range-metronome-bpm").dblclick(function(element) {
    bpmRange.value = 120;
    currentTempo = 120;
    bpmDisplay.innerText = `${bpmRange.value} bpm`;
    console.log("metronome reset")
})

$("#button-sound-change").click(function() {
  if (soundToggle == false) {
    $("#img-metronome-icon").attr("src", "./assets/icon-metronome-r.png");
    metronomeFrequency = 2000;
    soundToggle = true;
    console.log(metronomeFrequency);
  } 
  else {
    $("#img-metronome-icon").attr("src", "./assets/icon-metronome-l.png");
    metronomeFrequency = 950;
    soundToggle = false;
    console.log(metronomeFrequency);
  }
})
/* -------------------------------------------------------------------------- */
/*                           music content swapping                           */
/* -------------------------------------------------------------------------- */

/* ------------------------ showing/displaying scales ----------------------- */
$("#checkbox-treble-clef").change(function() {
  $(".music-content-treble").toggleClass("display-none");
  if (optionSwitch1 == true && optionSwitch2 == false) {
    console.log ("1A", optionSwitch1, optionSwitch2) 
    optionSwitch1 = false
    textScaleTitle.classList.add("display-none");
  }
  else if (optionSwitch1 == true) {
    console.log ("1B", optionSwitch1, optionSwitch2) 
    optionSwitch1 = false;
  }
  else if (optionSwitch2 == false && optionSwitch1 == false) {
    console.log ("1C", optionSwitch1, optionSwitch2) 
    optionSwitch1 = true;
    textScaleTitle.classList.remove("display-none");
  }
  else {
    console.log ("D", optionSwitch1, optionSwitch2) 
    optionSwitch1 = true;
    textScaleTitle.classList.remove("display-none");
  }
  });

$("#checkbox-bass-clef").change(function() {
  $(".music-content-bass").toggleClass("display-none");
  if (optionSwitch2 == true && optionSwitch1 == false) {
    console.log ("2A", optionSwitch1, optionSwitch2) 
    optionSwitch2 = false
    textScaleTitle.classList.add("display-none");
  }
  else if (optionSwitch2 == true) {
    console.log ("2B", optionSwitch1, optionSwitch2) 
    optionSwitch2 = false;
  }
  else if (optionSwitch2 == false && optionSwitch1 == false) {
    console.log ("2C", optionSwitch1, optionSwitch2) 
    optionSwitch2 = true;
    textScaleTitle.classList.remove("display-none");
  }
  else {
    console.log ("2D", optionSwitch1, optionSwitch2) 
    optionSwitch2 = true;
    textScaleTitle.classList.remove("display-none");
  }
});

/* -------------------------- changing tonal center ------------------------- */
$("#select-tonal-center").change(function () {
  switch ($(this).val()) {
    case ('c'): {
      tonalCenter = 0;
      break;
    }
    case ('c#'): {
      tonalCenter = 1;
      break;
    }
    case ('d'): {
      tonalCenter = 2;
      break;
    }
    case ('d#'): {
      tonalCenter = 3;
      break;
    }
    case ('e'): {
      tonalCenter = 4;
      break;
    }
    case ('f'): {
      tonalCenter = 5;
      break;
    }
    case ('f#'): {
      tonalCenter = 6;
      break;
    }
    case ('g'): {
      tonalCenter = 7;
      break;
    }
    case ('g#'): {
      tonalCenter = 8;
      break;
    }
    case ('a'): {
      tonalCenter = 9;
      break;
    }
    case ('a#'): {
      tonalCenter = 10;
      break;
    }
    case ('b'): {
      tonalCenter = 11;
      break;
    }
    default: {
      console.log("default")
      break;
    }
  }
  mode /= 4; // must reduce mode for correct index in musicTitle
  textScaleTitle.innerText = musicTitle[mode][tonalCenter];
  mode *=4; // in musicSrc arrays, the corresponding mode changes every 4th index
  if (darkMode) {
    $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode]}`);
    $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+1]}`);
  }
  else {
    $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode+2]}`);
    $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+3]}`);
  }
});

/* ------------------------------ changing mode ----------------------------- */
$("#select-mode").change(function () {
  switch ($(this).val()) {
    case ('ionian'): {
      mode = 0;
      break;
    }
    case ('aeolian'): {
      mode = 1;
      break;
    }
    case ('lydian'): {
      mode = 2;
      break;
    }
    default: break;
  }
  textScaleTitle.innerText = musicTitle[mode][tonalCenter];
  mode *=4; // in musicSrc arrays, the corresponding mode changes every 4th index
    if (darkMode) {
      $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode]}`);
      $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+1]}`);
    }
    else {
      $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode+2]}`);
      $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+3]}`);
    }
});

$("#button-random").click(function () {
  tonalCenter = Math.round(Math.random()*11);
  mode = (Math.round(Math.random()*2))
  // change all display text to match new tonal center and mode 
  tonalCenterSelect.selectedIndex = tonalCenter;
  modeSelect.selectedIndex = mode;
  textScaleTitle.innerText = musicTitle[mode][tonalCenter];

  mode *= 4;  // in musicSrc arrays, the corresponding mode changes every 4th index
  if (darkMode) {
    $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode]}`);
    $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+1]}`);
  }
  else {
    $(".music-content-treble").attr("src", `${musicSrc[tonalCenter][mode+2]}`);
    $(".music-content-bass").attr("src", `${musicSrc[tonalCenter][mode+3]}`);
  }
})

/* -------------------------------------------------------------------------- */
/*                              coming soon alert                             */
/* -------------------------------------------------------------------------- */

$(".coming-soon").click(function () {
  alert("Coming soon!");
})
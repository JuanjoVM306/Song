var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "...", time: -1 },
  { text: "I wanna be your vacuum cleaner", time: 17.0 },
  { text: "Breathing in your dust", time: 21.5 },
  { text: "I wanna be your Ford Cortina", time: 24.5 },
  { text: "I will never rust", time: 28.0 },
  { text: "If you like your coffee hot", time: 32.0 },
  { text: "Let me be your coffee pot", time: 35.8 },
  { text: "You call the shots, babe", time: 39.5 },
  { text: "I just wanna be yours", time: 42.0 },
  { text: "Secrets I have held in my heart", time: 46.0 },
  { text: "Are harder to hide than I thought", time: 49.5 },
  { text: "Maybe I just wanna be yours", time: 53.0 },
  { text: "I wanna be yours, I wanna be yours", time: 56.0 },
  { text: "Wanna be yours", time: 62.0 },
  { text: "Wanna be yours", time: 65.0 },
  { text: "Wanna be yours", time: 69.5 },
  { text: "Let me be your 'leccy meter", time: 74.0 },
  { text: "And I'll never run out", time: 78.5 },
  { text: "Let me be the portable heater", time: 80.5 },
  { text: "That you'll get cold without", time: 85.0 },
  { text: "I wanna be your setting lotion (wanna be)", time: 88.5 },
  { text: "Hold your hair in deep devotion (how deep?)", time: 92.5 },
  { text: "At least as deep as the Pacific Ocean", time: 96.0 },
  { text: "I wanna be yours", time: 99.0 },
  { text: "Secrets I have held in my heart", time: 103.0 },
  { text: "Are harder to hide than I thought", time: 106.5 },
  { text: "Maybe I just wanna be yours", time: 110.0 },
  { text: "I wanna be yours, I wanna be yours", time: 112.5 },
  { text: "Wanna be yours, wanna be yours", time: 118.0 },
  { text: "Wanna be yours, wanna be yours", time: 122.0 },
  { text: "Wanna be yours, wanna be yours", time: 126.0 },
  { text: "Wanna be yours, wanna be yours", time: 129.0 },
  { text: "Wanna be yours, wanna be yours", time: 133.0 },
  { text: "Wanna be yours, wanna be yours", time: 136.5 },
  { text: "Wanna be yours, wanna be yours", time: 140.0 },
  { text: "(Wanna be yours, wanna be yours)", time: 144.0 },
  { text: "I wanna be your vacuum cleaner (wanna be yours)", time: 145.5 },
  { text: "Breathing in your dust (wanna be yours)", time: 149.5 },
  { text: "I wanna be your Ford Cortina (wanna be yours)", time: 153.0 },
  { text: "I will never rust (wanna be yours)", time: 156.0 },
  { text: "I just wanna be yours (wanna be yours)", time: 160.0 },
  { text: "I just wanna be yours (wanna be yours)", time: 162.5 },
  { text: "I just wanna be yours (wanna be yours)", time: 166.5 },
  { text: "...", time: 171.0 }
];

function updateLyrics() {
  if (!audio) return;
  
  var currentTime = audio.currentTime;

  var currentLine = null;
  for (var i = 0; i < lyricsData.length; i++) {
    var nextTime = lyricsData[i + 1] ? lyricsData[i + 1].time : Infinity;
    if (currentTime >= lyricsData[i].time && currentTime < nextTime) {
      currentLine = lyricsData[i];
      break;
    }
  }

  if (currentLine && currentLine.text !== "...") {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

if (audio) {
  audio.addEventListener("timeupdate", updateLyrics);
}

function ocultartitulo() {
  var title = document.querySelector(".titulo");
  if (title) {
    title.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      title.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultartitulo, 216000);
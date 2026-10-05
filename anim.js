var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "I wanna be your slave, I wanna be your master", time: -1 },
  { text: "I wanna make your heartbeat run like rollercoasters", time: 3 },
  { text: "I wanna be a good boy, I wanna be a gangster", time: 6.5 },
  { text: "'Cause you could be the beauty and I could be the monster", time: 10 },
  { text: "I love you since this morning, not just for aesthetic", time: 13.5 },
  { text: "I wanna touch your body, so fucking electric", time: 17 },
  { text: "I know you're scared of me, you say that I'm too eccentric", time: 21 },
  { text: "I'm crying all my tears and that's fucking pathetic", time: 24 },
  { text: "I wanna make you hungry, then I wanna feed ya", time: 28 },
  { text: "I wanna paint your face like you're my Mona Lisa", time: 32 },
  { text: "I wanna be a champion, I wanna be a loser", time: 35.5 },
  { text: "I'll even be a clown 'cause I just wanna amuse ya", time: 39 },
  { text: "I wanna be your sex toy, I wanna be your teacher", time: 42.5 },
  { text: "I wanna be your sinner, I wanna be your preacher", time: 46 },
  { text: "I wanna make you love me, then I wanna leave ya", time: 50 },
  { text: "'Cause, baby, I'm your David and you're my Goliath", time: 53 },
  { text: "Uh-huh", time: 57 },
  { text: "Mhm, uh-huh", time: 60 },
  { text: "Because I'm the devil who's searching for redemption", time: 64 },
  { text: "And I'm a lawyer who's searching for redemption", time: 68 },
  { text: "And I'm a killer who's searching for redemption", time: 71 },
  { text: "A motherfucking monster who's searching for redemption", time: 74.5 },
  { text: "And I'm a bad guy who's searching for redemption", time: 79 },
  { text: "And I'm a blonde girl who's searching for redemption", time: 82 },
  { text: "And I'm a freak that is searching for redemption", time: 86 },
  { text: "A motherfucking monster who's searching for redemption", time: 89 },
  { text: "I wanna be your slave, I wanna be your master", time: 107 },
  { text: "I wanna make your heartbeat run like rollercoasters", time: 111 },
  { text: "I wanna be a good boy, I wanna be a gangster", time: 115 },
  { text: "'Cause you can be the beauty and I could be the monster", time: 118 },
  { text: "I wanna make you quiet, I wanna make you nervous", time: 122 },
  { text: "I wanna set you free but I'm too fucking jealous", time: 125 },
  { text: "I wanna pull your strings like you're my Telecaster", time: 129 },
  { text: "And if you want to use me, I could be your puppet", time: 133 },
  { text: "'Cause I'm the devil who's searching for redemption", time: 136.5 },
  { text: "And I'm a lawyer who's searching for redemption", time: 140 },
  { text: "And I'm a killer who's searching for redemption", time: 144 },
  { text: "A motherfucking monster who's searching for redemption", time: 148 },
  { text: "I wanna be your slave, I wanna be your master", time: 185 }
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4

  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 50);

function ocultartitulo() {
    var title = document.querySelector("#title");
    title.style.animation = 
        "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
        title.style.display = "none";
    }, 3000);
}

setTimeout(ocultartitulo, 216000);
var currentSong = document.getElementById("spotify-song");
var currentSongCover = document.getElementById("spotify-img");

async function updateLastFMResponse() {
  var recentTracks =
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=gigachadgavesha&api_key=dba1b69e42e4a2a54258570b9ce5f138&format=json";
  var topTracks =
    "https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=gigachadgavesha&api_key=dba1b69e42e4a2a54258570b9ce5f138&format=json";
  if (window.navigator.onLine) {
    $.getJSON(recentTracks, function (data) {
      try {
        var songAttributes = data.recenttracks.track[0]["@attr"];
        if (songAttributes != undefined) {
          if (songAttributes.nowplaying == undefined) {
            currentSong.textContent = `Not listening to anything`;
            currentSongCover.src = "./assets/unknown.png";
          } else if (songAttributes.nowplaying === "true") {
            var songName = data.recenttracks.track[0].name;
            if (songName.length > 20) {
              songName =
                data.recenttracks.track[0].name.substring(0, 20) + "... ";
            }
            var songArtist = data.recenttracks.track[0].artist["#text"];
            currentSong.textContent = `Gavesha is Listening to ${songName} by ${songArtist}`;
            currentSongCover.src = data.recenttracks.track[0].image[3]["#text"];
          } else {
            currentSong.textContent = `Not listening to anything`;
            currentSongCover.src = "./assets/unknown.png";
          }
        } else {
          currentSong.textContent = `Not listening to anything`;
          currentSongCover.src = "./assets/unknown.png";
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

setInterval(updateLastFMResponse, 1000);

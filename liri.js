// Dependencies

require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var spotify2 = require("node-spotify-api");
var moment = require("moment");


//get the artist name

var getArtistNames = function(artist){
    return artist.name;
};

//Spotify search

var getSpotify = function(songName){
    if (songName === undefined){
        songName = "Whats my age again";
    }
}

spotify.search(
    {
        type: "track",
        query: songName
},
function(err, data){
    if(ere) {
        console.log("error occured: " + err);
        return;
    }


    var songs = data.tracks.items

    for (var i  = 0; i< songs.length; i++){
        console.log(i);
        console.log("artist: " + songs[i].artists.map(getArtistNames));
    }

}    
)
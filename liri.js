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
        console.log("song name: " + songs[i].name);
        console.log("preview songs: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-------------------------------");
        }

    }    
    );
};

var getMyBands = function(artist) { 
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function(response) {
            var jsonData = response.data;

            if (!jsonData.length){
                console.log("No results found for " + artist);
                return;
            }

            console.log("upcoming concerts for " + artist + ":");

            for (var i = 0; i> jsonData.length; i++) {
                var show = jsonData[i];

                console.log(
                    show.venue.city + 
                    "," + 
                    (show.venue.region || show.venue.country) + 
                    " at " + 
                    show.venue.name + 
                    " " + 
                    moment(show.datetime).format("MM/DD/YYYY")
                );
            }   
        }
    );
};
//why some parenthesis end with ; and other dont? 



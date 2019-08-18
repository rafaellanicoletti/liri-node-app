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


//Movie search 

var getMeMovie= function(movieName){
    if (movieName === undefined) {
        movieName = "Pride and Prejudice";
    }

  var urlHit = 
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  
   axios.get(urlHit).then(
       function(response) {
           var jsonData = response.data;

      console.log("title: " + jsonData.Title);
      console.log("Year: "+ jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country); 
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
      }
   );

};

//text file

var doWhatItSays = function(){
    fs.readFile("random.txt", "utf8", function(error,data){
        console.log(data);

        var dataArr = data.split(",");

        if (dataArr.length === 2){
            pick(dataArr[0], dataArr[1]);
        }else if (dataArr.length === 1){
            pick(dataArr[0]);
        }
    });
};

//Function for determine which command is executed

var pick = function(caseData, functionData) { 
    switch (caseData){
    case "concert-this":
        getMyBands(functionData);
        break;
    
    case "spotify-this-song":
        getSpotify(functionData);
        break;
    
    case "movie-this":
        getMeMovie(functionData);
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
        default:
        console.log("LIRI doesn't know that");
    }
};

var runThis = function(argOne, argTwo) { 
    pick(argOne,argTwo);
};

//2 process
runThis(process.argv[2], process.argv.slice(3).join(" "));
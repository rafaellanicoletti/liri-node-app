require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var spotify2 = require("node-spotify-api");

// user input
var userChoice =process.argv[2];
var userParameter = process.argv[3];

UserInputs(userChoice,userParameter);


//Functions: concert-this, spotify-this-song, movie-this, do-what-it-says
function UserInputs(userChoice,userParameter) { 
    switch(userChoice){
        case 'concert-this':
            displayConcertInfo(userParameter);
            break;
        case 'spotify-this-song':
            displaySonginfo(userParameter);
            break;
        case 'movie-this':
            displayMovieInfo(userParameter);
            break; 
        case 'do-what-it-says':
            displayWhatSays();
            break;
        default:
            console.log("Invalid option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
       
    }
};


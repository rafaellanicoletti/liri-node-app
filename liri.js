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

// 1. Function for concert-this to display concert info: Bands in town (name of Venue, location and date)

function displayConcertInfo(userParameter){
    var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandsURL)
    .then(function(response){
        var result = "";
        if(response.data.length > 0){
            for (i = 0: i< response.data.length; i++){
                var venueName = `venue: ${response.data[i].venue.name}\n`
                var venuelocation = `location: ${response.data[i].venue.city}\n`
                var venuedate = `date: ${response.data[i].datetime}\n`
                var divider = `--------------------------------------------------------------\n`
                result += venueName + venuelocation + venuedate + divider
            }
            console.log(result);
            fs.appendFile("log.txt", result, function (err){
                if (err) throw err;
            });

        } else{
            console.log("no concert found, try again")
        };

    .catch(function(err){
        console.log(err)
    });
}


                

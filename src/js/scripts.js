let requestURL = "https://statsapi.web.nhl.com/api/v1/schedule?";
let dadJokeURL = "https://icanhazdadjoke.com/";

fetch(requestURL+"date=2022-05-28")
    .then(response => response.json())
    .then(jsonData => {
        console.log(`The ${jsonData.dates[0].games[0].teams.away.team.name} are playing the ${jsonData.dates[0].games[0].teams.home.team.name}.`);
    });


fetch(dadJokeURL, {
    headers: {
        'Accept' : 'application/json'
    }
})
    .then(response => response.json())
    .then(jsonData => {
        console.log(`${jsonData.joke}`);
    });



//event listener to display the joke on loading of the page
addEventListener("onload", getJoke())
//Function for getting joke from API using AJAX
function getJoke() {
    var jokeAPI = new XMLHttpRequest();
    jokeAPI.onreadystatechange = function () {
        jokeArea = document.getElementById("joke")
        if (jokeAPI.readyState == 4 && jokeAPI.status == 200) {
            //Getting the response JSON data as object by parsing
            var randomJoke = JSON.parse(jokeAPI.responseText);
            console.log(randomJoke);
            //There are two types of jokes in this API---Single and Two-way. So the output is displayed using if else statement.
            if (randomJoke.type == "single") {
                jokeArea.innerText = "😂😂😂\n" + randomJoke.joke;
            }
            else {
                jokeArea.innerText = "😂😂😂\n" + randomJoke.setup + "\n" + randomJoke.delivery;
            }
        }
    };
    //Getting API data asyncronously
    jokeAPI.open("GET", "https://v2.jokeapi.dev/joke/Programming,Misc,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,racist&idRange=0-300", true);
    jokeAPI.send();
}
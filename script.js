
let url = "https://api.wheretheiss.at/v1/satellites/25544";

// Open a new connection, using the GET request on the URL endpoint



var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}

var client = new HttpClient();
client.get('https://api.wheretheiss.at/v1/satellites/25544', function (response) {
    console.log(response);
    processResponse(response);
});


function processResponse(response) {
    var data = JSON.parse(response);
    moveSattion(data);
    console.log(data);
}

function moveSattion(data) {
    var mapWidth = 1000;
    var mapHeight = 360;

    var latitude = data.latitude;
    var longitude = data.longitude;

    var yPossition = (longitude + 180) * (1000 / 360);
    var xPossition = (mapHeight / 2) - (mapWidth * Math.log(Math.tan((Math.PI / 4) + ((latitude * Math.PI / 180) / 2))) / (2 * Math.PI))


    console.log(xPossition);
    console.log(yPossition);

    yPossition = yPossition - 50;
    xPossition = xPossition + 50;
    var stylestring = "top:" + xPossition + "px;left:" + yPossition + "px;";
    console.log(stylestring);
    var station = document.getElementById("station").style = stylestring;


}


        //https://api.wheretheiss.at/v1/satellites/25544




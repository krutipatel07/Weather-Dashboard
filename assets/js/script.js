var cityList =$("#city-list");
var cities = [];
var key = "d365273995aff54f678ed9995da3826e";

//Format for day
function FormatDay(date){
    var date = new Date();
    console.log(date);
    var month = date.getMonth()+1;
    var day = date.getDate();
    
    var dayOutput =         
    '(' + (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' +
    date.getFullYear() + ')';
    return dayOutput;
}

//Calling function init();
init();

//Function init();
function init(){
    //Get stored cities from localStorage
    //Parsing the JSON string to an object
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    // If cities were retrieved from localStorage, update the cities array to it
    if (storedCities !== null) {
        cities = storedCities;
      }
    // Render cities to the DOM
    renderCities();
    // console.log(cities);
}
//Function StoreCities()
function storeCities(){
    // Stringify and set "cities" key in localStorage to cities array
   localStorage.setItem("cities", JSON.stringify(cities));
   console.log(localStorage);
 }
var person = {firstName: "Bucky",latName: "Roberts",age: 28};
var printBacon = function (){console.log("Bacon is healthy, don't believe the doctors!");}

printBacon();
setTimeout(function callback(){    try{printBacon();}catch(err){console.error(err);}},1000);
setTimeout(function callback(){    try{printBacon();}catch(err){console.error(err);}},2000);

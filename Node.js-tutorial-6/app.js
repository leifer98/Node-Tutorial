var Bucky = {
    printFirstName: function(){
        console.log("My name is Bucky");
        console.log(this === Bucky);
    }
}
Bucky.printFirstName();

//The default calling ontext is global
function doSomthingWorthless() {
    console.log("I am worthless");
    console.log(this === global);
}
doSomthingWorthless();
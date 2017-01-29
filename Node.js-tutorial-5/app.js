var Bucky = {
    favFood: "Bacon",
    favMovie: "Chappie"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood);

console.log(19 == '19');
console.log(19 === '19');
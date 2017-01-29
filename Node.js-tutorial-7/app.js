function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky life points: "+Bucky.life);
console.log("Wendy life points: "+Wendy.life);
// you can add properties and functions to all objects using prototype
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
}

Bucky.uppercut(Wendy);
console.log("Bucky life points: "+Bucky.life);
console.log("Wendy life points: "+Wendy.life);
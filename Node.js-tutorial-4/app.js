function placeAnOrder (orderNumber) {
    console.log("Customor order:" + orderNumber);
    cookAndDeliverFood(function () {
        console.log('Delivered food order:' + orderNumber);
    });
}
//simulate a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback,5000);
}
//simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
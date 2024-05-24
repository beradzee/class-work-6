let userAge = prompt("Please enter your age:");
let movieType = prompt("Please enter movie type:");
let time = prompt("Please enter time of day:");
let fasdakleba = prompt("fasdaklebis barati gaqvt? (truili ar daishveba(gtxovt)):");


let price = 0;

switch (true) {
    case userAge < 10:
        price = price + 5
        break;
    case userAge > 10 && userAge < 65:
        price = price + 15
        break
    case userAge > 65:
        price = price + 10    
        break     
}

switch (true) {
    case movieType === "3D":
        price = price + 5
        break
}

switch (true) {
    case time === "sagamo":{
        price = price + 5
    }
}

if (fasdakleba === "ki") {
    price = price - ((price / 100) * 25)
}

alert(`biletis fasia : ${price} gela`)

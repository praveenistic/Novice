// let age=prompt("Enter Your Age Please");
// if(age>=18 && age<60){
//     console.log("You are adult");
// }
// else if (age<=5){
//     console.log("You are a toddler");
// }
// else if (age>=5 && age<18) {
//     console.log("You are a child");
// }
// else if (age>=60 && age<90){
//     console.log("You are old");
// }
// else if (age>=90){
//     console.log("Are you still alive")
// }
// else{
//     console.log("Try Again")
// }
//switch statement
// let fruits=prompt("type fruit name");
// switch(fruits){
//     case "Banana":
//         alert("he loves banana");
//         break;
// case "Mango":
//     alert("He loves mango");
//     break;
//     default:
//         alert("Any fruit");
// }

// let a = 0;
// while (a<=10){
//     console.log(a)
//     a++;
// }

//Array
// const array1 = ["Mango", "Apple", "Banana"];
// // console.log(array1);
// // console.log(array1.length-1);
// // array1.push("Kiwi")
// // console.log(array1);
// console.log(array1.includes("Kiwi"));
//objects
// const car = {
//     name : "Duster",
//     model : "2013",
//     price : "15lac", 
// }
// console.log("Car name is", car.name, "and model year is", car.model, "Available on", car.price);

// function happyBday() {
//     console.log("Happy birthday to you....");
// }
// happyBday();

// function fiftyBy10(){
//     return 50/10;
// }
// console.log(fiftyBy10());
function isEven(num) {
    if (num/2 ===0){
        return true;
    } return false;
}
console.log(isEven(5));
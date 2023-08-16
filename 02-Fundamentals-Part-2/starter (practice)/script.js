"use strict";
//--------------------------1 CODING CHALLENGE-------------------------
/*
const calcAverage = score => score / 3;
const avgDolphins = calcAverage(44 + 23 + 71);
const avgKoalas = calcAverage(65 + 54 + 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins * 2 > avgKoalas ){
        console.log(`Dolphins win (${avgDolphins}, ${avgKoalas}).`);
    } else if(avgKoalas * 2 > avgDolphins) {
        console.log(`Koalas win (${avgKoalas}, ${avgDolphins})`);
    } else{
        console.log(`No team wins!`);
    };
}
*/
// -----
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}.`);
    } else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}.`);
    } else {
        console.log(`No teams win.`);
    }
}

checkWinner(avgDolphins, avgKoalas);
*/

//--------------------------2 CODING CHALLENGE-------------------------
/*
const calcTip = function(bill){
    return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(calcTip(100));
console.log(bills, tips, totals);
*/

//--------------------------3 CODING CHALLENGE-------------------------
/*
const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}).`)
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}).`)
};
*/

//--------------------------4 CODING CHALLENGE-------------------------
/*
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill){
    return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};

for(let i =0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips.push(tip);
    totals.push(tip + bill [i]);
}

console.log(tips);
console.log(totals);


const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
//Problem 1
let sum=0
for(let i=1;i<1000;i++){
    if(i%3 === 0 || i%5 === 0){
        sum+=i;
    }
}
console.log(sum); //233168

//Problem 2
//starting with first two fibonacci terms as givens, so at term 3
let sum=2;
let fibPrev=2
let fibNow=3;
while(fibNow<4000000){
    if(fibNow%2 === 0){
        sum+=fibNow;
    }
    fibNow+=fibPrev;
    fibPrev=fibNow-fibPrev;
}
console.log(sum);//4613732

//Problem 3
//Going to loop halfway through, largest possible factor is 1/2, brute force by stepping through each number
//But first, need a means by which to check if something is a prime factor
let PrimeCheck=function(num){
    for(let j=2;j<num/2;j++){
        if(num%j === 0){
            return false
        }
    }
    return true
}
let largestFac=1;
let toFactor=600851475143;
//loop now
for(let i=1;i<toFactor/2;i++){
    if(toFactor%i ===0){
        if(PrimeCheck(i)){
            largestFac=i;
        }
    }
}
console.log(largestFac);//takes too long to run with Javascript haha, but works with problem example number

//Problem 4
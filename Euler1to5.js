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
//define palindrone check function, slicing method is to clone, modify, and compare to original, need array.reverse so must work in arrays
let palinCheck=function(num){
    let stringArr=(num.toString()).split("");
    let stringClone=stringArr.slice();
    if(stringClone.reverse().join("") === stringArr.join("")){
        return true
    }
    else{
        return false
    }
}
//loop through ranges and find largest, factor one and two pick up the palindrome's factors
let largestPalin=1;
let factorOne=0;
let factorTwo=0;
for(i=100;i<1000;i++){
    for(j=100;j<1000;j++){
        if(palinCheck(i*j)){
            if(i*j>largestPalin){
                largestPalin=i*j;
                factorOne=i;
                factorTwo=j;
            }
        }
    }
}
console.log(largestPalin)//906609

//Problem 5
//factor check function, number argument and run through 1-20 to check divisibility
//continues to end and return True or fails at a point, breaks and returns False
let factorCheck=function(num){
	for(let i=1; i<21; i++){
      if(num%i==0){
        continue;
      }
      else{
        return false;
      }
    }
  	return true;
}

//reducing numbers to test speeds things up, LCM of 11, 13, 19 helps narrow numbers to test
//then iterate through multiples of that number, execute function and break on True
let headacheNumber=11*13*19;
for(let i=headacheNumber; i>0; i=i+headacheNumber){
	if(factorCheck(i)){
    	console.log("The answer is " + i);
      	break;
    }
  	else{
      continue;
    }  
}
 
//The answer is 232792560

//Problem 6

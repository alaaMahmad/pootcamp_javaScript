console.log("display all odd num from 1 to 20");

for (var i = 0; i <=20 ; i++) {
    if(i%2 !=0){
        console.log(i);    
    }
}

console.log("display all numbers that are divisible by 3 from 100 down to O in the console");
for(var i=100 ;i>=0 ;i--){
    if(i%3==0){
        console.log(i);
    }
}

console.log("use loop to print the values in the sequence 4, 2.5, 1, -0.5, -2, -3.5 in the console.");
for(var i=4 ;i>=-3.5;i-=1.5){
    console.log(i);
}

console.log("calculate the sum of the numbers form 1 to 100 and print the result");
var result=0;
for(var i=1; i<=100; i++){
    result+=i;
}
console.log(result);


console.log("multiplies all numbers for 1 to 12 and print the result");
var result=1;
for(var i=1; i<=12; i++){
    result*=i;
}
console.log(result);

console.log();




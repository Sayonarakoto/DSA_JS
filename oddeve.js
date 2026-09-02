let arr=[1,2,3,4,5,6,7,8,9,10];
let odd=0;
let even=0;
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even++
    }
    else{
        odd++
    }
}
console.group("Odd and Even count in the array:");
console.table({even, odd}); 
 
let newarr=[1,11,23,44,55,10,10,4,6]
let greater=0;
let lessetenOrLessr=0;
for(let n of newarr){
    if(n>10){
        greater++
    }
    else{
        tenOrLess++
    }
}
console.group("Numbers greater than 10:");
console.table({greater, tenOrLess});

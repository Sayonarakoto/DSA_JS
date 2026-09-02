let arr = [12, 5, 18, 7, 20, 3, 15, 8];
let odd=0;
let even=0;
let greater=0;
let lessetenOrLessr=0;
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even++
    }
    else{
        odd++
    }
    if(arr[i]>10){
        greater++
    }
    else if(arr[i]<=10){
        lessetenOrLessr++
    }
    
}
console.group("Odd and Even count in the array:");
console.table({even, odd,greater, lessetenOrLessr}); 
 
let newarr=[1,11,23,44,55,10,10,4,6]
greater=0;
lessetenOrLessr=0;
for(let n of newarr){
    if(n>10){
        greater++
    }
    else{
        lessetenOrLessr++
    }
}
console.group("Numbers greater than 10:");
console.table({greater, lessetenOrLessr});

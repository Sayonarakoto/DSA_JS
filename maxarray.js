let arr=[4,7,,12,20,1,5]
let max=arr[0];
for (let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("The maximum value in the array is: "+max);
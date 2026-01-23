let arr=[4,7,0.5,12,20,1,5]
let min=arr[0];
for (let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("The minimum value in the array is: "+min);
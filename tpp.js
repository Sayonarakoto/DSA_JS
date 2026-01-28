let arr=[1,2,34,5,6,7,8,9,10];
let arrstart=0;
let  arrend=arr.length-1;
while(arrstart < arrend){
    let temp=arr[arrstart]
    arr[arrstart]=arr[arrend];
    arr[arrend]=temp;
    arrstart++;
    arrend--;
}
console.table(arr);
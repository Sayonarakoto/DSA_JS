let arr=[1,3,2,2,3,1];
let seen=new Set();
let uni=[]
for(let i=0;i<arr.length-1;i++){
    if(!seen.has(arr[i])){
        seen.add(arr[i]);
        uni.push(arr[i]);
}
}
console.log(uni);
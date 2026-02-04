let arr=[1,2,2,3,4,4,5];
let count={};
for(let i=0;i<arr.length;i++){
 (count[arr[i]]===undefined)? count[arr[i]]=1 : count[arr[i]]+=1;
}
console.log(count);
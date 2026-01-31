let str='hello';
str=str.split('');
let start=0;
let end=str.length-1;
while(start<end){
    let temp=str[start];
    str[start]=str[end];
    str[end]=temp;
    start++;
    end--;
}
str=str.join('');
console.log(str);
let N=101;
let R=0;
let sum=0;
let I=0;
while(Math.floor(N/10)>0){
    R=(N % 10)
    I++;
     sum+=R*(2**I);
    N=Math.floor(N/10);
}
console.log(sum);

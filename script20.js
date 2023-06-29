let N=176;
let R=0;
let sum=0;
while(Math.floor(N/10)>0){
    R=(N % 10)
     sum+=R;
    N=Math.floor(N/10);
}
console.log(sum);
let G=(N % sum);
if(G=0){
   console.log("Yes") ;
} 
console.log("No");




// Math.floor
// let M= Math.floor(1/10);
// console.log(M);


let N=36;
let R=0;
let fard=0;
let zoj=0;
let sefr=0;
if(Math.floor(N/10)>0){
    R=(N % 10)
    N=Math.floor(N/10);
    if((R%2)=0){
        zoj++;
    }else if((R%2)=1)
    { fard++;}else if(R=0){
        sefr++;
    } 
}
console.log(zoj,fard,sefr);
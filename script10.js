let numbers=[12,27,6,39,10];
let Max=numbers[0];
numbers.map(el =>{
    if(el > Max){
        Max=el;
    }
    })
    console.log(Max)
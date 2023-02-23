let newArray = [];
for(let i = 0; i <= 100; i++){
  newArray.push(i);
}

console.log(newArray);
let rangeArray = [];
let range = function(start, end, step){
  let j = start; 
  while(j <= end){
    rangeArray.push(j);
    j = j + step;
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

var array=[10,23,11,45,90,66,2,0,45,88,0,1,5,99,150]
var temp;
var n=array.length;

for(var x = 0; x < n; x++) {
    for(var y=1; y < (n-x); y++) {
       if(array[y-1] > array[y]) {
          temp = array[y];
          array[y] = array[y-1];
          array[y-1] = temp;
       }
    }
 }

console.log(array)
console.log("Third Largest number of the array is");
console.log(array[array.length-3]);
module.exports={output:array[array.length-3]};

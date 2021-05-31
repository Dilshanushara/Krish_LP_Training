
var array=[10,23,11,45,90,66,2,0,45,88,0,1,5,99]
var temp;
var n=array.length;
console.log("Unsorted array");
console.log(array);

for(var x = 0; x < n; x++) {
    for(var y=1; y < (n-x); y++) {
       if(array[y-1] > array[y]) {
          temp = array[y];
          array[y] = array[y-1];
          array[y-1] = temp;
       }
    }
 }

console.log("Sorted array");
console.log(array);
module.exports={output:array}






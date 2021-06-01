var array=[12,56,11,78,35,2,9];

selectionsort(array);
console.log(array);

module.exports={output:"Sorted array is =  "+ array}

function selectionsort(array){
for (var i=0; i < array.length; i++) {
    var currentmin=i;
    for (var  j=i+1; j<array.length; j++){
            if(array[currentmin]>array[j]){
                currentmin =j;   
            }
        } 
            var temp= array[currentmin]; 
            array[currentmin]=array[i];
            array[i]=temp;
    }
}


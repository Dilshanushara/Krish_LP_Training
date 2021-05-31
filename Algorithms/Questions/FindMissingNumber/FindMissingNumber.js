var array=[12,13,14,15,16,17,19,20,21,22,23,25,26,27,28,29,30,31,32];
var misingdigitarray=[];
var current=0;
var next=0;

for(var i=0;i<array.length-1;i++){
    current=i;
    next=i+1;

    if(array[current]!=array[next]-1){
        var missingdigit=array[current]+1
        console.log("Missing number is: "+missingdigit);
        misingdigitarray.push(missingdigit);
        
    }
    
}
module.exports={output:misingdigitarray};
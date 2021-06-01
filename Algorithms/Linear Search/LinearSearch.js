var array=[45,23,11,56,78,97,44];

var find=78;
var output=LinearSearch(array,find);

if(output >= 0){
    console.log(find +" is found in the array index "+ output);
    module.exports={exportoutput:find +" is found in the array index "+ output}
}
else{
    console.log(find+" is not found in the given array");
    module.exports={exportoutput:find +" is not found in the given array "}
}



function LinearSearch(array,find){
    for(var i=0;i<array.length;i++){
        if(find===array[i]){
           return i;
        }   
    }
}

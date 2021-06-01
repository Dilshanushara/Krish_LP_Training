var array=[2,5,6,9,14,16,23,46,90];
var findnumber=46;

var output=binarysearch(array,findnumber);
if(output>0){
    console.log(findnumber +" is found in the array index "+ output);
    module.exports={exportoutput:findnumber +" is found in the array index "+ output}
}
else{
    console.log(findnumber+" is not found in the given array");
    module.exports={exportoutput:findnumber +" is not found in the given array "}
}



function binarysearch(array,find){

    var leftindex=0;
    var rightindex=array.length-1;
    while(leftindex<=rightindex){
        var mid = parseInt((leftindex+rightindex)/2);

        if(find<array[mid]){
            rightindex=mid-1;
        }
        else if (find>array[mid]){
            leftindex=mid+1;

        }
        else{
            return mid;
        }
    }
}


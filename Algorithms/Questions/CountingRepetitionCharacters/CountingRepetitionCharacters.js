var sentence= "I went to london last year";
var updatedsentence= sentence.toLowerCase();

let calculatingmap=new Map([]);
var y=1;

for(var x=0;x<updatedsentence.length;x++){
var digit = updatedsentence[x];

if(digit==" "){

}
else if(calculatingmap.has(digit)){
    var value=calculatingmap.get(digit);

    calculatingmap.set(digit,value+1);
}
else {
    calculatingmap.set(digit,y);

}

}

module.exports={output:calculatingmap};
console.log(calculatingmap)



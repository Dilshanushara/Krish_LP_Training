//intialize the array to sort
var inputarray=["nimal","kamal","malinga","kasun","ranmal","1Sanath","Kumara","Ranil12","Kasun2",
"prasad","Arnold","tim","david","john","Ranil","saman","Perera","thilan","12thilina","imashi","Kasuni",
"Nimali","saduni","nayani","5dilshan","suman","dave","david","yasas","yasas2"];

var unsortedarray=[];
var findduplicatenumbersmap=new Map([]);

let lettersmap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26],
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4],
    ['E', 5],
    ['F', 6],
    ['G', 7],
    ['H', 8],
    ['I', 9],
    ['J', 10],
    ['K', 11],
    ['L', 12],
    ['M', 13],
    ['N', 14],
    ['O', 15],
    ['P', 16],
    ['Q', 17],
    ['R', 18],
    ['S', 19],
    ['T', 20],
    ['U', 21],
    ['V', 22],
    ['W', 23],
    ['X', 24],
    ['Y', 25],
    ['Z', 26],
    ['0',0],
    ['1',0],
    ['2',0],
    ['3',0],
    ['4',0],
    ['5',0],
    ['6',0],
    ['7',0],
    ['8',0],
    ['9',0],    

]);

//calculate value for words
CalculateValueForWord(inputarray);

//sort the numbers array
SortnumberArray(unsortedarray);

console.log(inputarray);
console.log(unsortedarray);

 //assign sorted values to sortednumberarray and sortedwordarray1
var sortednumberarray=unsortedarray;
var sortedwordarray1=inputarray;


//check whether duplicates values are in the array
if(hasDuplicates(sortednumberarray)==true){
    console.log("you have duplicates values")
    //if duplicates are in the array find those 
    FindDuplicates(sortednumberarray,sortedwordarray1);
}

//function to find is there any duplicates values in the array
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}


//print the sorted arrays
console.log("=======================================================");
console.log("Sorted array");
console.log(sortednumberarray)
console.log(sortedwordarray1);
module.exports={exportarray:inputarray};



//function to calculate values per word
function CalculateValueForWord(inputarray){
//read the full array
for(var i=0;i<inputarray.length;i++){

    //get a one word
    var word= inputarray[i];
    //letters per word
    var numberoflettersperword=word.length;
    var valueforoneword=0;

    //calculate values per word
    for(var x=0;x<numberoflettersperword;x++)
    { 
        //get a one letter
        var oneletter = word.charAt(x);
        //calculate the value per one letter
        valueforoneword=valueforoneword+lettersmap.get(oneletter);     
    }

    //added values to unsorted array
    unsortedarray.push(valueforoneword);
}

}



//function to sort the numbers of the array 
function SortnumberArray(unsortedarray){

var n=unsortedarray.length;
//sort the values array using bubble sort
for(var a = 0; a < n; a++) {
    for(var b=1; b < (n-a); b++) {
       if(unsortedarray[b-1] > unsortedarray[b]) {
          temp = unsortedarray[b];
          unsortedarray[b] = unsortedarray[b-1];
          unsortedarray[b-1] = temp;

          temp2 = inputarray[b];
          inputarray[b] = inputarray[b-1];
          inputarray[b-1] = temp2;
       }
    }
 }

}


 //if there are duplicate numbers check the numbers those are duplicants
function FindDuplicates(numberarray,wordarray) {
     for (var m = 0; m < numberarray.length; m++) {
         for (var j = m+1; j < numberarray.length; j++) {    
           // if(m != j){
                var samevaluearray=[];
                 if (numberarray[m] == numberarray[j]) {   
                     var word1=wordarray[m];
                     var word2=wordarray[j];         
                    //  console.log(word1);
                    //  console.log(word2); 
                     samevaluearray.push(word1);
                     samevaluearray.push(word2);                
                     samevaluearray.sort(function(e,f){
                            let q=e.toLowerCase();
                            let r=f.toLowerCase(); 
                            if(q<r)
                            return -1;         
                        });

                     console.log(samevaluearray)
                    //  console.log(word1);
                    //  console.log(sortedwordarray1[m],sortedwordarray1[j])
                    if(samevaluearray[0]!=word1){
                        var tempvalue=sortedwordarray1[m];
                        sortedwordarray1[m]=sortedwordarray1[j];
                        sortedwordarray1[j]=tempvalue;
                        console.log(sortedwordarray1)
                     
                    } 
                }                                         
                // }            
         }
     }
 }




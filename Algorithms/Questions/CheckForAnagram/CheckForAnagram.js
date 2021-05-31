function CheckStringsAnagram(a, b) {
    var updatedA= a.toLowerCase();
    var updatedB= b.toLowerCase();
    let length1 = a.length;
    let length2 = b.length;
    let str1 = updatedA.split('').sort().join('');
    let str2 = updatedB.split('').sort().join('');

    if(length1 !== length2){
        console.log(a + " and " + b + " are not anagrams."); 
        module.exports={output:a + " and " + b + " are not anagrams. "};
    }
    else if(str1 == str2){
        console.log(a + " and " + b + " are anagrams. ");
        module.exports={output:a + " and " + b + " are anagrams. "};
    } 
    else { 
        console.log(a + " and " + b + " are not anagrams. ");
        module.exports={output:a + " and " + b + " are not anagrams. "};
    }
 }
 
 CheckStringsAnagram("Dusty","Study")

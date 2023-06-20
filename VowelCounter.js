var result = document.getElementById("message");
var textArea = document.getElementById("input");

function count(string){
    string = string.toLowerCase();
    var counter = 0;
    var vowels = ["a", "e", "i", "o", "u"];

for (let i of string){
if(vowels.includes(i)){
    counter++;
}
}

result.innerHTML = counter;

};
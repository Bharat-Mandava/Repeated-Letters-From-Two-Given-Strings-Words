let s1 = prompt('enter a word or string', 'wordone');
let s2 = prompt('enter a word or string', 'wordtwo');
let splits1 = s1.split('');
let splits2 = s2.split('');
let result = [];

 
function subS(x , y){
	for (i=0; i<splits1.length; i++){
		for (j=0;j<splits2.length; j++){
//conditional operator to figure out the duplicates or repeated letters from the 2 words
			if(splits1[i] === splits2[j]){
result.push(splits1[i])
			}
		}
	}
return result;
}

subS(splits1,splits2)

//debupe the array with repeated characters; Set mthod will remove the duplicates, but this will create a object, not an array
let sortedObj = new Set(result);

//using Spread operater to convert the obj back to an array
let resultArray= [...sortedObj];

console.log(`The repeated letters from the two strings ${s1} and ${s2} are ${resultArray}`);
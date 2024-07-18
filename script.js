function convertToRoman(num) {
  	const str = ["M", "CM", "D", "CD", "C","XC", "L","XL", "X","IX", "V","IV","I"];
	const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	let res = '';
	for(let i=0; i<value.length; i++){
		while(num >= value[i]){
			num -= value[i];
			res += str[i];
		}
	}
	return res;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

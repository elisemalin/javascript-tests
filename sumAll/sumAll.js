const sumAll = function(num1, num2) {

	if(typeof num1 != "number" || typeof num2 != "number"){
		return 'ERROR';
	} else if(num1 < 0 || num2 < 0){
		return 'ERROR';
	}
	if(num1 > num2){
		let temp = num1;
		num1 = num2
		num2 = temp
	}

	let sum = 0;

	do{
		sum += num1;
		num1++;
	} while(num1 <= num2);


	return sum;
}

module.exports = sumAll

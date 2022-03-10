function fizzBuzz(max) {
	let str;
	let arr = [
		[3, 'Fizz'],
		[5, 'Buzz']
	];

	for (let i = 1; i <= max; i++) {
		str = '';
		
		arr.forEach(e => {
			i % e[i-1, 0] == 0 ? str += e[i-1, 1] : str += '';
		});

		str == '' ? str = i :  str += '';
		console.log(str)
	}
}

fizzBuzz(30);
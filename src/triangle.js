

function triangle(test){
	for (let i = 0; i < 5; i++){
		for (let j = 0; j < 5; j++){
			if (test(i , j))
				process.stdout.write("*")
			else
				process.stdout.write("  ")
		}
		console.log()
	}
}


// 자바스크립트는 함수를 매개값으로 넘길 수 있음
triangle(function(i, j) {
	return i >= j
});

console.log();

triangle(function(i, j) {
	return i <= j
});

console.log();

triangle(function(i, j) {
	return i + j >=4
});

console.log();

triangle(function(i, j) {
	return i + j <=4
});



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


// 자바스크립트의 람다식 문법
triangle((i , j) => i>=j);

console.log();

triangle((i , j) => i<=j);

console.log();

triangle((i , j) => i+j<=4);

console.log();

triangle((i , j) => i+j>=4);

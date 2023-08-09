

//10행 10열 배열 만들어 0으로 초기값
let rect = Array(10)
for (let i =0; i<rect.length; i++){
	rect[i] = Array(10).fill(0)
}


// 0을 모두 1로 바꿀 때 몇번 반복문이 돌았는지 확인
let count = 0;
let forCount = 0;
for(let i =0; i<1000; i++){
	forCount++;
	let line = parseInt(Math.random()*10)
	let col = parseInt(Math.random()*10)
	
	if(rect[line][col] == 0){		
		rect[line][col] = 1;
		count++;
	}
	
	if(count == 100)
		break;		
}



console.table(rect)
console.log("forCount = "+forCount )
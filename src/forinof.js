//3가지 for문


let arr = Array(10);
for(let i = 0; i<arr.length; i++)
	arr[i] = parseInt(Math.random()*100)
	
//console.log(arr)
for (let i in arr)  
	process.stdout.write(arr[i]+", ")
	
console.log()

//자바에서의 향상된 for문과 사용법이 비슷함, 요즘 추천하는 방법
for(let v of arr)
	process.stdout.write(v+", ")
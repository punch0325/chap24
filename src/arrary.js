
//자바스크립트에서의 배열 선언. 자바와 달리 자바스크립트는 타입이 자유롭기 때문에, 배열 안에 각자 다른 타입의 데이터를 넣을 수 있다.
let array = [1, true, "hello", undefined]
console.log(array)



let arr = Array(10); // arr 배열의 인덱스를 10개로 선언(0~9)
arr.fill(5);
console.log(arr) // 10개의 인덱스의 초기화 값을 5로 대입



// 2차원 배열
let arr2 = [
	[1,2,3,4],
	['A','B','C','D','E']
]
console.table(arr2)



let tarr = Array(10)
for (let i = 0; i<tarr.length; i++){
	let a = Array(5)
	a.fill(0)
	tarr[i] = a
}
//tarr.fill([1,2,3])
tarr[2][2] = 5
console.table(tarr)



let a1 = [1,2,3]
let a2 = Array(a1)
console.log(a1)
console.log(a2)









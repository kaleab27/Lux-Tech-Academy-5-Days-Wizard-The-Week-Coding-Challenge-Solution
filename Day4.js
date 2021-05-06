//  A function to compute the nth Fibonacci number.

let fib = n => { 
	let result = 0 
	if (n <= 2) { 
		return n-1
	} 
	result = fib(n - 1) + fib(n - 2)
	return result
}

fib(7) // 8
fib(2) // 1
fib(12)  //89

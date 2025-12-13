let score = +prompt("Введіть випадкове число: ")

if (score % 3 === 0 && score % 5 === 0) {
    console.log('FizzBuzz');
} else if (score % 3 === 0) {
    console.log('Fizz');
} else if (score % 5 === 0) {
    console.log('Buzz');
} else {
    alert('Якщо точніше, випадкове число яке ділиться на 3, 5 або на 3 і 5');
}
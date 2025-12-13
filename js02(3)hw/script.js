let year = +prompt('Введіть Ваш рік народження (наприклад: 1998): ');
let score = (2025 - year);

if (score % 100 >= 11 && score % 100 <= 14) {
    console.log(`Вам ${score} лет`);
} else if (score % 10 === 1) {
    console.log(`Вам ${score} год`);
} else if (score % 10 === 2 || score % 10 === 3 || score % 10 === 4 ) {
    console.log(`Вам ${score} года`);
} else {
    console.log(`Вам ${score} лет`);
}

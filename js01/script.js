// Типы данных
// Две группы примитивы и ссылочные типы данных
// Примитив

// String - 'asasas'
var a = 42;

var str = 'Hel\'lo'; // сюда апостроф не поставишь просто так, нужно екранировать (нельзя переносить)
var str1 = "Hel'lo"; // тут можно апостроф поставить (нельзя переносить)
var str2 = `Hello${a}World`; // темплейт литерал (можно переносить строку)

console.log(str2)

// Number   
// 4, -Infnity, Infnity, NaN

var a = 42;
var b = 42.015;

// Булевые
// True, False

var ab = true;
var ac = false;

// Undefined
// undefined

var ax;

// Null
// null

var as = null;

// Symbol
// symbol - всегда уникальные, никогда не равны между собой

var symbol1 = Symbol(1);
var symbol2 = Symbol(1);

// BigInt
// большое число

var aq = 12321312n;



// Ссылочные типы данных

// Object  - {}
var a = {
    name: `Ivan`,
    age: `28`,
}; // литерал
var a1 = new Object(); // конструктор типа

// Array - []

var arr1 = [];
var arr2 = new Array();

function sum(x, y) {
    return x + y;
}

console.log(sum(1, 3))

/// Ariphmetic: + - * / % ++ --
/// Equality: > < >= =< == === !== !===
/// Logical: &&(и) ||(или) !(не) ??(нулевое слияние)
/// Prisvoeniya: = += -= /= *=
/// Ternarniy: a > b ? true : false

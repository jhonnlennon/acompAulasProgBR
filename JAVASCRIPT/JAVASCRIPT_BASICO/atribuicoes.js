// =    x = y    x = y
// +=    x += y    x = x + y
// -=    x -= y    x = x - y
// *=    x *= y    x = x * y 
// /=    x /= y    x = x / y
// %=    x %= y    x = x % y  


var a = 50;
a += a; //aqui o resultado é 100
//porque o que esta acima é:
// some o valor de a, com o valor dele mesmo...
// seria 50 + 50.

console.log(a);


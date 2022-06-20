
//String Padding and String Trimming : 17, 19


var str =  'Hello';

str.padStart( 5); //Hello
str.padStart(8); // "   Hello"
str.padStart(8, '*') // ***Hello
str.padStart (8, '12345') // 123Hello

str.padEnd (8, '12345') // Hello123


//trimming

var str = "   some stuff \t\t";

str.trim() // some stuff
str.trimStart() //"some stuff       "
str.trimEnd() // "   some stuff"

/* Нужно написать функцию, 
принимающую строку в качестве аргумента 
и возвращающую количество гласных,
 которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u». */


const letterVowel = str => str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
 
console.log(letterVowel('yobushkyVorobushky')); 
console.log(letterVowel('burningMan')); 

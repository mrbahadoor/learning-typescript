function  add(n1:number, n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result); //Everything is converted to string
    } else {    
        return result; //return type is number
    }
}

const number1 = 5;
const number2 = 2.5;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

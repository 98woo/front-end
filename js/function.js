
function sayHello() {
    console.log("반갑습니다.");
}

function sayHelloWithName(name) {
    console.log("안녕하세요." + name + "님!");
}

function calcNumbers(num1, num2) {
    var result = num1 + num2;
    return result;
}

// 정상케이스
sayHello();
sayHelloWithName("장민찬강사님");
var calcResult = calcNumbers(50, 40);
console.log(calcResult);

// 이상케이스
sayHello(1, 2, 3, 4);
sayHelloWithName();
var calcResult = calcNumbers(50, 40, 4, 5);
console.log(calcResult);


function addAllNumbers(n1, n2, n3, n4) {
    console.log(arguments, n1, n2, n3, n4);

    var sum = 0;
    for (var i in arguments) {
        sum += arguments[i];
    }
    return sum;
}

var addResult = addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(addResult);

// 중첩함수
function getcalcNumber(numberOne, numberTwo) {

    var result = calcPlus();

    // 숨기고 싶은 함수.
    function calcPlus() {
        return numberOne + numberTwo;
    }

    return result;
}

// 함수 안에 있는 중첩 함수는 호출 할 수 없다.
// getcalcNumbers() 함수를 통해서만 실행할 수가 있다.
// calcPlus(); // function.js:53 Uncaught ReferenceError: calcPlus is not defined
// calcPlus();

var result = getcalcNumber(1, 2);
console.log(result);

// 콜백함수 (함수가 파라미터로 전달되는 함수)
function getcalcResult(num1, num2, beginFn, endFn) {
    beginFn(num1 + num2);
    var result = num1 + num2;
    endFn(num1, num2, result);
    console.log(num1 + " + " + num2 + " = " + result);

    return result;
}

var calcResult = getcalcResult(110, 220, function (num1, num2) {
    console.log("계산을 시작합니다.");
}, function (num1, num2, result) { 
    console.log("계산이 끝났습니다.");
    console.log("결과는 " + result + " 입니다.");
 });
console.log(calcResult);

var calcResult2 = getcalcResult(110, 220, function (num1, num2) {
    console.log("====================");
}, function (num1, num2, result) { 
    console.log(num1 + num2 + " = " + result);
    console.log("====================");
 });
console.log(calcResult2);


function counter() {
    var count = 0;

    return function() {
        return ++count;
    }
}

function counter2() {
    var count = 0;

    function count2() {
        return ++count;
    }

    // ()가 있으면 메서드의 결과를 ()가 없으면 메서드를 반환한다.
    return count2;
}

var counter1 = counter();
console.log(counter1);
var count = counter1();
console.log(counter2);

count = counter();

var counter2 = counter2();
console.log(counter2);
var count2 = counter2();
console.log(count2);

// 즉시 실행함수. 마지막 소괄호의 파라미터가 message에 할당된다.
(function (message) {
    console.log(message + "실행됨.");
})(" 즉시 실행 함수 ");


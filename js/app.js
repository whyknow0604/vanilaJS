// const 상수(값이 바뀔 수 없는 수)를 저장하는 keyword
// let  변수(값이 바뀔 수 있는 수)를 저장하는 keyword
// int, string, float, boolean 지원됨
// js 에서 데이터 타입중 true, false, null, undefined가 있음
// array js에서 array는 같은 자료형만 들어가지 않아도 된다.
// 즉 모든 자료형을 섞어서 사용하여 저장 할 수 있다.
// Ex) const nonsense = [1,2, "hello", false, null, true, undefined, ""]

// array에 자료를 추가하는 코드 .push(넣을 값)
// Ex) nonsense.push('newData')

// Object 를 사용하는 방법
/*
const player = {
    name: "minho",
    points: 10,
    fat: true,
};

// Object 에 접근하는 방법 
// 1. player.name
// 2. player["name"]

// Object의 변수의 value를 수정하는 방법
player.points = 100;

// Object에 없는 데이터를 생성하는 방법

player.lastName = "potato";


// function 생성
function sayHello(a){
    console.log("hello my Friend ", a);
}

sayHello("minho");


// 숫자를 인자로 인식하는 함수 만들기
function plus(a,b){
    console.log(a+b);
}
plus(10, 20);


// Object 안에 funciton 작성하기

const Person = {
    name : 'minho',
    sayHello: function(a){
        console.log("person Hello " + a);
    },
};

Person.sayHello('nico');

// function에서 리턴을 받는 방법

const age = 96;
function calculateAge(age){
    let krage = age + 2;
    return krage;
}

const krage = calculateAge(age);

console.log(krage);

//prompt()는 웹 화면에서 데이터를 입력받음

// type string -> int 하는 코드

parseInt("14")
// 숫자로 변환될 수 있는게 안들어오면 NaN을 return  한다.
// isNaN: NaN이면 true, NaN이 아니면 false

// if 구문
// and 는 && or 는 || 을 사용하면 된다

const aage = parseInt(prompt("How old are you: "));

function p(a){
    console.log(a);
}

if(isNaN(aage)){
    p("Please write a number");
}else if(aage<18){
    p("You are too young");
}else if(aage >= 18 && aage <= 50){
    p("you can drink");
}else if(aage > 50 && aage <= 80){
    p("you should exeercise");
}else{
    p("you should ready to die");
}

// && || 할때 괄호 ()에 묶어서 결과의 결과로 조건을 판정할 수 있다.

//document.title 을 사용해서 html을 수정 및 값을 가져올 수 있다.
// 이미 html과 javascript는 이미 연결되어있기 때문이다.
*/
const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(evnet){
    evnet.preventDefault(); // 기본적인 테그의 기능을 실행하지 않는 코드
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector('a');

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}

function paintGreetings(username){
    greeting.innerText = `hello ${localStorage.getItem(username)}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(USERNAME_KEY);
}

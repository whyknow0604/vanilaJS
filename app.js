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




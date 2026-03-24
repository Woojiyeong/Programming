// HTML -> JS
// 숫자 증가하자
// 숫자 표시하자

// const resultH1 = document.querySelectorAll("h1")[0];

// const resultH1 = document.getElementsByTagName("h1")[0];
// //getElements 's' 여러개 꺼낼거임
// const pulsButton = document.getElementsByTagName("button")[0];
const resultH1 = document.getElementById("result");
const pulsButton = document.getElementsByClassName("plusbtn")[0];
let count = 0 ;

// pulsButton.addEventListener("click", () => {
//     count ++;
//     resultH1.innerHTML = count;
// });
pulsButton.onclick = () => {
    count ++;
    resultH1.innerHTML = count;
};

// (함수정의)();
// (function (){

// })
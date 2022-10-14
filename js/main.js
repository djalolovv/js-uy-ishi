let btn1 = document.querySelector(".btn-1")
let btn2 = document.querySelector(".btn-2")
let btn3 = document.querySelector(".btn-3")
let btnImg = document.querySelector(".btn-img1")
let btnImg2 = document.querySelector(".btn-img2")
let btnImg3 = document.querySelector(".btn-img3")

btn1.addEventListener("click", function(){
    alert("HTML")
    console.log(prompt("Htmlda biron bir textni qiyaroq yani yotqizibro yozish uchun qaysi kod yoziladi?"));
    console.log(prompt("Htmlda textni to'qroq qilish uchun qanday kod yoziladi"));
    console.log(prompt("Htmlda chiziq qanday kod orqali chiqariladi?"));
    btnImg.classList.add("open")
} )
btn2.addEventListener("click", function(){
    alert("CSS")
    console.log(prompt("Cssda box-sizing:border-box; nma vazifani bajaradi"));
    console.log(prompt("Cssda * nmani bildiradi"));
    console.log(prompt("Cssda z-index nma vazifani bajaradi?"));
    btnImg2.classList.add("open")
} )
btn3.addEventListener("click", function(){
    alert("JS")
    console.log(prompt("Js da deasign nima?"));
    console.log(prompt("Framework nima? va u js kerakmi?"));
    console.log(prompt("Node Js framworkmi?"));
    console.log(prompt("JS da varni deasign qilsa bo'ladimi?"));
    btnImg3.classList.add("open")
} )
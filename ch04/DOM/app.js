// document.body.children[1].children[0].href = "https://google.com";  //<- DOM 드릴 접근

let aElement = document.getElementById("external-link");
aElement.href = "https://google.com";

aElement = document.querySelector("p a");
aElement.href = "https://naver.com";

//연습문제
let h1Element = document.body.children[0];
console.log(h1Element.parentElement);
console.log(h1Element.nextElementSibling);

h1Element = document.getElementById("h1-element");
console.log(h1Element);

let pElement = document.querySelector("body p");
console.log(pElement);
pElement.textContent = "messi"
console.log(pElement.getAttributeNode);

//요소 추가
let newAElement = document.createElement("a");
newAElement.textContent = ", hello"
newAElement.href = "https://naver.com"

let firstP = document.querySelector("body p");

firstP.append(newAElement);


//요소 삭제
let removeH1Element = document.querySelector("h1");

removeH1Element.remove();
// removeH1Element.parentElement.removeChild(removeH1Element);

firstP.parentElement.append(firstP);

//inner html
firstP.innerHTML = "Hi! this is <Strong>important!</String>"
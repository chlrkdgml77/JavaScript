// const listItem = document.querySelectorAll("li");
// console.log(listItem);

// const arrayList = Array.from(listItem);
// console.log(arrayList);

// const arr = ["messi", "pedri", "xavi"];
// arr.splice(0, 1, "dejong");
// console.log(arr);

// const price = [1.2, 52.12, 3.4, 51.11];
// const newArr = [];
// price.forEach((price, index, prices) => {
//   const priceObj = {index: index, result: price * 3};
//   newArr.push(priceObj);
// })
// console.log(newArr);

// const price = [1.2, 52.12, 3.4, 51.11];
// const newArr = price.map((price, index, prices) => {
//   const priceObj = {index: index, result: price * 3};
//   return priceObj;
// })
// console.log(newArr);

const price = [1.2, 52.12, 3.4, 51.11];
const sortPrice = price.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  else if (a === b) {
    return 0;
  }
  else {
    return -1;
  }
})
console.log(sortPrice);

const filterPrice = price.filter((price, index, prices) => {
  return price > 4;
})
console.log(filterPrice);

const sum = price.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0)
console.log(sum);

const nameData = ["messi", "Leo"];
const [fName, lName] = nameData; 
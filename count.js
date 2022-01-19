/**
 * 记数排序
 */
function count_sort(arr) {
  const obj = {};
  for(let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }
  const number = Object.keys(obj);
  const count = Object.values(obj);
  let newArr = [];
  number.forEach((item, index) => {
    const sameArr = Array(count[index]).fill(+item);
    newArr = [...newArr, ...sameArr];
  });
  return newArr;
}
console.log(count_sort([10,2,6,4,0,8]));
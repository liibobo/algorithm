/**
 * 算法排序问题
 */
/**
 * 二分法排序
 */
// const arr = [1, 2, 4, 1, 5, 7, 4, 6, 0, 20, 9];
// function twoSplitSort(arr) {
//   if (arr.length == 0) {
//     return arr;
//   }
//   const temp = arr[0];
//   const leftArr = [];
//   const rightArr = [];
//   for(let i = 1; i < arr.length; i++) {
//     if (temp > arr[i]) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i])
//     }
//   }
//   return [...twoSplitSort(leftArr), temp, ...twoSplitSort(rightArr)];
// }
// console.log(twoSplitSort(arr));

/**
 * 插入排序
 * 如何在一个有序数组中插入一个新值，让其保持一定的顺序
 */

const arr = [1, 2, 4, 1, 5, 7, 4, 6, 0, 20, 9];
// const arr = [1, 2, 3, 4];
// 【1， 2， 3， 4， 1】
// 指针 arr[4] 相当于null
// 开始计算 前 （计算1） // target 1， index 4,  temp 3   //(前) 【1， 2， 3， 4， 1】  //（后） 【1， 2， 3， 4， 4】
// 指针 arr[3] 相当于null
// 开始计算 前 （计算2） // target 1， index 4,  temp 2   //(前) 【1， 2， 3， 4， 4】  //（后） 【1， 2， 3， 3， 4】
// 指针 arr[2] 相当于null
// 开始计算 前 （计算3） // target 1， index 4,  temp 1   //(前) 【1， 2， 3， 3， 4】  //（后） 【1， 2， 2， 3， 4】
// 指针 arr[1] 相当于null
// 开始计算 前 （计算4） // target 1， index 4,  temp 0   //(前) 【1， 2， 2， 3， 4】  //（后） 【1， 1， 2， 3， 4】x

function insert(arr, item) {
  let index = arr.length - 1;
  while(index >= 0 && arr[index] > item) {
    arr[index+1] = arr[index];
    index--;
  }
  arr[index+1] = item;
}

function insertSort(arr) {
  const temp = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    insert(temp, arr[i]);
  }
  return temp;
}
console.log(insertSort(arr));


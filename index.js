/**
 * 算法排序问题
 */
/**
 * 二分法排序
 * 
 */
const arr = [1, 2, 4, 1, 5, 7, 4, 6, 0, 20, 9];
function twoSplitSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const leftArr = [];
  const rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...twoSplitSort(leftArr), arr[0], ...twoSplitSort(rightArr)];
}
console.log(twoSplitSort(arr));

/**
 * 插入排序
 * 如何在一个有序数组中插入一个新值，让其保持一定的顺序
 */
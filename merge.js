// const arr = [3, 27, 38, 43, 9, 10, 82];
// 归并排序
function merge(arr, p, q, r) {
  const left = arr.slice(p, q);
  const right = arr.slice(q, r);
  left.push(Number.MAX_SAFE_INTEGER);
  right.push(Number.MAX_SAFE_INTEGER);
  for(let k = p, i = 0, j = 0; k < r; k++) {
    arr[k] = left[i] < right[j] ? left[i++] : right[j++];
  }
}
// const a = [1,3,5,2,4,6];
// const b = [2,4,6, 1,3,5];
// const c = [2, 1];
// merge(a, 0, 3, 6);
// merge(b, 1, 3, 5);
// merge(c, 0, 1, 2);

// console.log(a);
// console.log(b);
// console.log(c);

function merge_sort(arr, p, r) {
  if (r - p < 2) {
    return
  }
  const q = Math.ceil((p + r) / 2);
  merge_sort(arr, p, q);
  merge_sort(arr, q, r);
  merge(arr, p, q, r);
}

const arr = [23,15,24,35,55,67,13,34,51,234,4,88,9];
merge_sort(arr, 0, arr.length);
console.log(arr);
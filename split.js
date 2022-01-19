// const arr = [90, 10, 30, 90, 40, 180, 70, 90, 10, 30, 90, 40, 180, 70];
// function quickSort(a) {
//   if (a.length <= 1) {
//     return a;
//   }
//   const pivot = a[0];
//   const left = [], right = [];
//   for(let i = 1; i < a.length; i++) {
//     pivot <= a[i] ? right.push(a[i]) : left.push(a[i]);
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort(arr));
// const arr = [10, 30, 90, 40, 180, 70];



// function swap(a, i, j) {
//   [a[i], a[j]] = [a[j], a[i]];
// }
// function partition(arr, lo, hi) {
//   const pivot = arr[hi - 1];
//   let i = lo;
//   let j = hi - 1;
//   while(i !== j) {
//     if (arr[i] > pivot) {
//       j--;
//       swap(arr, i, j);
//     } else {
//       i++;
//     }
//   }
//   swap(arr, j, hi - 1);
//   return j;
// }
// function partSort(a, lo = 0, hi = arr.length) {
//   if (hi - lo <= 1) {
//     return;
//   }
//   const j = partition(a, lo, hi);
//   partSort(a, lo, j);
//   partSort(a, j, hi);
// }

// partSort(arr);
// console.log(arr);





const arr = [90, 10, 30, 90, 40, 180, 70];
function swap (arr, i, j) {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}
function partition(arr, li, lo) {
  const pivot = arr[lo - 1];
  let i = li, j = lo - 1;
  while(i !== j) {
    if (arr[i] > pivot) {
      swap(arr, i, --j);
    } else {
      i++;
    }
  }
  swap(arr, j, lo-1);
  return j;
}

function par_sort(arr, li = 0, lo = arr.length) {
  if (lo - li <= 1) {
    return;
  }
  const p = partition(arr, li, lo);
  par_sort(arr, li, p);
  par_sort(arr, p, lo);
}
par_sort(arr, 0, arr.length);
console.log(arr)

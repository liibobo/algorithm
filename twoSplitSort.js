function swap(a, i, j) {
  [a[i], a[j]] = [a[j], a[i]];
}
function partition(a, lo, hi) {
  const pivot = a[hi - 1];
  let i = lo, j = hi - 1;
  while (i !== j) {
    a[i] <= pivot ? i++ :  swap(a, i, --j);
  }
  swap(a, j, hi - 1);
  return j;
}
const arr = [10, 90, 30, 90, 40, 180, 70];
function qsort(arr, lo = 0, hi = arr.length) {
  if (hi - lo <= 1) {
    return;
  }
  const p = partition(arr, lo, hi);
  qsort(arr, lo, p);
  qsort(arr, p, hi);
}
qsort(arr);
console.log(arr);
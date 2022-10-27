const sort = (arr, n) => {
  console.log(arr);
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);

  var i = 0;
  j = n - 1;
  while (i < j) {
    document.write(arr[j--] + ' ');
    document.write(arr[i++] + ' ');
  }

  if (n % 2 != 0) document.write(arr[i]);
};

// var arr = [2, 4, 6, 8, 10];
var arr = [1, 12, 4, 6, 7]
var n = arr.length;
sort(arr, n);

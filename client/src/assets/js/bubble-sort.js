function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  var nums = [7, 3, 5, 8, 2, 9, 0, 1, 4, 6];
  
  sort(nums);
  
  console.log(nums);
  
  function reverse(str) {
    if (str === "") {
      return;
    } else {
      return reverse(str.substring(1)) + strcharAt(0);
    }
  }
  
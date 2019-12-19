function sort(arr) {
    var selected;
  
    for (var i = 0; i < arr.length - 1; i++) {
      selected = i;
  
      var min = arr[selected];
      for (var j = i; j < arr.length - 1; j++) {
        if (min > arr[j + 1]) {
          min = arr[j + 1];
          selected = j + 1;
        }
      }
  
      if (i != selected) {
        var temp = arr[i];
        arr[i] = arr[selected];
        arr[selected] = temp;
      }
    }
  }
  
  var test = [70, 50, 60, 20, 40];
  
  sort(test);
  
  console.log(test);
  
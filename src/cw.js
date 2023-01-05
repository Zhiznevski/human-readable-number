function add(num1, num2) {
    const arr1 = num1.toString(10).split('').map(int=>parseInt(int, 10));
    console.log(arr1)
    const arr2 = num2.toString(10).split('').map(int=>parseInt(int, 10));
    console.log(arr2)
    if (arr2.length<arr1.length) {
        arr2.unshift(0);
    }
    if (arr2.length>arr1.length) {
        arr1.unshift(0);
    }
    sum = [];
    for(i=0; i < arr1.length; i++) {
        
        sum[i] = arr1[i] + arr2[i]

    }
    return sum.join('');
  }
 console.log(add(2, 11))

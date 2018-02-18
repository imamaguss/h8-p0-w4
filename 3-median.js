function cariMedian(arr) {
    var panjang = arr.length;
    var tengah = arr.length/2;
    var numGenap = (arr[tengah] + arr[tengah-1])/2;
    var numGanjil = Math.floor(tengah);

    if (panjang % 2 === 0) {    
        return numGenap;
    }    
        return arr[numGanjil];
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

/* Note:
===============================================================
Median merupakan nilai tengah dari sebuah deret bilangan.
===============================================================
*/
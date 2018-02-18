function totalDigitRekursif(angka) {
    var arr = String(angka).split('');
    var arrMax = arr.length-1;
    var lastArr = arr[arrMax];
    
    if (arrMax === 0) {
        return parseInt(angka);
    } else {
        arr.pop();
        arr = arr.join('');
        arr = parseInt(arr);
        return parseInt(lastArr) + (totalDigitRekursif(arr))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
function digitPerkalianMinimum(angka) {
    var jumlahDigit = angka + 1;

    for (var i = 1; i <= angka; i ++) {
    if(angka % i === 0){
        var faktor = angka/i;
        var digit = i.toString() + faktor.toString();
        
        if(digit.length < jumlahDigit){
            jumlahDigit = digit.length;
        }
      }
    }
    return jumlahDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
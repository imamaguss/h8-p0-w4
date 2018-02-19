function kaliTerusRekursif(angka) {
    if (String(angka).length === 1) {
        return angka;
    }
    else {
        var arr = String(angka).split('');
        var hasil = 1;

        for (var i = 0; i < arr.length; i++) {
          hasil *= arr[i];
        }
            if (String(hasil).length === 1){
                return hasil;
            } else {
                return kaliTerusRekursif(hasil)
            }
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
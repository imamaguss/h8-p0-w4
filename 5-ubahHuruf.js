function ubahHuruf(kata) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var convert = '';

    for(var i = 0; i < kata.length; i++){           
       convert += alpha[alpha.indexOf(kata[i]) + 1]
    }
    return convert;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
function hitungHuruf(kata){
    var splited = kata.split(' ');
    var tmpUnique= [];
    var tmpFreq= [];

    for (var i = 0; i < splited.length; i++) {
        var unique = [];
        var freq= [];
        
        for (var j = 0; j < splited[i].length; j++) {
            if (unique.indexOf(splited[i][j]) === -1) {
                unique.push(splited[i][j]);
                freq.push(0)
            } else {
                var posUnique = unique.indexOf(splited[i][j]);
                freq[posUnique] += 1;
            }
        }

        var total = 0;
        for (var k = 0; k < freq.length; k++) {
        total = total + freq[k];    
        }  
        tmpUnique.push(unique);
        tmpFreq.push(total)
    }

    var highest = tmpFreq[0];
    var result;
        for (var m = 0; m < tmpFreq.length; m++){
            if (tmpFreq[m] > highest) {
                highest = tmpFreq[m];
                result = m;
            }
    }
    return splited[result];
}
  
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
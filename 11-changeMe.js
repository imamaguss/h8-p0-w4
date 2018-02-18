function changeMe(arr){
    for(var i = 0; i < arr.length; i++){
        var usia = '';
        if(arr[i][3] === undefined){
            usia = 'Invalid Birth Year';
        } else {
            usia = 2018 - arr[i][3];
        }
    
        var person = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age: usia
        };
        
        console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`);
        console.log(person);
    }    
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male', ]]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // 
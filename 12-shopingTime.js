function shoppingTime(memberId, money) {
    var xShop = {
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney : money
    };
    //Item Price List
    var stacattuPrice = 1500000;
    var zoroPrice = 500000;
    var hnnPrice = 250000;
    var unikloohPrice = 175000;
    var casingPrice = 50000;

    if(memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else {
        if(memberId === ''){
            return 'Mohon maaf, toko X hanya berlaku untuk member saja';
        } 
        if(money < 50000){
            return 'Mohon maaf, uang tidak cukup';
        } else {
            console.log('masuk awal', money)
            if(money >= stacattuPrice){ // 1500000
                xShop.listPurchased.push('Sepatu Stacattu')
                xShop.changeMoney -= stacattuPrice;
            }

            if(money >= zoroPrice){ // 500000
                xShop.listPurchased.push('Baju brand Zoro');
                xShop.changeMoney -= zoroPrice;
            }

            if(money >= hnnPrice){ // 250000
                xShop.listPurchased.push('Baju brand H&N');
                xShop.changeMoney -= hnnPrice;
            }

            if(money >= unikloohPrice){ // 175000
                xShop.listPurchased.push('Sweater brand Uniklooh');
                xShop.changeMoney -= unikloohPrice;
            }

            if(money >= casingPrice){ // 50000
                xShop.listPurchased.push('Casing Handphone');
                xShop.changeMoney -= casingPrice;
            }
        }

        return xShop;
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
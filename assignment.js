
// kilometerToMeter
function KilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}


// budgetCalculator

function  budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch*50;
    var mobilePrice = mobile*100;
    var laptopPrice = laptop*500;
    
    var totalBudget = watchPrice + mobilePrice + laptopPrice;
    return totalBudget;
}
var totalprice = budgetCalculator(4, 2, 1);

// hotelCost

function hotelCost(day){  
    var discount = 0;
    var roomRent = 0;
    
        if(day <=10){
            roomRent = day*100;
            discount = 0;
        }
        if((day>=11) && (day<=20)){
            roomRent = day*80;
            discount = 20;
        }
        if(day>=21){
            roomRent = day*50;
            discount = 50;
        }
        return roomRent;
    }
    var totalRant = hotelCost(18);
    console.log(totalRant);

    // megaFriend
    function megaFriend (largeName){
        var long = largeName[0];
        for (var i =0; i <largeName.length; i++){
            var element = largeName[i];
            if (largeName.length < element.length){
                long = element;
            }
        }
            return long;
    }
        var list = ['tipo', 'jon', 'robin', 'rambo', 'mojammel'];
        var longName = megaFriend(list );
        console.log(longName);
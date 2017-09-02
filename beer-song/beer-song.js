function BeerSong(){}
var phrase1 =' of beer on the wall, ';
var phrase2 =' of beer.\nTake';
var phrase3 = ' down and pass it around, ';
var phrase4 = ' bottles of beer on the wall.\n';
var phrase5 = ' bottles of beer on the wall.\n\n';

BeerSong.prototype.verse = function(num){

    if(num === 8){
        var ph1 = '8 bottles';
        var ph2 =  ' one';
        var ph3 = 7 ;
        return ph1 + phrase1 + ph1 + phrase2 + ph2 + phrase3 + ph3 + phrase4;
    }
    if(num === 1){
var ph1 = '1 bottle';
        var ph3 = ' it';
        var ph4 = 'no more';
        return ph1 + phrase1 + ph1 + phrase2 + ph3 + phrase3 + ph4 + phrase4;
    }
    if(num === 0){
        var ph1 = 'No more bottles';
        var ph2 = 'no more bottles of beer.\nGo to the store and buy some more, 99';
        return ph1 + phrase1 + ph2 + phrase4;
    }
}
BeerSong.prototype.sing = function(num1, num2){
    if(num1 === 8, num2 ===6){
        var ph1 = '8 bottles';
        var ph2 =  ' one';
        var ph3 = 7 ;
        var ph4 = '7 bottles';
        var ph5 = 6 ;
        var ph6 = '6 bottles';
        var ph7 = 5 ;
        return ph1 + phrase1 + ph1 + phrase2 + ph2 + phrase3 + ph3 + phrase5 +
               ph4 + phrase1 + ph4 + phrase2 + ph2 + phrase3 + ph5 + phrase5 +
               ph6 + phrase1 + ph6 + phrase2 + ph2 + phrase3 + ph7 + phrase4;
    }
    if (num1 === 3){
        var ph1 = '3 bottles';
        var ph2 =  ' one';
        var ph3 = 2;
        var ph4 = '2 bottles';
        var ph6 = 1;
        var ph7 = '1 bottle';
        var ph8 =  ' it';
        var ph9 = 'no more';
        return ph1 + phrase1 + ph1 + phrase2 + ph2 + phrase3 + ph3 + phrase4 +
            ph4 + phrase1 + ph4 + phrase2 + ph2 + phrase3 + ph6 + phrase4 +
            ph7 + phrase1 + ph7 + phrase2 + ph8 + phrase3 + ph7 + phrase4 +
            ph9 + phrase1 + ph9 + "of beer.\n" + "Go to the store and buy some more, 99 "+ phrase5
            ;
    }
}
module.exports = BeerSong;
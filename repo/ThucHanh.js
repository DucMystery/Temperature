 // Tao class Temperature
 let Temperautre = function (numberC) {
   this.numberC= numberC;
   this.getSwapF = function () {
    return numberC*1.8+32;
   }
   this.getSwapK = function () {
    return numberC+273.15;
   }
 }
 let doC = new Temperautre(10);
alert(doC.getSwapF());
alert(doC.getSwapK());
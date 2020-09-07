

var Currentamount =document.getElementById("fival").value;
    Currentamount=parseFloat(Currentamount);
var fiamount= document.getElementById("fiamount").innerText;
    fiamount=parseFloat(fiamount);


var sCurrentamount =document.getElementById("sival").value;
    sCurrentamount=parseFloat(sCurrentamount);
var siamount= document.getElementById("siamount").innerText;
    siamount=parseFloat(siamount); 

    function addRemove(isIncrease){

        if(isIncrease==true){
            Currentamount=Currentamount+1;
        }
        if(isIncrease==false && Currentamount>0){

            Currentamount=Currentamount-1;
        }
        
        var Newfiamount=fiamount*Currentamount
        document.getElementById("fival").value = Currentamount;
        document.getElementById("fiamount").innerText=Newfiamount;
    }

    function caseCOunt (isIncrease){
        if(isIncrease==true){
            sCurrentamount=sCurrentamount+1;
        }
        if(isIncrease==false && sCurrentamount>0){
            sCurrentamount=sCurrentamount-1;
        }
       
        var sNewfiamount=siamount*sCurrentamount
        document.getElementById("sival").value = sCurrentamount;
        document.getElementById("siamount").innerText=sNewfiamount;
    }




    


   


    





